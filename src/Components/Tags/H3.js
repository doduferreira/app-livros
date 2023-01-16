import React from 'react';
import styles from './H3.module.css';
const H3 = (props) => {
  return <h3 className={styles.h3}>{props.texto}</h3>;
};

export default H3;
