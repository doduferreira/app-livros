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

  function getNobeta() {
    var min = Math.ceil(1);
    var max = Math.floor(6);
    var numero = Math.floor(Math.random() * (max - min)) + min;
    // console.log(numero);
    // só mostra nobeta se o numero aleatorio entre 1-3 ser 2, senao fica mostrando toda hora
    if (numero === 2) {
      return (
        <script src="https://api.nobeta.com.br/nobetaads&id=guardardinheiro.inter"></script>
      );
    }
  }

  function getAposta() {
    var d = new Date();
    var hora = d.getHours();

    if (!window.location.href.includes('calculadora-renda-fixa')) {
      if (hora % 3 === 0) {
        return (
          <script
            data-cfasync="false"
            type="text/javascript"
            id="clever-core"
            src={process.env.PUBLIC_URL + '/ScriptAposta.js'}
          ></script>
        );
      }
    }
  }

  function getMapaCalor() {
    var hora = new Date().getHours();

    if (hora === 11) {
      return (
        <script type="text/javascript">
          {` 
        (function () {
          window.__insp = window.__insp || [];
          __insp.push(['wid', 531038134]);
          var ldinsp = function () {
            if (typeof window.__inspld != "undefined") return; window.__inspld = 1; var insp = document.createElement('script'); insp.type = 'text/javascript'; insp.async = true; insp.id = "inspsync"; insp.src = ('https:' == document.location.protocol ? 'https' : 'http') + '://cdn.inspectlet.com/inspectlet.js?wid=531038134&r=' + Math.floor(new Date().getTime() / 3600000); var x = document.getElementsByTagName('script')[0]; x.parentNode.insertBefore(insp, x);
          };
          setTimeout(ldinsp, 0);
        })();
        `}
        </script>
      );
    }
  }

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

      {mostraAnuncio && getNobeta()}

      {mostraAnuncio && getAposta()}

      {/* {props.tagOneSignal && (
        <script>
          {`                                                    
            OneSignal.sendTag("${props.oneSignalTag}","1");              
        `}
        </script>
      )} */}

      {getMapaCalor()}
    </Helmet>
  );
};

export default Head;
