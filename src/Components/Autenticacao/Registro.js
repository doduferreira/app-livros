import { useState } from 'react';
import firebase from '../../Firebase/firebaseConnection';

function Registro() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [cargo, setCargo] = useState('');
  const [nome, setNome] = useState('');

  async function novoUsuario() {
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
            cargo: cargo,
            status: true,
          })
          .then(() => {
            setNome('');
            setCargo('');
            setEmail('');
            setSenha('');
          });
      })
      .catch((error) => {
        if (error.code === 'auth/weak-password') {
          alert('Senha muito fraca..');
        } else if (error.code === 'auth/email-already-in-use') {
          alert('Esse email jรก existe!');
        }
      });
  }

  async function logout() {
    await firebase.auth().signOut();
  }

  return (
    <div>
      <h1>ReactJS + Firebase :)</h1> <br />
      <div className="container">
        <label>Nome</label>
        <input
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />{' '}
        <br />
        <label>Cargo</label>
        <input
          type="text"
          value={cargo}
          onChange={(e) => setCargo(e.target.value)}
        />{' '}
        <br />
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
        <button onClick={novoUsuario}>Cadastrar</button>
        <button onClick={logout}>Sair da conta!</button>
      </div>
    </div>
  );
}

export default Registro;
