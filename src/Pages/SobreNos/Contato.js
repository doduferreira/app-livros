// import React from 'react';
// import Input from '../Forms/Input';
// import Button from '../Forms/Button';
// import styleButton from '../StylesGlobal/Button.module.css';
// import styles from './Contato.module.css';
// import useForm from '../../Hooks/useForm';
// import useFetch from '../../Hooks/useFetch';
// import { AWS_POST_CONTATO } from '../Integracoes/Api';
// import { Container, Spinner } from 'react-bootstrap';
// import Error from '../Helper/Error';
// import Helmet from 'react-helmet';

// const Contato = () => {
//   const { data, loading, error, request } = useFetch();
//   const [prenchimento, setPreenchimento] = React.useState(false);
//   const nome = useForm();
//   const email = useForm();
//   const telefone = useForm();
//   const contato = useForm();
//   const [receberConteudo, setReceberConteudo] = React.useState(false);
//   const [erroNegocio, setErroNegocio] = React.useState(null);

//   async function handleSubmit(event) {
//     event.preventDefault();
//     let valida = true;
//     if (nome.value === '') {
//       valida = false;
//     }
//     if (email.value === '') {
//       valida = false;
//     }
//     if (telefone.value === '') {
//       valida = false;
//     }
//     if (contato.value === '') {
//       valida = false;
//     }

//     let recebe_conteudo = false;
//     if (receberConteudo) {
//       recebe_conteudo = true;
//     }

//     console.log(valida);
//     if (valida) {
//       setErroNegocio(null);
//       const { url, options } = AWS_POST_CONTATO({
//         nome: nome.value,
//         email: email.value,
//         telefone: telefone.value,
//         contato: contato.value,
//         receber_conteudo: recebe_conteudo,
//       });
//       const { response } = await request(url, options);

//       let p = document.getElementById('p1');

//       if (document.getElementById('principal').contains(p)) {
//         console.log('ja exiete');
//       } else {
//         const divResponsta = document.getElementById('principal');
//         var node = document.createElement('p'); // Create a <li> node
//         node.setAttribute('id', 'p1');
//         var textnode = document.createTextNode(
//           'Obrigado por entrar em contato com o time do Guardar Dinheiro. Logo retornaremos uma resposta',
//         );
//         node.appendChild(textnode);
//         document.getElementById('principal').appendChild(node);

//         var element = document.getElementById('p1');
//         element.classList.add('paragrafoSucesso');
//       }
//     } else {
//       setErroNegocio(
//         'Favor preencher todos os campos acima para entrar em contato conosco',
//       );
//     }
//   }

//   function handleClickReceberConteudo(event) {
//     setReceberConteudo(!receberConteudo);
//     console.log(receberConteudo);
//   }

//   return (
//     <div className="App">
//       <Helmet>
//         <meta
//           name="description"
//           content="Onde Guardar Dinheiro - Acesse ferramentas e informações gratuitas para saber onde guardar dinheiro com segurança em fundos de investimento, renda fixa, renda variável. Compare rentabilidades e retornos de produtos várias instituições financeiras, bancos e corretoras. "
//         />
//         <title>Guardar Dinheiro</title>
//       </Helmet>

//       <Container>
//         <div id="principal">
//           <h1 className={styles.h1}>Contato</h1>
//           <p className={styles.paragrafo}>
//             Entre em contato com o time do Guardar Dinheiro utilizando o
//             formulário abaixo.
//           </p>

//           <form onSubmit={handleSubmit}>
//             <Input
//               style={{ color: 'red' }}
//               type="text"
//               name="nomeCliente"
//               placeholder="Informe seu Nome"
//               {...nome}
//             ></Input>
//             <Input
//               type="email"
//               name="email"
//               placeholder="Informe seu E-mail"
//               {...email}
//             ></Input>
//             <Input
//               type="text"
//               name="telefone"
//               placeholder="Informe seu Telefone"
//               {...telefone}
//             ></Input>
//             <Input
//               type="text"
//               name="memo"
//               placeholder="Deixe aqui sua dúvida, crítica ou elogio"
//               {...contato}
//             ></Input>
//             <input
//               type="checkbox"
//               id="chkReceberEmails"
//               onClick={handleClickReceberConteudo}
//             ></input>{' '}
//             <label for="chkReceberEmails">
//               Desejo receber em primeira mão conteúdos do Guardar Dinheiro
//             </label>
//             <br></br>
//             {loading ? (
//               <Button disabled>
//                 <Spinner
//                   as="span"
//                   animation="border"
//                   size="sm"
//                   role="status"
//                   aria-hidden="true"
//                 />
//                 CARREGANDO...
//               </Button>
//             ) : (
//               <Button className={styleButton.button}>Enviar</Button>
//             )}
//             <Error error={error} />
//             <Error error={erroNegocio} />
//           </form>
//         </div>
//       </Container>
//     </div>
//   );
// };

// export default Contato;
