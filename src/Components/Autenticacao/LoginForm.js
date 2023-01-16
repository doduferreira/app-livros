import React from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../Contexts/UserContext';
import useForm from '../../Hooks/useForm';
import stylesLogin from './LoginForm.module.css';
// import fgLogo from '../../Assets/logo-site-guardar-dinheiro.png';
import fgLogo from '../../Assets/logo1.png';
import Error from '../../Components/Helper/Error';

const LoginForm = () => {
  const email = useForm();
  const senha = useForm();
  const { userLogin, error } = React.useContext(UserContext);
  const [erroNegocio, setErroNegocio] = React.useState(null);

  async function handleSubmit(event) {
    event.preventDefault();

    if (email.value === '' || senha.value === '') {
      setErroNegocio('Favor preencher email e senha para acessar');
    } else {
      if (email.validate() && senha.validate()) {
        setErroNegocio(null);
        userLogin(email.value, senha.value);
      }
    }
  }

  return (
    <div className="App">
      <div className={stylesLogin.containerCenter}>
        <div className={stylesLogin.login}>
          <div className={stylesLogin.loginArea}>
            <img
              src={fgLogo}
              alt="Sistema Logo"
              style={{ width: '230px', height: '120px' }}
            />
          </div>
          <form className={stylesLogin.form} onSubmit={handleSubmit}>
            {/* <h1>Entrar</h1> */}

            <input
              className={stylesLogin.loginInput}
              type="text"
              placeholder="email@email.com"
              name="email"
              {...email}
            />
            <br />
            <input
              className={stylesLogin.loginInput}
              type="password"
              placeholder="*******"
              name="senha"
              {...senha}
            />
            <br />
            <button className={stylesLogin.formButton}>Fazer Login</button>
            <Error error={erroNegocio} />
            <Error error={error} />
          </form>
          <br />
          <Link to="/autenticacao/criar" className={stylesLogin.loginA}>
            Crie uma conta
          </Link>

          <Link to="/autenticacao/perdeu" className={stylesLogin.loginA}>
            Esqueceu a Senha? Clique aqui
          </Link>
        </div>
        <hr /> <br />
      </div>
    </div>
  );
};

export default LoginForm;
