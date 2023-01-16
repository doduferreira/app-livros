import React from 'react';
import styles from './Telegram.module.css';
import fgTelegram from '../../Assets/guardar_dinheiro_telegram.webp';
// import fgTelegram from '../../Assets/telegram.png';

const Telegram = () => {
  return (
    <div className={styles.divMaster}>
      <a href="https://t.me/+6JN2oQW-M5BlMTlh" target="_blank">
        <img
          src={fgTelegram}
          className={styles.img}
          alt="Canal Telegram Guardar Dinheiro"
        />
      </a>
    </div>
  );
};

export default Telegram;
