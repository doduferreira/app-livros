import React from 'react';
import './ModalCadastro.module.css';

const ModalCadastro2 = (props) => {
  const { className, modalRef } = props;

  return (
    <div ref={modalRef} className={`${className} modal`}>
      <p>Meu modal!</p>
    </div>
  );
};

export default ModalCadastro2;
