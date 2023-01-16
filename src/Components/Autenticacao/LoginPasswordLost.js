import React from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../Contexts/UserContext';
import useForm from '../../Hooks/useForm';
import stylesLogin from './LoginForm.module.css';
// import fgLogo from '../../Assets/logo-site-guardar-dinheiro.png';
import fgLogo from '../../Assets/logo1.png';
import Error from '../../Components/Helper/Error';

const LoginPasswordLost = () => {
  const email = useForm();
  const { esqueceuSenha, error } = React.useContext(UserContext);
  const [erroNegocio, setErroNegocio] = React.useState(null);
  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();

    if (email.value === '') {
      setErroNegocio(
        'Favor preencher email para podermos te enviar o link para troca de senha',
      );
    } else {
      setErroNegocio(null);
      esqueceuSenha(email.value);
      navigate('/autenticacao');
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
            <h1 className={stylesLogin.formh1}>Recuperar Senha</h1>

            <input
              className={stylesLogin.loginInput}
              type="text"
              placeholder="email@email.com"
              name="email"
              {...email}
            />
            <br />

            <button className={stylesLogin.formButton}>Enviar</button>
            <Error error={erroNegocio} />
            <Error error={error} />
          </form>
          <br />
        </div>
        <hr /> <br />
      </div>
    </div>
  );
};

export default LoginPasswordLost;
