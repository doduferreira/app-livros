import React from 'react';
import { Helmet } from 'react-helmet';
const Head = (props) => {
  const [mostraAnuncio, setMostraAnuncio] = React.useState(true);

  React.useEffect(() => {
    if (window.location.href.includes('privacidade')) {
      setMostraAnuncio(false);
    } else if (window.location.href.includes('sobre')) {
      setMostraAnuncio(false);
    } else if (window.location.href.includes('autenticacao')) {
      setMostraAnuncio(false);
    } else if (window.location.href.includes('favoritos')) {
      setMostraAnuncio(false);
    } else if (window.location.href.includes('users')) {
      setMostraAnuncio(false);
    }
  }, []);

  function getSchemaWebPage() {
    if (props.nivel === '1') {
      return (
        <script type="application/ld+json">
          {`{
            "@context":"https://schema.org",
            "@type":"WebPage","@id":"${props.canonical}#webpage",
            "url":"${props.canonical}",
            "name":"${props.title}",            
            "description":"${props.metaDescription}",
            "thumbnailUrl":"https://i0.wp.com/blog.guardardinheiro.com.br/wp-content/uploads/2022/12/logo-redes-sociais.webp?fit=1024%2C720&amp;ssl=1",
            "inLanguage":"pt-BR"
          }`}
        </script>
      );
    } else {
      return (
        <script type="application/ld+json">
          {`{
              "@context":"https://schema.org",
              "@type":"WebPage","@id":"${props.canonical}#webpage",
              "url":"${props.canonical}",
              "name":"${props.title}",
              "isPartOf":{"@id":"https://www.guardardinheiro.com.br/#website"},
              "description":"${props.metaDescription}",
              "thumbnailUrl":"https://i0.wp.com/blog.guardardinheiro.com.br/wp-content/uploads/2022/12/logo-redes-sociais.webp?fit=1024%2C720&amp;ssl=1",
              "inLanguage":"pt-BR"
            }`}
        </script>
      );
    }
  }

  function getSchemaBreadcumbList() {
    if (props.nivel === '1') {
      return (
        <script type="application/ld+json">
          {` 
          {
            "@context":"https://schema.org",
            "@type":"BreadcrumbList",
            "itemListElement":
              [
                {
                  "@type":"ListItem",
                  "position":1,
                  "name":"Guardar Dinheiro",
                  "item":"https://www.guardardinheiro.com.br"
                }
              ]
          }
      `}
        </script>
      );
    } else if (props.nivel === '2') {
      return (
        <script type="application/ld+json">
          {` 
          {
            "@context":"https://schema.org",
            "@type":"BreadcrumbList",
            "itemListElement":
              [
                {
                  "@type":"ListItem",
                  "position":1,
                  "name":"Guardar Dinheiro",
                  "item":"https://www.guardardinheiro.com.br"
                },
                {
                  "@type":"ListItem",
                  "position":2,
                  "name":"${props.title}",
                  "item":"${props.canonical}"
                }              
              ]
          }`}
        </script>
      );
    } else if (props.nivel === '3') {
      return (
        <script type="application/ld+json">
          {` 
          {
            "@context":"https://schema.org",
            "@type":"BreadcrumbList",
            "itemListElement":
              [
                {
                  "@type":"ListItem",
                  "position":1,
                  "name":"Guardar Dinheiro",
                  "item":"https://www.guardardinheiro.com.br"
                },
                {
                  "@type":"ListItem",
                  "position":2,
                  "name":"${props.titleNivel2}",
                  "item":"https://www.guardardinheiro.com.br${props.rotaNivel2}"
                },
                {
                  "@type":"ListItem",
                  "position":3,
                  "name":"${props.title}",
                  "item":"${props.canonical}"
                }              
              ]
          }`}
        </script>
      );
    }
  }

  return (
    <Helmet>
      <title>{props.title}</title>
      <meta itemProp="name" content={props.title}></meta>
      <meta name="description" content={props.metaDescription} />
      <meta name="keywords" content={props.h1} />
      <link rel="canonical" href={props.canonical}></link>

      <script type="application/ld+json">
        {`{
            "@context":"https://schema.org",
            "@type":"Organization",
            "url":"https://www.guardardinheiro.com.br",
            "name":"Guardar Dinheiro",
            "logo": "https://blogguardardinheiro.s3.sa-east-1.amazonaws.com/logo3.png",
            "description": "Guardar Dinheiro é um portal gratuito que oferece informações do mercado financeiro que ajuda os investidores a escolher o melhor investimento do momento.",
            "sameAs" : [
              "https://www.facebook.com/siteguardardinhero",
              "https://twitter.com/guardardinheir1",
              "https://www.linkedin.com/in/guardar-dinheiro-267073230/",
              "https://br.pinterest.com/guardardinheiro/",
              "https://www.instagram.com/guardardinheiro/",
              "https://www.youtube.com/channel/CYhHakmdv-lGolh3zahffCQ",    
              "https://medium.com/@guardardinheiro"
            ]            
          }`}
      </script>

      {getSchemaWebPage()}

      {getSchemaBreadcumbList()}
    </Helmet>
  );
};

export default Head;
