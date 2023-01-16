import React from 'react';
import styles from './Paragrafo.module.css';
const Paragrafo = (props) => {
  return <p className={styles.paragrafo}>{props.texto}</p>;
};

export default Paragrafo;
