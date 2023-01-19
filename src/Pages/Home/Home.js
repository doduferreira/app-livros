import React from 'react';
import styles from './Home.module.css';
import { useNavigate } from 'react-router-dom';
import CountUp from 'react-countup';
import { isMobile } from 'react-device-detect';
import Head from '../../Components/Tags/Head';
import Botao from '../../Components/Forms/Botao';
import Header from '../../Header/Header';

const Home = () => {
  const navigate = useNavigate();
  // const { login } = React.useContext(UserContext);

  return (
    <>
      <Head
        metaDescription="Guardar Dinheiro é um portal gratuito que oferece informações do mercado financeiro que ajuda os investidores a escolher o melhor investimento do momento."
        title="Memorize Books "
        h1="Guardar Dinheiro"
        canonical="https://www.guardardinheiro.com.br/"
        nivel="1"
      />
      <Header />
      <div className={styles.container}>
        <div className={styles.containerItem}>
          <h2 className={styles.h2}>
            Você Lê e esquece rápido?
            <br />
            <span className={styles.underlineMagical}>Nunca mais esqueça </span>
          </h2>
          <br />
          <p className={styles.p}>
            Receba diariamente notificações das suas anotações favoritas dos
            seus livros já lidos, e relembre todas as frases importantes
          </p>
          <br />
          <Botao>Teste Gratuitamente</Botao>
        </div>
      </div>
      {/* <br /> */}
      <div className={styles.container2}>
        <h3 className={styles.h3} style={{ color: 'white' }}>
          Tudo que você precisa para memorizar os livros que você já leu
        </h3>
        {/* <div className={styles.itemContainer2}></div> */}
      </div>

      <div className={styles.container3}>
        <div className={styles.containerItem3}>
          <h3 className={styles.h3} style={{ color: '#334155;' }}>
            Simplifique seu aprendizado diariamente
          </h3>
          <p className={styles.p} style={{ color: '#334155;' }}>
            Informe os livros que deseja recordar que ajudamos você diariamente
            com uma nova mensagem para que você não precise mais abrir o liveo e
            ler novamente
          </p>
        </div>
      </div>
      <div className={styles.container2}>
        <div className={styles.containerItem2}>
          <h3 className={styles.h3} style={{ color: 'white' }}>
            Comece hoje mesmo
          </h3>
          <p className={styles.p} style={{ color: 'white' }}>
            Informe os livros que deseja recordar que ajudamos você diariamente
            com uma nova mensagem para que você não precise mais abrir o liveo e
            ler novamente
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
