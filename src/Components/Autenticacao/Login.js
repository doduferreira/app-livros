import { useState } from 'react';
import firebase from '../../Firebase/firebaseConnection';

function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const [user, setUser] = useState({});

  async function logout() {
    await firebase.auth().signOut();
  }

  async function login() {
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
            setUser({
              nome: snapshot.data().nome,
              cargo: snapshot.data().cargo,
              status: snapshot.data().status,
              email: value.user.email,
            });
          });
      })
      .catch((error) => {
        console.log('ERRO AO LOGAR' + error);
      });
  }

  async function forgotPassword() {
    await firebase
      .auth()
      .sendPasswordResetEmail(email)
      .then(function () {
        // Email sent.
      })
      .catch(function (error) {
        // An error happened.
      });
  }

  return (
    <div>
      <h1>ReactJS + Firebase :)</h1> <br />
      <div className="container">
        <label>Email</label>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />{' '}
        <br />
        <label>Senha</label>
        <input
          type="password"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />{' '}
        <br />
        <button onClick={login}>Fazer Login</button>
        <button onClick={logout}>Sair da conta!</button>
        <button onClick={forgotPassword}>Esqueci a senha</button>
      </div>
      <hr /> <br />
      {Object.keys(user).length > 0 && (
        <div>
          <strong>Olá </strong> {user.nome} <br />
          <strong>Cargo: </strong> {user.cargo} <br />
          <strong>Email: </strong> {user.email} <br />
          <strong>Status: </strong> {user.status ? 'ATIVO' : 'DESATIVADO'}{' '}
          <br />
        </div>
      )}
    </div>
  );
}

export default Login;
