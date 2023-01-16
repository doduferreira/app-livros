import React from 'react';
import styles from './TopoTelegram.module.css';

const TopoTelegram = () => {
  const [topoTelegramFechado, setTopoTelegramFechado] = React.useState(false);

  React.useEffect(() => {
    if (window.sessionStorage.getItem('gd_topo_telegram') === 'fechado') {
      setTopoTelegramFechado(true);
    }
  });

  function insereTopoTelegram() {
    window.sessionStorage.setItem('gd_topo_telegram', 'fechado');
    setTopoTelegramFechado(true);
  }

  if (!topoTelegramFechado)
    return (
      <div className={styles.lgpd}>
        <div className={styles.lgpdLeft}>
          <p>
            Confira nosso canal no Telegram e receba dicas diárias de educação
            financeira e dos melhores investimentos do momento.
            <a href="/politica-privacidade" rel="dofollow">
              {' Saiba mais >>'}
            </a>
            .
          </p>
        </div>
        <div className={styles.lgpdLeft}>
          <button onClick={(e) => insereTopoTelegram()}>X</button>
        </div>
      </div>
    );
  else return null;
};

export default TopoTelegram;
