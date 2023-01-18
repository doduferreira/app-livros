import React from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../Contexts/UserContext';
import useForm from '../../Hooks/useForm';
import styles from './LoginForm.module.css';
import {
  faChevronCircleRight,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Error from '../../Components/Helper/Error';
import Botao from '../Forms/Botao';
import Logo from '../Logo/Logo';

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
      <div className={[styles.split, styles.left].join(' ')}>
        <div className={styles.centered}>
          <Logo />
          <p>Tudo que você precisa para memorizar os livros que você já leu</p>
        </div>
      </div>

      <div className={[styles.split, styles.right].join(' ')}>
        <div className={styles.centered}>
          <Logo />
          <br />
          <br />
          <form className={styles.form} onSubmit={handleSubmit}>
            {/* <h1>Entrar</h1> */}

            <div className={styles.inputGroup}>
              <input
                type="text"
                placeholder="email@email.com"
                name="email"
                {...email}
              />
              <label>E-mail</label>
            </div>
            <div className={styles.inputGroup}>
              <input
                type="password"
                placeholder="*******"
                name="senha"
                {...senha}
              />
              <label>Senha</label>
            </div>
            <br />
            <Botao>
              {'Login '}
              <FontAwesomeIcon icon={faChevronRight} />
            </Botao>
            <Error error={erroNegocio} />
            <Error error={error} />
          </form>
          <br />
          <Link to="/autenticacao/criar" className={styles.loginA}>
            Crie uma conta
          </Link>
          <br />
          <Link to="/autenticacao/perdeu" className={styles.loginA}>
            Esqueceu a Senha? Clique aqui
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
