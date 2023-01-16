import React from 'react';
import styles from './Footer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faTwitter,
  faTelegram,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <div className={styles.divMaster}>
      <div className={styles.divFooter}>
        <div className={styles.container}>
          <div className={styles.item}>
            <img
              loading="lazy"
              style={{
                width: '130px',
                height: 'auto',
              }}
              // src={fgLogo}
              src="data:image/png;base64,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"
              alt="Logotipo Site Guardar Dinheiro"
            />
          </div>

          <a
            href="https://t.me/+6JN2oQW-M5BlMTlh"
            target="_blank"
            rel="noreferrer"
            className={styles.faTitulo}
          >
            Telegram
            <br />
            <FontAwesomeIcon icon={faTelegram} className={styles.fa} />
          </a>

          <a
            href="https://twitter.com/guardardinheir1"
            target="_blank"
            rel="nofollow"
            className={styles.faTitulo}
          >
            Twitter
            <br />
            <FontAwesomeIcon icon={faTwitter} className={styles.fa} />
          </a>

          <a
            href="https://www.instagram.com/guardardinheiro/"
            target="_blank"
            rel="nofollow"
            className={styles.faTitulo}
          >
            Instagram
            <br />
            <FontAwesomeIcon icon={faInstagram} className={styles.fa} />
          </a>

          <a
            href="https://www.facebook.com/siteguardardinhero/"
            target="_blank"
            rel="nofollow"
            className={styles.faTitulo}
          >
            Facebook
            <br />
            <FontAwesomeIcon icon={faFacebook} className={styles.fa} />
          </a>
        </div>
        <br />
        <div className={styles.container}>
          <div className={styles.item}>
            <p className={styles.paragrafoRodape}>
              As informações disponibilizadas de rentabilidade de produtos de
              investimentos deste site não é uma recomendação. Nosso site é
              somente informativo, trazendo informações de fontes públicas (B3,
              CVM e etc.), sendo assim, não nos responsabilizamos por qualquer
              decisão de investimento.
            </p>
          </div>
        </div>

        <br />
        <div className={styles.container}>
          <div className={styles.item}>
            <a href="/sobre" className={styles.links} rel="dofollow">
              Sobre Nós
            </a>
          </div>
          <div className={styles.item}>
            <a
              href="/politica-privacidade"
              className={styles.links}
              rel="dofollow"
            >
              Política de Privacidade
            </a>
          </div>
          <div className={styles.item}>
            <a
              href="https://blog.guardardinheiro.com.br/fale-conosco/"
              className={styles.links}
              target="_blank"
              rel="dofollow"
            >
              Contato
            </a>
          </div>
        </div>
        <hr />
        <p className={styles.paragrafoRodape}>
          Copyright © Guardar Dinheiro. Todos os direitos reservados
        </p>
      </div>
    </div>
  );
};

export default Footer;
