export const addFavoritos = (http_method, produtoChave, produtoTipo) => {
  const urlPostPortfolio =
    'https://s9g9lzdixd.execute-api.sa-east-1.amazonaws.com/producao/portfolio';

  let json_api = JSON.stringify({
    uid: window.localStorage.getItem('gd_uid'),
    produto_chave: produtoChave,
    produto_tipo: produtoTipo,
    http_method: http_method,
  });

  const requestOptionsPost = {
    method: 'POST',
    body: json_api,
    headers: new Headers({
      'Content-Type': 'application/json',
      Accept: 'application/json',
    }),
  };

  fetch(urlPostPortfolio, requestOptionsPost)
    .then((response) => {
      if (response.ok) {
        // console.log(response.json);
        console.log('ok');

        // return response.json();
        window.alert('Produto Adicionado em Seus Investimentos Favoritos');
      } else {
        throw new Error('Something went wrong ...');
      }
    })
    .catch((error) => console.log(error));
};

export default addFavoritos;
