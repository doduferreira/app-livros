import React from 'react';
import useForm from '../../Hooks/useForm';
import { UserContext } from '../../Contexts/UserContext';
import stylesLogin from './LoginForm.module.css';
// import fgLogo from '../../Assets/logo-site-guardar-dinheiro.png';
import fgLogo from '../../Assets/logo1.png';
import Error from '../../Components/Helper/Error';
import Inputs from '../Forms/Inputs';

const LoginCreate = () => {
  const nome = useForm();
  const email = useForm();

  const senha = useForm();
  const telefone = useForm();
  const senhaConfirmada = useForm();
  const { novoUsuario, error } = React.useContext(UserContext);
  const [erroNegocio, setErroNegocio] = React.useState(null);

  async function handleSubmit(event) {
    event.preventDefault();
    let phoneFormat = true;
    let phoneCountry = document.getElementsByClassName(
      'PhoneInputCountryIconImg',
    );

    let phoneNumber = '';
    phoneNumber = document
      .getElementById('phone')
      .value.replace('(', '')
      .replace(')', '')
      .replaceAll('-', '')
      .replaceAll(' ', '');

    console.log(phoneCountry[0].alt);
    console.log(phoneNumber);
    console.log(phoneNumber.length);

    if (phoneCountry[0].alt === 'Brazil') {
      if (phoneNumber.toString().length === 11) {
        phoneNumber = '+55' + phoneNumber;
        console.log('1');
      } else {
        phoneFormat = false;
        console.log('2');
      }
    }

    if (phoneFormat) {
      if (
        nome.value === '' ||
        email.value === '' ||
        senha.value === '' ||
        senhaConfirmada.value === '' ||
        phoneNumber === ''
      ) {
        setErroNegocio(
          'Favor preenchar todos os campos para efetuar o cadastro',
        );
        // setErroNegocio('Telefone no formato incorreto');
      } else {
        if (senha.value === senhaConfirmada.value) {
          setErroNegocio(null);
          novoUsuario(nome.value, email.value, senha.value, phoneNumber);
        } else {
          setErroNegocio('Senha e Confirmação de Senha estão diferentes');
        }
      }
    } else {
      setErroNegocio('Telefone no formato incorreto');
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
            <h1 className={stylesLogin.formh1}>Criar Cadastro</h1>
            <Inputs
              tipo="normal"
              type="text"
              placeholder="informe seu nome ou apelido"
              name="nome"
              {...nome}
            />
            <Inputs
              tipo="normal"
              type="text"
              placeholder="email@email.com"
              name="email"
              {...email}
            />

            <Inputs tipo="phone" name="phone" {...telefone} />
            {/* <PhoneInput
              international={false}
              defaultCountry="BR"
              placeholder="telefone (__) _____-____"
              value={telefone}
              onChange={(e) => setTelefone(e.target.value)}
            /> */}

            <Inputs
              tipo="normal"
              type="password"
              placeholder="Senha  *******"
              name="senha"
              {...senha}
            />
            <Inputs
              tipo="normal"
              type="password"
              placeholder="Confirmar Senha  *******"
              name="senha"
              {...senhaConfirmada}
            />
            <button className={stylesLogin.formButton}>Cadastrar</button>
            <Error error={erroNegocio} />
            <Error error={error} />
            <br />
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginCreate;
