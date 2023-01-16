import React from 'react';
import { Container } from 'react-bootstrap';
import BreadcumbH1 from '../Components/Tags/BreadcumbH1';
import H2 from '../Components/Tags/H2';
import OndeInvestir from './../Pages/OndeInvestir/OndeInvestir';

const NotFoundPage = () => {
  return (
    <div className="App">
      <BreadcumbH1
        texto="Página Não Encontrada"
        paginaAtual="Página Não Encontrada"
      />

      <H2 texto="Acesse as páginas abaixo e confira onde seu dinheiro vai render mais em 2023." />

      <OndeInvestir />
    </div>
  );
};

export default NotFoundPage;
