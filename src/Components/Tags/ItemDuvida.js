import React from 'react';
import H3 from './H3';
import Link from './Link';
import styles from './ItemDuvida.module.css';
import Paragrafo from './Paragrafo';
const ItemDuvida = (props) => {
  function getItemDuvida() {
    if (props.duvida === 'selic') {
      return (
        <details>
          <summary className={styles.itemDetalhesSummary}>
            <H3 texto="O que é SELIC?" />
          </summary>
          <Paragrafo texto="A taxa Selic representa juros básicos da economia brasileira.Quer saber mais sobre CDB, acesse nosso artigo onde falamos detalhadamento sobre o assunto." />

          <Link
            texto="Acesse."
            rotaLink="https://blog.guardardinheiro.com.br/o-que-e-selic/"
          />
        </details>
      );
    } else if (props.duvida === 'cdb') {
      return (
        <details>
          <summary className={styles.itemDetalhesSummary}>
            <H3 texto="O que é um Certificado de Depósito Bancário (CDB)?" />
          </summary>
          <Paragrafo texto="O Certificado de Depósito Bancário é um título emitido por uma instituição financeira, com o intuito de  captar recursos para operações de crédito em geral. Quer saber mais sobre CDB, acesse nosso artigo onde falamos detalhadamento sobre o assunto." />

          <Link
            texto="Acesse."
            rotaLink="https://blog.guardardinheiro.com.br/o-que-e-cdb/"
          />
        </details>
      );
    } else if (props.duvida === 'lci') {
      return (
        <details>
          <summary className={styles.itemDetalhesSummary}>
            <H3 texto="O que é LCI?" />
          </summary>
          <Paragrafo texto="Letra de Crédito Imobiliário, ou LCI como está mais popular e conhecido, é um investimento de renda fixa emitido pelo banco e os recursos captados pelo emissor são utilizados para financiar atividades no setor imobiliário. Em troca, ele fornece a taxa anual de retorno definida no momento da compra. Quer saber mais sobre LCI, acesse nosso artigo onde falamos detalhadamento sobre o assunto." />

          <Link
            texto="Acesse."
            rotaLink="https://blog.guardardinheiro.com.br/o-que-e-lci/"
          />
        </details>
      );
    } else if (props.duvida === 'lca') {
      return (
        <details>
          <summary className={styles.itemDetalhesSummary}>
            <H3 texto="O que é LCA?" />
          </summary>
          <Paragrafo texto="Letra de Crédito do Agronegócio, ou LCA como está mais popular e conhecido, é um investimento de renda fixa emitido pelo banco e os recursos captados pelo emissor são utilizados para financiar atividades no setor de agronegócio. Em troca, ele fornece a taxa anual de retorno definida no momento da compra. Quer saber mais sobre LCA, acesse nosso artigo onde falamos detalhadamento sobre o assunto." />

          <Link
            texto="Acesse."
            rotaLink="https://blog.guardardinheiro.com.br/o-que-e-lca/"
          />
        </details>
      );
    } else if (props.duvida === 'cdi') {
      return (
        <details>
          <summary className={styles.itemDetalhesSummary}>
            <H3 texto="O que é CDI?" />
          </summary>
          <Paragrafo texto="O CDI é a sigla utilizada para certificado de depósito interbancário, que nada mais  é que uma taxa usada para determinar o retorno anual de vários tipos de investimentos. Quer saber mais sobre CDI, acesse nosso artigo onde falamos detalhadamento sobre o assunto." />

          <Link
            texto="Acesse."
            rotaLink="https://blog.guardardinheiro.com.br/o-que-e-cdi/"
          />
        </details>
      );
    } else if (props.duvida === 'fundos') {
      return (
        <details>
          <summary className={styles.itemDetalhesSummary}>
            <H3 texto="O que são Fundos de Investimento?" />
          </summary>
          <Paragrafo texto="Fundos de Investimento é um tipo de investimento onde investidores se unem para a realização de um investimento financeiro com a finalidade de lucrar com as aplicações do dinheiro em variados ativos do mercado financeiro. Quer saber mais sobre Fundos de Investimento, acesse nosso artigo onde falamos detalhadamento sobre o assunto." />

          <Link
            texto="Acesse."
            rotaLink="https://blog.guardardinheiro.com.br/saiba-como-investir-em-fundo-de-investimento/"
          />
        </details>
      );
    } else if (props.duvida === 'fii') {
      return (
        <details>
          <summary className={styles.itemDetalhesSummary}>
            <H3 texto="O que são Fundos Imobiliários?" />
          </summary>
          <Paragrafo texto="Os fundos imobiliários são fundos de investimento clássicos que investem principalmente em imóveis. Dessa forma, você pode participar do mercado imobiliário sem precisar possuir e manter seu próprio imóvel. Quer saber mais sobre Fundos Imobiliários, acesse nosso artigo onde falamos detalhadamento sobre o assunto." />

          <Link
            texto="Acesse."
            rotaLink="https://blog.guardardinheiro.com.br/descubra-como-investir-em-fundos-imobiliarios/"
          />
        </details>
      );
    } else if (props.duvida === 'acao') {
      return (
        <details>
          <summary className={styles.itemDetalhesSummary}>
            <H3 texto="O que são Ações?" />
          </summary>
          <Paragrafo texto="Ações é uma forma antiga de investimento que funciona de maneira surpreendentemente simples: uma empresa emite títulos que incorporam um pouco da própria empresa. Em outras palavras, quem detém as ações é quem manda na empresa. Quer saber mais sobre Ações, acesse nosso artigo onde falamos detalhadamento sobre o assunto." />

          <Link
            texto="Acesse."
            rotaLink="https://blog.guardardinheiro.com.br/como-investir-em-acoes-dicas-para-iniciantes/"
          />
        </details>
      );
    } else if (props.duvida === 'etf') {
      return (
        <details>
          <summary className={styles.itemDetalhesSummary}>
            <H3 texto="O que é ETF?" />
          </summary>
          <Paragrafo texto="ETF (Exchange Traded Funds), são fundos de investimentos de renda fixa ou renda variável negociados em Bolsa de Valores. Quer saber mais sobre ETFs, acesse nosso artigo onde falamos detalhadamento sobre o assunto." />

          <Link
            texto="Acesse."
            rotaLink="https://blog.guardardinheiro.com.br/o-que-e-e-como-funciona-o-etf/"
          />
        </details>
      );
    } else if (props.duvida === 'bdr') {
      return (
        <details>
          <summary className={styles.itemDetalhesSummary}>
            <H3 texto="O que é BDR?" />
          </summary>
          <Paragrafo texto="A sigla BDRs é utilizada para se referir a Brazilian Depositary Receipt, que significa um certificado de depósito emitido e negociado no Brasil, com capacidade para representar ações de empresas cadastradas em Bolsas de outros países, como exemplo a NASDAQ e a NYSE, dos Estados Unidos. Quer saber mais sobre BDRs, acesse nosso artigo onde falamos detalhadamento sobre o assunto." />

          <Link
            texto="Acesse."
            rotaLink="https://blog.guardardinheiro.com.br/como-investir-em-bdrs/"
          />
        </details>
      );
    } else return null;
  }

  return <div className={styles.container}>{getItemDuvida()}</div>;
};

export default ItemDuvida;
