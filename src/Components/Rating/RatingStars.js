import React from 'react';
import ReactStars from 'react-rating-stars-component';
import useFetch from '../../Hooks/useFetch';
import Loading from '../Helper/Loading';
import { AWS_GET_RATING_STARS } from '../Integracoes/Api';
import styles from './Rating.module.css';
const RatingStars = (props) => {
  const [voto, setVoto] = React.useState(false);
  const [jaVotou, setJaVotou] = React.useState(false);
  const [nota, setNota] = React.useState(false);
  const { data, loading, error, request } = useFetch();

  React.useEffect(() => {
    if (window.localStorage.getItem('gd_voto' + props.pagina) === 'sim') {
      setJaVotou(true);
      setVoto(false);
    }
    const { url, options } = AWS_GET_RATING_STARS(props.pagina);
    request(url, options);
  }, [request, props.pagina]);

  function getSchemaRating() {
    if (loading) return <Loading />;
    if (data) {
      return (
        <script type="application/ld+json">
          {`
            {  
              "@context": "http://schema.org",  
              "@type": "Organization",
              "aggregateRating": 
                {    
                  "@type": "AggregateRating",    
                  "bestRating": "5",    
                  "ratingCount": "${data['qtde']}",    
                  "ratingValue": "${data['media']}"  
                },                
              "name": "${props.title}",  
              "description": "${props.metaDescription}"
            }
        `}
        </script>
      );
    } else {
      return null;
    }
  }

  const ratingChanged = (newRating) => {
    if (window.localStorage.getItem('gd_voto-' + props.pagina) === 'sim') {
      setJaVotou(true);
      setVoto(false);
    } else {
      postRating(newRating);
      setNota(newRating);
    }
  };

  function postRating(newRating) {
    var url =
      'https://2rvgwie2kj.execute-api.sa-east-1.amazonaws.com/producao/portfolio';
    // console.log(url);

    let json_api = JSON.stringify({
      pagina: props.pagina,
      voto: String(newRating),
    });

    // console.log(json_api);

    const requestOptionsPost = {
      method: 'POST',
      body: json_api,
      headers: new Headers({
        'Content-Type': 'application/json',
        Accept: 'application/json',
      }),
    };

    fetch(url, requestOptionsPost)
      .then((response) => {
        if (response.ok) {
          window.localStorage.setItem('gd_voto-' + props.pagina, 'sim');
          setVoto(!voto);
          // console.log(props.pagina);
          // console.log(newRating);
          // return response.json();
        } else {
          throw new Error('Something went wrong ...');
        }
      })
      .catch((error) => console.log(error));
  }

  function retornaTexto() {
    let qtde = 0;
    let media = 0;

    if (data) {
      if (!jaVotou) {
        qtde = data['qtde'];
        media = data['media'];
      }
    }

    if (jaVotou) {
      let texto = document.getElementById('votacao').innerText;
      return (
        <div>
          <p>Você já classificou essa página!</p>
          <p id="votacaoFeita">{texto}</p>
        </div>
      );
    }
    if (voto) {
      qtde = qtde + 1;
      media = ((parseFloat(media) + parseFloat(nota)) / 2).toFixed(2);

      return (
        <div>
          <p>Obrigado pelo seu voto!</p>
          <p id="votacao">
            {'Média da classificação: ' + media + '. Número de votos:' + qtde}
          </p>
        </div>
      );
    } else if (data) {
      return (
        <p id="votacao">
          {'Média da classificação: ' +
            data['media'] +
            '. Número de votos:' +
            data['qtde']}
        </p>
      );
    }
  }

  return (
    <>
      <div className={styles.container}>
        <div className={styles.item}>
          <p>{props.texto}</p>
          <ReactStars
            count={5}
            onChange={ratingChanged}
            size={35}
            isHalf={false}
            emptyIcon={<i className="far fa-star"></i>}
            // halfIcon={<i className="fa fa-star-half-alt"></i>}
            fullIcon={<i className="fa fa-star"></i>}
            activeColor="#ffd700"
            color="#ffe699"
            classNames={styles.stars}
          />
          {retornaTexto()}
        </div>
      </div>
      {getSchemaRating()}
    </>
  );
};

export default RatingStars;
