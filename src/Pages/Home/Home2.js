import React from 'react';
import styles from './Home2.module.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';
// import { faUserFriends } from '@fortawesome/free-solid-svg-icons';
import CountUp from 'react-countup';
import Telegram from '../../Components/RedesSociais/Telegram';
import { isMobile } from 'react-device-detect';
import Head from '../../Components/Tags/Head';
import RatingStars from '../../Components/Rating/RatingStars';

const Home2 = () => {
  const navigate = useNavigate();
  // const { login } = React.useContext(UserContext);

  return (
    <>
      <Head
        metaDescription="Guardar Dinheiro é um portal gratuito que oferece informações do mercado financeiro que ajuda os investidores a escolher o melhor investimento do momento."
        title="Guardar Dinheiro - Melhores Investimentos de 2023"
        h1="Guardar Dinheiro"
        canonical="https://www.guardardinheiro.com.br/"
        nivel="1"
      />

      <div className={styles.telegram}>
        <div className={styles.itemTelegram}>
          <p className={styles.pTelegram}>
            ACESSE NOSSO LISTA VIP NO TELEGRAM E RECEBA DICAS DOS MELHORES
            INVESTIMENTOS DE 2023
          </p>
        </div>
        <div className={styles.itemTelegram2}>
          {/* <button className={styles.buttonTelegram}>ACESSAR</button> */}
          <a
            className={styles.buttonTelegram}
            href="https://t.me/+6JN2oQW-M5BlMTlh"
            target="_blank"
          >
            QUERO ENTRAR NA LISTA VIP
          </a>
        </div>
      </div>
      <section className={styles.leading}>
        <div>
          <h1 className={styles.h1}>Guardar Dinheiro</h1>
        </div>

        <div>
          <h2 className={styles.h2}>
            Ferramentas Gratuitas que ajuda os investidores a escolher o melhor
            investimento do momento
          </h2>

          <div className={styles.divCenter}>
            <p className={styles.paragrafoPessoas}>
              + DE{' '}
              <CountUp
                end={300}
                duration={1}
                className={styles.paragrafoQtde}
              />{' '}
              MIL Pessoas Utilzando o Guardar Dinheiro
            </p>
            <button
              className={styles.buttonCriarConta}
              onClick={() => {
                navigate('/autenticacao/criar');
              }}
            >
              QUERO ME CADASTRAR
            </button>
          </div>
        </div>
      </section>

      <div className={styles.divFerramentas}>
        <h3 className={styles.h3}>
          GUARDAR DINHEIRO | Melhores Investimentos de 2023
        </h3>

        <div className={styles.containerFerramentas}>
          <a
            href="/calculadora-renda-fixa"
            rel="dofollow"
            className={styles.itemFerramentas}
          >
            Renda Fixa
          </a>
          <a
            href="/fundos-de-investimento"
            rel="dofollow"
            className={styles.itemFerramentas}
          >
            Fundos de Investimento
          </a>

          <a
            href="/fundos-imobiliarios"
            rel="dofollow"
            className={styles.itemFerramentas}
          >
            Fundos Imobiliários
          </a>
          <a href="/acoes" rel="dofollow" className={styles.itemFerramentas}>
            Ações
          </a>
          <a href="/bdr" rel="dofollow" className={styles.itemFerramentas}>
            BDRs
          </a>
          <a href="/etf" rel="dofollow" className={styles.itemFerramentas}>
            ETFs
          </a>
          <a
            href="/criptomoeda"
            rel="dofollow"
            className={styles.itemFerramentas}
          >
            Criptomoedas
          </a>
        </div>
      </div>

      <div className={styles.divFerramentas}>
        <h3 className={styles.h3}>GUARDAR DINHEIRO | Simuladores</h3>

        <div className={styles.containerFerramentas}>
          <a
            href="/como-juntar/1000000"
            rel="dofollow"
            className={styles.itemFerramentas}
          >
            Primeiro Milhão
          </a>

          <a
            href="/calculadora-renda-fixa"
            rel="dofollow"
            className={styles.itemFerramentas}
          >
            Melhor Renda Fixa
          </a>
          <a
            href="/melhor-cartao-credito"
            rel="dofollow"
            className={styles.itemFerramentas}
          >
            Melhor Cartão de Crédito
          </a>
          <a
            href="/emprestimo/0/simulador"
            rel="dofollow"
            className={styles.itemFerramentas}
          >
            Melhor Empréstimo
          </a>
          <a
            href="/quanto/100/cdi"
            rel="dofollow"
            className={styles.itemFerramentas}
          >
            Simulador de % CDI
          </a>
          <a
            href="/quanto-rende/0/fundo-imobiliario"
            rel="dofollow"
            className={styles.itemFerramentas}
          >
            Simulador de Fundo Imobiliário
          </a>
        </div>
      </div>

      <div className={styles.divFerramentas}>
        <h3 className={styles.h3}>GUARDAR DINHEIRO | Últimos Artigos</h3>
      </div>

      <br />
      <div className={styles.divFerramentas}>
        <h3 className={styles.h3}>GUARDAR DINHEIRO | LISTA VIP TELEGRAM</h3>

        <Telegram />
      </div>
      <br />
      <hr />
      <RatingStars
        pagina="home"
        texto="O que achou da nossa página?"
        metaDescription="Guardar Dinheiro é um portal gratuito que oferece informações do mercado financeiro que ajuda os investidores a escolher o melhor investimento do momento."
        title="Guardar Dinheiro - Melhores Investimentos de 2023"
      />

      <hr />
    </>
  );
};

export default Home2;
