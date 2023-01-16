import React from 'react';
import firebase from '../Firebase/firebaseConnection';
import { useNavigate } from 'react-router-dom';

export const UserContext = React.createContext();

export const UserStorage = ({ children }) => {
  const [login, setLogin] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const [user, setUser] = React.useState('');
  const navigate = useNavigate();

  const userLogout = React.useCallback(
    async function logout() {
      await firebase.auth().signOut();

      window.localStorage.removeItem('gd_uid');
      window.localStorage.removeItem('gd_user');
      setLogin(false);
      navigate('/autenticacao');
    },
    [navigate],
  );

  async function userLogin(email, senha) {
    try {
      setError(null);
      setLoading(true);
      await firebase
        .auth()
        .signInWithEmailAndPassword(email, senha)
        .then(async (value) => {
          await firebase
            .firestore()
            .collection('users')
            .doc(value.user.uid)
            .get()
            .then((snapshot) => {
              window.localStorage.setItem('gd_uid', value.user.uid);
              window.localStorage.setItem('gd_user', snapshot.data().nome);
              setUser(snapshot.data().nome);
              setLogin(true);
              navigate('/favoritos');
            });
        });
    } catch (err) {
      console.log(err.code);
      if (err.code === 'auth/user-not-found') {
        setError('E-mail não cadastrado');
      } else if (err.code === 'auth/wrong-password') {
        setError('Senha Inválida');
      } else {
        setError(err.message);
      }
      setLogin(false);
    } finally {
      setLoading(false);
    }
  }

  async function novoUsuario(nome, email, senha, telefone) {
    await firebase
      .auth()
      .createUserWithEmailAndPassword(email, senha)
      .then(async (value) => {
        await firebase
          .firestore()
          .collection('users')
          .doc(value.user.uid)
          .set({
            nome: nome,
            telefone: telefone,
          })
          .then(() => {
            window.localStorage.setItem('gd_uid', value.user.uid);
            window.localStorage.setItem('gd_user', nome);
            setError(null);
            setUser(nome);
            setLogin(true);
            navigate('/favoritos');
            window.open('https://t.me/+6JN2oQW-M5BlMTlh', '_blank');
          });
      })
      .catch((error) => {
        if (error.code === 'auth/weak-password') {
          setError(
            'Senha muito fraca. A senha deve conter no Mínimo 6 caracteres',
          );
        } else if (error.code === 'auth/email-already-in-use') {
          setError('Esse email já existe!');
        }
      });
  }

  async function esqueceuSenha(email) {
    await firebase
      .auth()
      .sendPasswordResetEmail(email)
      .then(function () {
        alert(
          'Altere a senha clicando no link que você recebeu no seu e-mail ' +
            email,
        );
      })
      .catch(function (error) {
        if (error.code === 'auth/invalid-email') {
          setError('E-mail inválido');
        } else if (error.code === 'auth/user-not-found') {
          setError('E-mail não cadastrado');
        } else {
          console.log(error);
          setError(error);
        }
      });
  }

  React.useEffect(() => {
    async function autoLogin() {
      const token = window.localStorage.getItem('gd_uid');
      if (token) {
        try {
          setLogin(true);
          setError(null);
          setLoading(true);
          setUser(window.localStorage.getItem('gd_user'));
        } catch (err) {
          userLogout();
        } finally {
          setLoading(false);
        }
      } else {
        setLogin(false);
      }
    }
    autoLogin();
  }, [userLogout]);

  return (
    <UserContext.Provider
      value={{
        novoUsuario,
        userLogin,
        userLogout,
        esqueceuSenha,
        user,
        error,
        loading,
        login,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
