import React from 'react';
import styles from './AlertMessage.module.css';

const AlertMessage = (props) => {
  return (
    <div className={props.erro ? styles.alertError : styles.alertOk}>
      <span class="closebtn" onclick="this.parentElement.style.display='none';">
        &times;
      </span>
      {props.message}
    </div>
  );
};

export default AlertMessage;
