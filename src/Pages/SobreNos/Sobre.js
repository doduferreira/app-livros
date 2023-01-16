import React from 'react';
import { Container } from 'react-bootstrap';
import BreadcumbH1 from '../../Components/Tags/BreadcumbH1';
import H2 from '../../Components/Tags/H2';
import H3 from '../../Components/Tags/H3';
import Head from '../../Components/Tags/Head';
import Paragrafo from '../../Components/Tags/Paragrafo';

const Sobre = () => {
  React.useEffect(() => {
    window.scroll(0, 0);
  });
  return (
    <div className="App">
      <Head
        metaDescription="Onde Guardar Dinheiro - Acesse ferramentas e informações gratuitas para saber onde guardar dinheiro com segurança em fundos de investimento, renda fixa, renda variável. Compare rentabilidades e retornos de produtos várias instituições financeiras, bancos e corretoras."
        title="Sobre Nós | Guardar Dinheiro"
        h1="Sobre Nós | Guardar Dinheiro"
        canonical="https://www.guardardinheiro.com.br/sobre"
      ></Head>

      <BreadcumbH1 texto="Sobre Nós" paginaAtual="Sobre Nós" />
      <Container>
        <H2 texto="Nossa Missão" />
        <Paragrafo texto="O Site Guardar Dinheiro é formado por uma equipe que já trabalha no ramo de investimentos a mais de 10 anos." />

        <Paragrafo
          texto="Nossa Missão é apresentar os produtos de investimentos disponíveis nomercado juntamente com sua rentabilidade, pois muitas pessoas ainda não sabem investir (Guardar Dinheiro) e também não sabem quais produtos de investimentos possuem no mercado e sua rentabialidade. As informações disponibilizadas de rentabilidade de fundos de
          investimento, ações e fundos imobiliários deste site não é uma
          recomendação. Estas informações foram capturas de fontes públicas.
        "
        />
        <br />
        <H2 texto="Como Podemos te ajudar" />
        <H3 texto="- Fundos de Investimentos" />

        <Paragrafo
          texto="Informações com o retorno dos fundos de investimentos disponíveis para
          (Guardar Dinheiro) das princpais instituições fincaneiras em um único
          lugar.
        "
        />
        <Paragrafo
          texto="
          Ranking dos fundos de investimentos com maior retorno no mês, ano e
          período de 12 meses. Informação relevante para você analisar e Guardar
          Dinheiro.
        "
        />
        <Paragrafo
          texto="
          Filtros para selecionar quais os fundos de investimentos que os
          investidores estão mais aplicando dinheiro.
        "
        />
        <Paragrafo
          texto="
          Filtros para selecionar quais fundos de investimentos que os
          investidores estão mais resgatando dinheiro.
          ."
        />
        <Paragrafo
          texto="
          Filtros para selecionar o fundo de investimento desejado para
          visualizar o retorno detalhado mês a mês."
        />

        <H3 texto="- Renda Fixa" />
        <Paragrafo
          texto="
          Efetua a comparação de rentabilidade de investimento de renda fixa de
          baixo risco e veja Onde Guardar Dinheiro. Compare CDB, Poupança,
          Tesouro, e até Contas que Rendem como (NuBank, PagBank, etc...).
          "
        />

        <H3 texto="- Ações" />

        <Paragrafo
          texto="
          Apresentação das ações da bolsa de valores com a rentabilidade do mês,
          ano e 12 meses. Informação relevante para você analisar e Guardar
          Dinheiro caso já saiba investir em ações de longo prazo.
          "
        />

        <H3 texto="- Fundos Imobiliários" />
        <Paragrafo
          texto="
          Apresentação das fundos imobiliários disponíveis com a rentabilidade
          do mês, ano e 12 meses. Informação relevante para você analisar e
          Guardar Dinheiro caso já saiba investir em Fundos Imobiliários de
          longo prazo.
          "
        />

        <H3 texto="- BDRs" />
        <Paragrafo
          texto="
          Apresentação dos BDRs disponíveis com a rentabilidade
          do mês, ano e 12 meses. Informação relevante para você analisar e
          Guardar Dinheiro caso já saiba investir no longo prazo.
          "
        />

        <H3 texto="- ETFs" />
        <Paragrafo
          texto="
          Apresentação dos ETFs disponíveis com a rentabilidade
          do mês, ano e 12 meses. Informação relevante para você analisar e
          Guardar Dinheiro caso já saiba investir no longo prazo.
          "
        />

        <H3 texto="Conteúdos" />
        <Paragrafo
          texto="
          Conteúdos de qualidade sobre investimentos, te ajudando ainda mais a
          entender cada produto e como Guardar Dinheiro.
          "
        />
      </Container>
      <br></br>
      <hr></hr>
      <br></br>
    </div>
  );
};

export default Sobre;
