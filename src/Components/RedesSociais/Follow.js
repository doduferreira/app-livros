import React from 'react';
import styles from './Follow.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import {
  faFacebook,
  faTwitter,
  faTelegram,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import { Container } from 'react-bootstrap';

const Follow = (props) => {
  return (
    <Container>
      <div className={styles.container}>
        <div className={styles.containerTitulo}>
          <p className={styles.titulo}>Siga Guardar Dinheiro</p>
          {!props.header ? (
            <p className={styles.paragrafo}>
              Confira nossos conteúdos imperdíveis diários de Lançamentos de
              Produtos, Maiores Altas e Baixas do Dia, Muitas Dicas Quentes de
              Investimentos e muito mais.
            </p>
          ) : null}
        </div>

        <div className={styles.divRedesSociais}>
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
                <span className={styles.span}>TELEGRAM</span>
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
                <span className={styles.span}>TWITTER</span>
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
                <span className={styles.span}>INSTAGRAM</span>
              </a>
            </div>
          </div>
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
                <span className={styles.span}>FACEBOOK</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Follow;
