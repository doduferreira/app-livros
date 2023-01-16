import React from 'react';
import { Container } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import BreadcumbH1 from '../Components/Tags/BreadcumbH1';

const TwitterEmbebed = () => {
  return (
    <>
      <Helmet>
        <title>Tweets | Guardar Dinheiro</title>
        <meta itemProp="name" content="Tweets | Guardar Dinheiro"></meta>
        <meta
          name="description"
          content="Confira os Tweets do Perfil do Guardar Dinheiro no Twtter"
        />
        <meta name="keywords" content="Tweets Guardar Dinheiro" />
        <link
          rel="canonical"
          href={'https://guardardinheiro.com.br/tweets'}
        ></link>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-2K23FV25Q6"
        ></script>
        <script>
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag() { dataLayer.push(arguments); }
          gtag('js', new Date());
          gtag('config', 'G-2K23FV25Q6');
      `}
        </script>
        <script
          async
          src="https://platform.twitter.com/widgets.js"
          charset="utf-8"
        ></script>
      </Helmet>
      <BreadcumbH1
        paginaAtual={'Tweets | Guardar Dinheiro'}
        texto={'Tweets | Guardar Dinheiro'}
      />
      <Container>
        <a
          class="twitter-timeline"
          href="https://twitter.com/guardardinheir1?ref_src=twsrc%5Etfw"
        >
          Tweets by guardardinheir1
        </a>
      </Container>
    </>
  );
};

export default TwitterEmbebed;
