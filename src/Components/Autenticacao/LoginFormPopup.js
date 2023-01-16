import React from 'react';
import styles from './LoginFormPopup.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import {
  faFacebook,
  faTwitter,
  faTelegram,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import { UserContext } from '../../Contexts/UserContext';

const LoginFormPopup = () => {
  React.useEffect(() => {});

  function returnPopup() {
    return (
      <div className={styles.container}>
        <div className={styles.containerTitulo}>
          <div style={{ width: '75%' }}>
            <p className={styles.titulo}>
              <FontAwesomeIcon icon={faThumbsUp} /> Siga Guardar Dinheiro
            </p>
          </div>
          <div
            style={{ width: '25%', textAlign: 'right' }}
            className={styles.faTitulo}
          >
            <button className={styles.button}>Fechar</button>
          </div>
        </div>

        <p className={styles.paragrafo}>
          Confira nossos conteúdos imperdíveis diários de Lançamentos de
          Produtos, Maiores Altas e Baixas do Dia, Muitas Dicas Quentes de
          Investimentos e muito mais.
        </p>

        <div className={styles.divRedesSociais}>
          <div className={styles.divFa}>
            <div>
              <a
                href="https://www.facebook.com/siteguardardinhero/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.faTitulo}
              >
                <FontAwesomeIcon icon={faFacebook} className={styles.fa} />
                <br />
                Facebook
              </a>
            </div>
          </div>
          <div className={styles.divFa}>
            <div>
              <a
                href="https://twitter.com/guardardinheir1"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.faTitulo}
              >
                <FontAwesomeIcon icon={faTwitter} className={styles.fa} />
                <br />
                Twitter
              </a>
            </div>
          </div>
          <div className={styles.divFa}>
            <div>
              <a
                href="https://t.me/+6JN2oQW-M5BlMTlh"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.faTitulo}
              >
                <FontAwesomeIcon icon={faTelegram} className={styles.fa} />
                <br />
                Telegram
              </a>
            </div>
          </div>
          <div className={styles.divFa}>
            <div>
              <a
                href="https://www.instagram.com/guardardinheiro/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.faTitulo}
              >
                <FontAwesomeIcon icon={faInstagram} className={styles.fa} />
                <br />
                Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return <div>{returnPopup()}</div>;
};

export default LoginFormPopup;
