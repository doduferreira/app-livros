import React from 'react';
import styles from './Home.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';
import {
  faMedal,
  faBalanceScaleLeft,
  faArrowCircleRight,
  faUserFriends,
  faTrophy,
  faStar,
  faHandHoldingUsd,
  faCoins,
} from '@fortawesome/free-solid-svg-icons';
import CountUp from 'react-countup';

import { UserContext } from '../../Contexts/UserContext';
import Telegram from '../../Components/RedesSociais/Telegram';
import { isMobile } from 'react-device-detect';

import Head from '../../Components/Tags/Head';

const Home = () => {
  const navigate = useNavigate();
  const { login } = React.useContext(UserContext);

  function handleClick({ target }) {
    console.log(target.id);
    window.scroll(0, 0);
    if (target.id.includes('melhores-fundos')) {
      navigate('/fundos-de-investimento');
    } else if (target.id.includes('melhores-fii')) {
      navigate('/fundos-imobiliarios');
    } else if (target.id.includes('melhores-acoes')) {
      navigate('/acoes');
    } else if (target.id.includes('melhores-etf')) {
      navigate('/etf');
    } else if (target.id.includes('melhores-bdr')) {
      navigate('/bdr');
    } else if (target.id.includes('melhores-cripto')) {
      navigate('/criptomoeda');
    } else if (target.id.includes('comparador-fundos')) {
      navigate('/comparador-fundos-de-investimentos');
    } else if (target.id.includes('comparador-fii')) {
      navigate('/comparador-fundos-imobiliarios');
    } else if (target.id.includes('comparador-acoes')) {
      navigate('/comparador-acoes');
    } else if (target.id.includes('comparador-etf')) {
      navigate('/comparador-etf');
    } else if (target.id.includes('comparador-bdr')) {
      navigate('/comparador-bdr');
    } else if (target.id.includes('comparador-cripto')) {
      navigate('/comparador-cripto');
    } else if (target.id.includes('renda-fixa')) {
      navigate('/calculadora-renda-fixa');
    } else if (target.id.includes('destaque')) {
      navigate('/melhores-do-mes');
    } else if (target.id.includes('milhao')) {
      navigate('/como-juntar/1000000');
    } else if (target.id.includes('emprestimo')) {
      navigate('/emprestimo/0/simulador');
    } else if (target.id.includes('favorito')) {
      if (login === true) {
        navigate('/favoritos');
      } else {
        navigate('/autenticacao');
      }
    }
  }

  // function typewriter() {
  //   var elemento = document.querySelector('h1');
  //   const textoArray = elemento.innerHTML.split('');
  //   console.log(textoArray);
  //   elemento = '';
  //   textoArray.forEach((letra, i) => {
  //     setTimeout(() => (elemento += letra), 75 * i);
  //   });
  // }

  return (
    <>
      <Head
        metaDescription="Guardar Dinheiro é um portal gratuito que oferece informações do mercado financeiro que ajuda os investidores a escolher o melhor investimento do momento."
        title="Guardar Dinheiro - Melhores Investimentos de 2023"
        h1="Guardar Dinheiro"
        canonical="https://www.guardardinheiro.com.br/"
        nivel="1"
      />

      <section className={styles.leading}>
        <div>
          <h1 className={styles.h1}>Guardar Dinheiro</h1>
        </div>

        <div>
          <h2 className={styles.h2}>
            Ferramentas Gratuitas que ajuda os investidores a escolher o melhor
            investimento do momento
          </h2>

          <h2 className={styles.h3}>
            + <CountUp end={250} duration={1}></CountUp> MIL
          </h2>

          <div className={styles.divCenter}>
            <p className={styles.paragrafoPessoas}>
              Pessoas Utilzando o <strong>Guardar Dinheiro</strong>
            </p>
            <button
              className={styles.buttonCriarConta}
              onClick={() => {
                navigate('/autenticacao/criar');
              }}
            >
              CADASTRE-SE GRÁTIS <FontAwesomeIcon icon={faUserFriends} />
            </button>
          </div>
        </div>
      </section>

      {/* <Zoom> */}
      {/* <p className={styles.paragrafoPessoas}>
        São mais de <CountUp end={150} duration={20}></CountUp> MIL Pessoas
        usando as ferramentas gratuitas do Guadar Dinheiro para analisar qual o
        melhor investimento do momento
      </p> */}
      {/* </Zoom> */}

      <Telegram />
      {/* <button>acesar</button> */}

      {/* <Slide up>
        <div className={styles.eqi}>
          <h3 className={styles.h4}>GUARDAR DINHEIRO | PLANILHA GRATUITA</h3>

          <a
            href="https://igoal.go2cloud.org/aff_c?offer_id=5446&aff_id=1590&file_id=9071"
            target="_blank"
          >
            {!isMobile ? (
              <img
                src="https://media.go2speed.org/brand/files/igoal/5446/Gotargetads_EQIPlanilhaDeAtivos_728x90.png"
                width="728"
                height="90"
                border="0"
              />
            ) : (
              <a
                href="https://igoal.go2cloud.org/aff_c?offer_id=5446&aff_id=1590&file_id=7738"
                target="_blank"
              >
                <img
                  src="https://media.go2speed.org/brand/files/igoal/5446/PlanilhaAtivos_Display_1002_300x250.png"
                  width="300"
                  height="250"
                  border="0"
                />
              </a>
            )}
          </a>
        </div>
      </Slide> */}

      <div className={styles.eqi}></div>

      <div className={styles.divFerramentas}>
        <h3 className={styles.h4}>GUARDAR DINHEIRO | FERRAMENTAS</h3>

        <h4 className={styles.h5}>Renda Fixa</h4>
        <div className={styles.containerFerramentas}>
          <div className={styles.itemFerramentas}>
            <div>
              <FontAwesomeIcon icon={faMedal} className={styles.fa} />
            </div>
            <div>
              <p className={styles.tituloFerramenta}>
                Calculadora de Renda Fixa
              </p>
              <p className={styles.paragrafo}>
                Calculadora De Renda Fixa que ajuda a calcular onde é melhor
                investir sua <strong>reserva de emergência</strong>. Compare
                <strong> quanto rende seu dinheiro</strong> em CDBs, Tesouro
                Direto, Poupança e Contas Digitais (Nubank, Picpay, Pagbank,
                Banco Inter e muito mais).
              </p>
              <button
                id="renda-fixa"
                onClick={handleClick}
                className={styles.buttonFerramentas}
              >
                CONFIRA{'  '}
                <FontAwesomeIcon icon={faArrowCircleRight} />
              </button>
            </div>
          </div>
        </div>

        <hr />

        <h4 className={styles.h5}>Fundos de Investimentos</h4>

        <div className={styles.containerFerramentas}>
          <div className={styles.itemFerramentas}>
            <div>
              <FontAwesomeIcon icon={faMedal} className={styles.fa} />
            </div>
            <div>
              <p className={styles.tituloFerramenta}>
                Melhores Fundos de Investimento
              </p>
              <p className={styles.paragrafo}>
                Confira o Ranking dos{' '}
                <strong>Melhores Fundos de Investimentos</strong>, com o
                histórico de rentabilidade, onde o fundo está disponível para
                investir, quantidade de pessoas que possuem o fundo e muito
                mais.
              </p>
              <button
                id="melhores-fundos"
                className={styles.buttonFerramentas}
                onClick={handleClick}
              >
                CONFIRA{'  '}
                <FontAwesomeIcon icon={faArrowCircleRight} />
              </button>
            </div>
          </div>

          <div className={styles.itemFerramentas}>
            <div>
              <FontAwesomeIcon
                icon={faBalanceScaleLeft}
                className={styles.fa}
              />
            </div>
            <div>
              <p className={styles.tituloFerramenta}>
                Comparador de Fundos de Investimento
              </p>
              <p className={styles.paragrafo}>
                <strong>Comparador de Fundos de Investimentos </strong>das
                melhores instituições disponíveis no mercado (XP, BTG, Órama,
                Modal, Guide, Genial e muito mais), para te ajudar na escolha do
                melhor investimento do momento.
              </p>
              <button
                id="comparador-fundos"
                className={styles.buttonFerramentas}
                onClick={handleClick}
              >
                CONFIRA{'  '}
                <FontAwesomeIcon icon={faArrowCircleRight} />
              </button>
            </div>
          </div>

          <div className={styles.itemFerramentas}>
            <div>
              <FontAwesomeIcon icon={faUserFriends} className={styles.fa} />
            </div>
            <div>
              <p className={styles.tituloFerramenta}>
                Onde as Pessoas Estão Investindo
              </p>
              <p className={styles.paragrafo}>
                Confira os Fundos de Investimentos que as pessoas estão
                investindo. Utilize nossos filtros de ordenação e veja os{' '}
                <strong>
                  Fundos de Investimentos com mais investidores no mês.
                </strong>
              </p>
              <button
                id="melhores-fundos2"
                className={styles.buttonFerramentas}
                onClick={handleClick}
              >
                CONFIRA{'  '}
                <FontAwesomeIcon icon={faArrowCircleRight} />
              </button>
            </div>
          </div>
        </div>

        <hr />

        <h4 className={styles.h5}>Fundos Imobiliários</h4>

        <div className={styles.containerFerramentas}>
          <div className={styles.itemFerramentas}>
            <div>
              <FontAwesomeIcon icon={faMedal} className={styles.fa} />
            </div>
            <div>
              <p className={styles.tituloFerramenta}>
                Melhores Fundos Imobiliários
              </p>
              <p className={styles.paragrafo}>
                Confira o Ranking dos{' '}
                <strong>Melhores Fundos Imobiliários </strong>do momento, com o
                histórico de rentabilidade, maiores altas e baixa do dia,
                melhores setores e muito mais.
              </p>
              <button
                id="melhores-fii"
                className={styles.buttonFerramentas}
                onClick={handleClick}
              >
                CONFIRA{'  '}
                <FontAwesomeIcon icon={faArrowCircleRight} />
              </button>
            </div>
          </div>

          <div className={styles.itemFerramentas}>
            <div>
              <FontAwesomeIcon
                icon={faBalanceScaleLeft}
                className={styles.fa}
              />
            </div>
            <div>
              <p className={styles.tituloFerramenta}>
                Comparador de Fundos de Imobiliários
              </p>
              <p className={styles.paragrafo}>
                <strong>Comparador de Fundos Imobiliários</strong> para te
                ajudar na escolha do melhor investimento do momento. Compare por
                Preço Atual, Rentabilidade, Setor, Didivendos e muito mais.
              </p>
              <button
                id="comparador-fii"
                className={styles.buttonFerramentas}
                onClick={handleClick}
              >
                CONFIRA{'  '}
                <FontAwesomeIcon icon={faArrowCircleRight} />
              </button>
            </div>
          </div>
        </div>
        <hr />

        <h4 className={styles.h5}>Ações</h4>

        <div className={styles.containerFerramentas}>
          <div className={styles.itemFerramentas}>
            <div>
              <FontAwesomeIcon icon={faMedal} className={styles.fa} />
            </div>
            <div>
              <p className={styles.tituloFerramenta}>Melhores Ações</p>
              <p className={styles.paragrafo}>
                Confira o Ranking das <strong>Melhores Ações</strong> do
                momento, com o histórico de rentabilidade, fechamento do mercado
                com maiores altas e baixa do dia, melhores setores e muito mais.
              </p>
              <button
                id="melhores-acoes"
                className={styles.buttonFerramentas}
                onClick={handleClick}
              >
                CONFIRA{'  '}
                <FontAwesomeIcon icon={faArrowCircleRight} />
              </button>
            </div>
          </div>

          <div className={styles.itemFerramentas}>
            <div>
              <FontAwesomeIcon
                icon={faBalanceScaleLeft}
                className={styles.fa}
              />
            </div>
            <div>
              <p className={styles.tituloFerramenta}>Comparador de Ações</p>
              <p className={styles.paragrafo}>
                <strong>Comparador de Ações</strong>, para te ajudar na escolha
                do melhor investimento do momento. Compare por Preço Atual,
                Rentabilidade, Setor, Didivendos e muito mais.
              </p>
              <button
                id="comparador-acoes"
                className={styles.buttonFerramentas}
                onClick={handleClick}
              >
                CONFIRA{'  '}
                <FontAwesomeIcon icon={faArrowCircleRight} />
              </button>
            </div>
          </div>
        </div>
        <hr />

        <h4 className={styles.h5}>ETFs</h4>

        <div className={styles.containerFerramentas}>
          <div className={styles.itemFerramentas}>
            <div>
              <FontAwesomeIcon icon={faMedal} className={styles.fa} />
            </div>
            <div>
              <p className={styles.tituloFerramenta}>Melhores ETFs</p>
              <p className={styles.paragrafo}>
                Confira o Ranking dos <strong>Melhores ETFs </strong>do momento,
                com o histórico de rentabilidade, fechamento do mercado com
                maiores altas e baixa do dia, melhores setores e muito mais.
              </p>
              <button
                id="melhores-etf"
                className={styles.buttonFerramentas}
                onClick={handleClick}
              >
                CONFIRA{'  '}
                <FontAwesomeIcon icon={faArrowCircleRight} />
              </button>
            </div>
          </div>

          <div className={styles.itemFerramentas}>
            <div>
              <FontAwesomeIcon
                icon={faBalanceScaleLeft}
                className={styles.fa}
              />
            </div>
            <div>
              <p className={styles.tituloFerramenta}>Comparador de ETFs</p>
              <p className={styles.paragrafo}>
                <strong>Comparador de ETFs</strong> para te ajudar na escolha do
                melhor investimento do momento. Compare por Preço Atual,
                Rentabilidade, Setor, Didivendos e muito mais.
              </p>
              <button
                id="comparador-etf"
                className={styles.buttonFerramentas}
                onClick={handleClick}
              >
                CONFIRA{'  '}
                <FontAwesomeIcon icon={faArrowCircleRight} />
              </button>
            </div>
          </div>
        </div>
        <hr />

        <h4 className={styles.h5}>BDRs</h4>

        <div className={styles.containerFerramentas}>
          <div className={styles.itemFerramentas}>
            <div>
              <FontAwesomeIcon icon={faMedal} className={styles.fa} />
            </div>
            <div>
              <p className={styles.tituloFerramenta}>Melhores BDRs</p>
              <p className={styles.paragrafo}>
                Confira o Ranking dos <strong>Melhores BDRs</strong> do momento,
                com o histórico de rentabilidade, fechamento do mercado com
                maiores altas e baixa do dia, melhores setores e muito mais.
              </p>
              <button
                id="melhores-bdr"
                className={styles.buttonFerramentas}
                onClick={handleClick}
              >
                CONFIRA{'  '}
                <FontAwesomeIcon icon={faArrowCircleRight} />
              </button>
            </div>
          </div>

          <div className={styles.itemFerramentas}>
            <div>
              <FontAwesomeIcon
                icon={faBalanceScaleLeft}
                className={styles.fa}
              />
            </div>
            <div>
              <p className={styles.tituloFerramenta}>Comparador de BDRs</p>
              <p className={styles.paragrafo}>
                <strong>Comparador de Bdrs</strong> para te ajudar na escolha do
                melhor investimento do momento. Compare por Preço Atual,
                Rentabilidade, Setor, Didivendos e muito mais.
              </p>
              <button
                id="comparador-bdr"
                className={styles.buttonFerramentas}
                onClick={handleClick}
              >
                CONFIRA{'  '}
                <FontAwesomeIcon icon={faArrowCircleRight} />
              </button>
            </div>
          </div>
        </div>
        <hr />

        <h4 className={styles.h5}>Criptomoedas</h4>

        <div className={styles.containerFerramentas}>
          <div className={styles.itemFerramentas}>
            <div>
              <FontAwesomeIcon icon={faMedal} className={styles.fa} />
            </div>
            <div>
              <p className={styles.tituloFerramenta}>Melhores Criptomoedas</p>
              <p className={styles.paragrafo}>
                Confira o Ranking das <strong>Melhores Criptomoedas</strong> do
                momento com o histórico de rentabilidade mês a mês. Confira as
                Criptos que rendem muito!!
              </p>
              <button
                id="melhores-cripto"
                className={styles.buttonFerramentas}
                onClick={handleClick}
              >
                CONFIRA{'  '}
                <FontAwesomeIcon icon={faArrowCircleRight} />
              </button>
            </div>
          </div>

          <div className={styles.itemFerramentas}>
            <div>
              <FontAwesomeIcon
                icon={faBalanceScaleLeft}
                className={styles.fa}
              />
            </div>
            <div>
              <p className={styles.tituloFerramenta}>
                Comparador de Criptomoedas
              </p>
              <p className={styles.paragrafo}>
                <strong>Comparador de Criptomoedas</strong> para te ajudar na
                escolha da melhor cripto do momento. Compare por Preço Atual,
                Rentabilidade e muito mais.
              </p>
              <button
                id="comparador-cripto"
                className={styles.buttonFerramentas}
                onClick={handleClick}
              >
                CONFIRA{'  '}
                <FontAwesomeIcon icon={faArrowCircleRight} />
              </button>
            </div>
          </div>
        </div>
        <hr />
      </div>

      <div className={styles.divFerramentas}>
        <h3 className={styles.h4}>GUARDAR DINHEIRO | DESTAQUES</h3>

        <div className={styles.containerFerramentas}>
          <div className={styles.itemFerramentas}>
            <div>
              <FontAwesomeIcon icon={faStar} className={styles.fa} />
            </div>
            <div>
              <p className={styles.tituloFerramenta}>Meus Favoritos</p>
              <p className={styles.paragrafo}>
                Cadastre seus Investimentos Favoritos entre (
                <strong>
                  Fundos de Investimentos, Fundos Imobiliários, Ações, ETFs,
                  BDRs e Criptomoedas
                </strong>
                ) e confira o retorno detalhado de cada um em uma única tela.
              </p>
              <button
                id="favorito"
                className={styles.buttonFerramentas}
                onClick={handleClick}
              >
                CONFIRA{'  '}
                <FontAwesomeIcon icon={faArrowCircleRight} />
              </button>
            </div>
          </div>

          <div className={styles.itemFerramentas}>
            <div>
              <FontAwesomeIcon icon={faTrophy} className={styles.fa} />
            </div>
            <div>
              <p className={styles.tituloFerramenta}>Campeões</p>
              <p className={styles.paragrafo}>
                Confira aqui os Lançamentos e Destaques do Mês.{' '}
                <strong>
                  Top 10 dos Produtos com mais rentabilidade por categoria{' '}
                </strong>
                (Fundos de Investimentos, Fundos Imobiliários, Ações, ETFs, BDRs
                e Criptomoedas.)
              </p>
              <button
                id="destaque"
                className={styles.buttonFerramentas}
                onClick={handleClick}
              >
                CONFIRA{'  '}
                <FontAwesomeIcon icon={faArrowCircleRight} />
              </button>
            </div>
          </div>
        </div>
        <hr />
      </div>

      <div className={styles.divFerramentas}>
        <h3 className={styles.h4}>
          GUARDAR DINHEIRO | CALCULADORAS E SIMULADORES
        </h3>

        <div className={styles.containerFerramentas}>
          <div className={styles.itemFerramentas}>
            <div>
              <FontAwesomeIcon icon={faCoins} className={styles.fa} />
            </div>
            <div>
              <p className={styles.tituloFerramenta}>Calculadora do Milhão</p>
              <p className={styles.paragrafo}>
                Utilize nossa calculadora do milhão que te informa em{' '}
                <strong>
                  quanto tempo você vai atingir o valor de 1 Milhão de Reais,
                </strong>{' '}
                de acordo valor que você já possui e o valor que você já investe
                mensalmente.
              </p>
              <button
                id="milhao"
                className={styles.buttonFerramentas}
                onClick={handleClick}
              >
                CONFIRA{'  '}
                <FontAwesomeIcon icon={faArrowCircleRight} />
              </button>
            </div>
          </div>

          <div className={styles.itemFerramentas}>
            <div>
              <FontAwesomeIcon icon={faHandHoldingUsd} className={styles.fa} />
            </div>
            <div>
              <p className={styles.tituloFerramenta}>Simulador de Empréstimo</p>
              <p className={styles.paragrafo}>
                Simule qual o valor total que você irá pagar em um empréstimo
                que deseja.{' '}
                <strong>
                  Confira também nossos parceiros com as melhores taxas de
                  empréstimos do momento.
                </strong>
              </p>
              <button
                id="emprestimo"
                className={styles.buttonFerramentas}
                onClick={handleClick}
              >
                CONFIRA{'  '}
                <FontAwesomeIcon icon={faArrowCircleRight} />
              </button>
            </div>
          </div>
        </div>
        <hr />
      </div>
    </>
  );
};

export default Home;
