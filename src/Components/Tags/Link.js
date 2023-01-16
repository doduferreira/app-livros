import React from 'react';
import styles from './Link.module.css';
const Link = (props) => {
  return (
    <p>
      <a href={props.rotaLink} rel="dofollow" className={styles.link}>
        {props.texto}
      </a>
    </p>
  );
};

export default Link;
