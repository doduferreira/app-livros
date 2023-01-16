import React from 'react';
import styles from './LGPD.module.css';

const LGPD = () => {
  const [possuiLGPD, setPossuiLGPD] = React.useState(false);

  React.useEffect(() => {
    if (window.localStorage.getItem('gd_lgpd') === 'validado') {
      setPossuiLGPD(true);
    }
  });

  function insereCookieLGPD() {
    window.localStorage.setItem('gd_lgpd', 'validado');
    setPossuiLGPD(true);
  }

  if (!possuiLGPD)
    return (
      <div className={styles.lgpd}>
        <div className={styles.lgpdLeft}>
          {/* <p>
            Nós usamos cookies para melhorar sua experiência de navegação em
            nosso site e ao utilizar, você concorda com a política de
            monitoramento de cookies. Para ter mais informações sobre como isso
            é feito, confira nossa{' '}
            <a href="/politica-privacidade">Política de Privacidade</a>. Se você
            concorda, clique em ACEITO.
          </p> */}
          <p>
            Este site usa cookies para garantir que você tenha uma melhor
            experiência em navegação. Ao continuar a usar este site, você
            concorda com seu uso.
            <a href="/politica-privacidade" rel="dofollow">
              {' Saiba mais >>'}
            </a>
            .
          </p>
        </div>
        <div className={styles.lgpdLeft}>
          <button onClick={(e) => insereCookieLGPD()}>Entendi</button>
        </div>
      </div>
    );
  else return null;
};

export default LGPD;
