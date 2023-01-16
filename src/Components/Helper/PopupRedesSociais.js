import React from 'react';
import styles from './PopupRedesSociais.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import {
  faFacebook,
  faTwitter,
  faTelegram,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import { UserContext } from '../../Contexts/UserContext';

const PopupRedesSociais = () => {
  const { login } = React.useContext(UserContext);
  const [possuiCookie, setPossuiCookie] = React.useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      if (window.localStorage.getItem('gd_lgpd') === 'validado') {
        if (!login) {
          if (window.localStorage.getItem('gd_social') !== 'validado') {
            if (window.sessionStorage.getItem('gd_social_open') !== '1') {
              setPossuiCookie(false);
              window.sessionStorage.setItem('gd_social_open', '1');
            }
          }
        }
      }
    }, 7000);
    return () => clearTimeout(timer);
  });

  function insereCookie() {
    window.localStorage.setItem('gd_social', 'validado');
    setPossuiCookie(true);
  }

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
            <button className={styles.button} onClick={(e) => insereCookie()}>
              Fechar
            </button>
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
                onClick={(e) => insereCookie()}
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
                onClick={(e) => insereCookie()}
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
                onClick={(e) => insereCookie()}
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
                onClick={(e) => insereCookie()}
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

  if (!possuiCookie) {
    return <div>{returnPopup()}</div>;
  } else {
    return null;
  }
};

export default PopupRedesSociais;
