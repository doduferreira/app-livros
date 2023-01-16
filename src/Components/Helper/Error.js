import React from 'react';
import style from '../StylesGlobal/StylesGlobal.module.css';
const Error = ({ error }) => {
  if (!error) return null;
  return (
    // <p style={{ color: 'red', margin: '1rem 0', textAlign: 'center' }}>
    <p className={style.textoErros}>
      <b>{error}</b>
    </p>
  );
};

export default Error;
