import React from 'react';
import styles from './FooterGrid.module.css';
import { useNavigate } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
// import { faInstagram } from '@fortawesome/free-brands-svg-icons';
// import { faTwitter } from '@fortawesome/free-brands-svg-icons';
// import { faTelegram } from '@fortawesome/free-brands-svg-icons';
// import SocialMediaButtonsMobile from '../Components/SocialMedia/SocialMediaButtonsMobile';
import isMobile from '../Components/Helper/Mobile';
import { Container } from 'react-bootstrap';
import Follow from '../Components/RedesSociais/Follow';

const FooterGrid = () => {
  const mobile = isMobile();
  const navigate = useNavigate();

  function handleRanking({ target }) {
    console.log(target.id);
    if (target.id.includes('fundos')) {
      navigate('/fundos-de-investimento');
    } else if (target.id.includes('imobi')) {
      navigate('/fundos-imobiliarios');
    } else if (target.id.includes('acoes')) {
      navigate('/acoes');
    } else if (target.id.includes('etf')) {
      navigate('/etf');
    } else if (target.id.includes('bdr')) {
      navigate('/bdr');
    } else if (target.id.includes('cripto')) {
      navigate('/criptomoeda');
    } else if (target.id.includes('rf')) {
      // navigate('/calculadora-renda-fixa');
      window.open('/calculadora-renda-fixa', '_self');
    }
  }

  function handleComparador({ target }) {
    console.log(target.id);
    if (target.id.includes('fundos')) {
      navigate('/comparador-fundos-de-investimentos');
    } else if (target.id.includes('imobi')) {
      navigate('/comparador-fundos-imobiliarios');
    } else if (target.id.includes('acoes')) {
      navigate('/comparador-acoes');
    } else if (target.id.includes('etf')) {
      navigate('/comparador-etf');
    } else if (target.id.includes('bdr')) {
      navigate('/comparador-bdr');
    } else if (target.id.includes('cripto')) {
      navigate('/comparador-cripto');
    } else if (target.id.includes('rf')) {
      // navigate('/calculadora-renda-fixa');
      window.open('/calculadora-renda-fixa', '_self');
    }
  }

  return (
    <div className="Footer">
      <section className={styles.rodape}>
        <section className={[styles.grid, styles.gridTemplate].join(' ')}>
          <div className={styles.item}>
            <p
              className={styles.paragrafoTitulo}
              onClick={() => {
                window.open('/sobre', '_self');
              }}
            >
              Sobre o Guardar Dinheiro
            </p>
            <p
              className={styles.paragrafo}
              onClick={() => {
                window.open('/sobre', '_self');
              }}
            >
              Sobre Nós
            </p>
            <p
              className={styles.paragrafo}
              onClick={() => {
                window.open('/politica-privacidade', '_self');
              }}
            >
              Política de Privacidade
            </p>
            <p
              className={styles.paragrafo}
              onClick={() => {
                window.open(
                  'https://blog.guardardinheiro.com.br/fale-conosco/',
                  '_blank',
                );
              }}
            >
              Contato
            </p>
            <p className={styles.paragrafoTitulo}>E-mail</p>
            <p className={styles.paragrafo}>siteguardardinheiro@gmail.com.br</p>
          </div>
          <div className={styles.item}>
            <p className={styles.paragrafoTitulo}>Melhores Investimentos</p>
            <p
              id="rk_fundos"
              className={styles.paragrafo}
              onClick={handleRanking}
            >
              Fundos de Investimentos
            </p>
            <p
              id="rk_imob"
              className={styles.paragrafo}
              onClick={handleRanking}
            >
              Fundos Imobiliários
            </p>
            <p
              id="rk_acoes"
              className={styles.paragrafo}
              onClick={handleRanking}
            >
              Ações
            </p>
            <p id="rk_etf" className={styles.paragrafo} onClick={handleRanking}>
              ETFs
            </p>
            <p id="rk_bdr" className={styles.paragrafo} onClick={handleRanking}>
              BDRs
            </p>
            <p
              id="rk_cripto"
              className={styles.paragrafo}
              onClick={handleRanking}
            >
              Criptomoedas
            </p>
            <p id="rk_rf" className={styles.paragrafo} onClick={handleRanking}>
              Renda Fixa
            </p>
          </div>
          <div className={styles.item}>
            <p className={styles.paragrafoTitulo}>Comparadores</p>
            <p
              id="cp_fundos"
              className={styles.paragrafo}
              onClick={handleComparador}
            >
              Fundos de Investimentos
            </p>
            <p
              id="cp_imobi"
              className={styles.paragrafo}
              onClick={handleComparador}
            >
              Fundos Imobiliários
            </p>
            <p
              id="cp_acoes"
              className={styles.paragrafo}
              onClick={handleComparador}
            >
              Ações
            </p>
            <p
              id="cp_etf"
              className={styles.paragrafo}
              onClick={handleComparador}
            >
              ETFs
            </p>
            <p
              id="cp_bdr"
              className={styles.paragrafo}
              onClick={handleComparador}
            >
              BDRs
            </p>
            <p
              id="cp_cripto"
              className={styles.paragrafo}
              onClick={handleComparador}
            >
              Criptomoedas
            </p>
            <p
              id="cp_rf"
              className={styles.paragrafo}
              onClick={handleComparador}
            >
              Renda Fixa
            </p>
          </div>
          <div className={styles.item}>
            <p className={styles.paragrafoTitulo}>Simuladores</p>
            <p
              className={styles.paragrafo}
              onClick={() => {
                window.open('/como-juntar/1000000', '_blank');
              }}
            >
              Calculadora do Milhão
            </p>
            <p
              className={styles.paragrafo}
              onClick={() => {
                window.open('/emprestimo/0/simulador', '_blank');
              }}
            >
              Simulador de Empréstimo
            </p>
            <p className={styles.paragrafoTitulo}>Último Artigos</p>
            <p
              className={styles.paragrafo}
              onClick={() => {
                window.open(
                  'https://blog.guardardinheiro.com.br/como-abrir-uma-conta-no-pagbank/',
                  '_self',
                );
              }}
            >
              Como Abrir uma conta no PagBank
            </p>
            <p
              className={styles.paragrafo}
              onClick={() => {
                window.open(
                  'https://blog.guardardinheiro.com.br/como-guardar-dinheiro-no-picpay',
                  '_self',
                );
              }}
            >
              Guardar Dinheiro no Picpay
            </p>
            <p
              className={styles.paragrafo}
              onClick={() => {
                window.open(
                  'https://blog.guardardinheiro.com.br/como-guardar-dinheiro-no-nubank',
                  '_self',
                );
              }}
            >
              Guardar Dinheiro no NuBank
            </p>
            <p
              className={styles.paragrafo}
              onClick={() => {
                window.open(
                  'https://blog.guardardinheiro.com.br/como-guardar-dinheiro-no-mercado-pago',
                  '_self',
                );
              }}
            >
              Guardar Dinheiro no MercadoPago
            </p>
            <p
              className={styles.paragrafo}
              onClick={() => {
                window.open(
                  'https://blog.guardardinheiro.com.br/cartao-de-credito-da-xp-vale-a-pena',
                  '_self',
                );
              }}
            >
              Cartão de Crédito da XP Vale a Pena
            </p>
          </div>
          {/* <div className={styles.item}>
            <p className={styles.paragrafoTitulo}>Redes Sociais </p>
            <FontAwesomeIcon
              icon={faTwitter}
              className={styles.fa}
              onClick={() => {
                window.open('https://twitter.com/guardardinheir1', '_blank');
              }}
            />
            <FontAwesomeIcon
              icon={faFacebookF}
              className={styles.fa}
              onClick={() => {
                window.open(
                  'https://www.facebook.com/siteguardardinhero',
                  '_blank',
                );
              }}
            />
            <FontAwesomeIcon
              icon={faInstagram}
              className={styles.fa}
              onClick={() => {
                window.open(
                  'https://www.instagram.com/guardardinheiro/',
                  '_blank',
                );
              }}
            />
            <FontAwesomeIcon
              icon={faTelegram}
              className={styles.fa}
              onClick={() => {
                window.open('https://t.me/+6JN2oQW-M5BlMTlh', '_blank');
              }}
            />
            <p className={styles.paragrafoTitulo}>E-mail</p>
            <p className={styles.paragrafo}>siteguardardinheiro@gmail.com.br</p>
          </div> */}
        </section>

        <hr></hr>
        <p className={styles.paragrafoRodape}>
          As informações disponibilizadas de rentabilidade de produtos de
          investimentos deste site não é uma recomendação.<br></br> Estas
          informações foram capturas de fontes públicas.
        </p>
        <p className={styles.paragrafoRodape}>
          Copyright © Guardar Dinheiro. Todos os direitos reservados
        </p>
      </section>
    </div>
  );
};

export default FooterGrid;
