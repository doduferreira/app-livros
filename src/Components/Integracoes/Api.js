export const API_URL = 'https://afternoon-inlet-88907.herokuapp.com/api/v1';
export const API_URL_AWS =
  'https://d5lah6zn5k.execute-api.sa-east-1.amazonaws.com/producao';
// export const API_URL = 'http://127.0 .0.1:5000/api/v1';

export function FUNDOS_GET() {
  return {
    url: API_URL + '/prateleira_fundos',
    options: {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept-Encoding': 'gzip',
      },
    },
  };
}

export function RENDA_FIXA_CALCULO_RENDIMENTO(body) {
  // console.log(JSON.stringify(body));
  return {
    url: API_URL + '/calculo_rendimento_renda_fixa',
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    },
  };
}

export function GET_FUNDOS_SEM_CNPJ() {
  return {
    url: API_URL + '/prateleira_fundos_atualizacao',
    options: {
      method: 'GET',
    },
  };
}

export function POST_FUNDOS_CNPJ(body) {
  // console.log(JSON.stringify(body));
  return {
    url: API_URL + '/prateleira_fundos',
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    },
  };
}

export function GET_FUNDOS_BY_NOME_INSTITUICAO(nome, instituicao) {
  // console.log(nome);
  return {
    url: `${API_URL}/prateleira_fundos/_nome=${nome}_instituicao=${instituicao}`,
    options: {
      method: 'GET',
    },
  };
}

export function GET_FUNDO_RENTABILIDADE(nome, instituicao) {
  console.log(
    `${API_URL}/prateleira_fundos/rentabilidade/_nome=${nome}_instituicao=${instituicao}`,
  );
  return {
    url: `${API_URL}/prateleira_fundos/rentabilidade/_nome=${nome}_instituicao=${instituicao}`,
    options: {
      method: 'GET',
    },
  };
}

export function GET_FUNDOS_BY_FILTROS(
  instituicao,
  risco,
  classe,
  aplicacao,
  ordenacao,
) {
  if (aplicacao === '') {
    aplicacao = '0';
  }

  return {
    url: `${API_URL}/prateleira_fundos/_instituicao=${instituicao}_risco=${risco}_classe=${classe}_aplicacao=${aplicacao}_ordenacao=${ordenacao}`,
    options: {
      method: 'GET',
    },
  };
}

export function GET_TOKEN_FINANCIAL_DATA() {
  return {
    url: 'https://api.financialdata.io/token',
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        usuario: 'douglas.eduardof@bol.com.br',
        senha: 'rabito',
      }),
    },
  };
}

export function GET_ESTATTISTICS_FINANCIAL_DATA(token, cnpj) {
  return {
    url: `$https://api.financialdata.io//fundos/${cnpj}/estatisticas`,
    options: {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + token,
      },
    },
  };
}

export function USER_LOGIN(body) {
  console.log(JSON.stringify(body));
  return {
    url: API_URL + '/login',
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    },
  };
}

export function GET_ROTINAS() {
  return {
    url: `${API_URL}/rotinas`,
    options: {
      method: 'GET',
    },
  };
}

export function POST_ROTINAS(body) {
  console.log(JSON.stringify(body));
  return {
    url: API_URL + '/rotinas',
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    },
  };
}

export function AWS_API_RENDA_FIXA_CALCULO_RENDIMENTO(body) {
  console.log(JSON.stringify(body));
  return {
    url: API_URL_AWS + '/rendimentorendafixa',
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    },
  };
}

export function AWS_API_RENDA_FIXA(body) {
  console.log(JSON.stringify(body));
  return {
    url: 'https://jl4ld9psa1.execute-api.sa-east-1.amazonaws.com/producao/renda-fixa',
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    },
  };
}

// export function AWS_GET_PRATELEIRA() {
//   return {
//     url:
//       'https://3fy140uv41.execute-api.sa-east-1.amazonaws.com/producao/prateleira',
//     options: {
//       method: 'GET',
//     },
//   };
// }

export function AWS_GET_PRATELEIRA() {
  return {
    url:
      // dynamodb
      // 'https://8s3wjq3z55.execute-api.sa-east-1.amazonaws.com/producao/fundos-de-investimentos',

      // dataframe
      'https://3fy140uv41.execute-api.sa-east-1.amazonaws.com/producao/prateleira',
    options: {
      method: 'GET',
    },
  };
}

export function AWS_GET_PRATELEIRA_FUNDOS() {
  return {
    url:
      // dynamodb
      // 'https://8s3wjq3z55.execute-api.sa-east-1.amazonaws.com/producao/fundos-de-investimentos',

      // dataframe
      'https://3fy140uv41.execute-api.sa-east-1.amazonaws.com/producao/fundos',
    options: {
      method: 'GET',
    },
  };
}

export function AWS_GET_PRATELEIRA_FUNDOS_FILTRO(
  instituicao,
  risco,
  classe,
  aplicacao,
  ordenacao,
) {
  if (aplicacao === '') {
    aplicacao = '0';
  }
  var url = `https://5370ja18fj.execute-api.sa-east-1.amazonaws.com/producao/fundos-filtro?instituicao=${instituicao}?risco=${risco}?classe=${classe}?aplicacao=${aplicacao}?ordenacao=${ordenacao}`;

  // console.log(url);
  return {
    url: url,
    options: {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept-Encoding': 'gzip',
      },
    },
  };
}

export function AWS_GET_PRATELEIRA_FILTRO(
  instituicao,
  risco,
  classe,
  aplicacao,
  ordenacao,
) {
  if (aplicacao === '') {
    aplicacao = '0';
  }

  return {
    url: `https://5370ja18fj.execute-api.sa-east-1.amazonaws.com/producao/prateleira-filtro?instituicao=${instituicao}?risco=${risco}?classe=${classe}?aplicacao=${aplicacao}?ordenacao=${ordenacao}`,
    options: {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept-Encoding': 'gzip',
      },
    },
  };
}

export function AWS_GET_FUNDO_RETORNO(nome, instituicao) {
  console.log(
    `https://fh63zgsay4.execute-api.sa-east-1.amazonaws.com/producao/fundoretorno?nome=${nome}_${instituicao}`,
  );
  return {
    url: `https://fh63zgsay4.execute-api.sa-east-1.amazonaws.com/producao/fundoretorno?nome=${nome}_${instituicao}`,
    options: {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept-Encoding': 'gzip',
      },
    },
  };
}

export function AWS_GET_ACOES() {
  return {
    url: 'https://48r1pdiu25.execute-api.sa-east-1.amazonaws.com/producao/acoes',
    options: {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept-Encoding': 'gzip',
      },
    },
  };
}

export function AWS_GET_ACOES_DYNAMODB() {
  return {
    url: 'https://wd4fwuh042.execute-api.sa-east-1.amazonaws.com/producao/acoes',
    options: {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept-Encoding': 'gzip',
      },
    },
  };
}

export function AWS_POST_CONTATO(body) {
  // console.log(JSON.stringify(body));

  return {
    url: 'https://vwspj6kail.execute-api.sa-east-1.amazonaws.com/producao/contato',
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    },
  };
}

export function AWS_GET_FII() {
  return {
    url: 'https://hqwphwf1mh.execute-api.sa-east-1.amazonaws.com/producao/fii',
    // url: 'https://av1nllua9k.execute-api.sa-east-1.amazonaws.com/producao/fundos-imobiliarios',
    options: {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept-Encoding': 'gzip',
      },
    },
  };
}

export function AWS_GET_FII_ACOES(tipo) {
  // var url =
  // 'https://wd4fwuh042.execute-api.sa-east-1.amazonaws.com/producao/acoes';
  var url =
    'https://48r1pdiu25.execute-api.sa-east-1.amazonaws.com/producao/acoes';

  if (tipo === 'fii') {
    url =
      // 'https://av1nllua9k.execute-api.sa-east-1.amazonaws.com/producao/fundos-imobiliarios'
      'https://hqwphwf1mh.execute-api.sa-east-1.amazonaws.com/producao/fii';
  } else if (tipo === 'etf') {
    url = 'https://sl1nqc9j1f.execute-api.sa-east-1.amazonaws.com/producao/etf';
  } else if (tipo === 'bdr') {
    url = 'https://sl1nqc9j1f.execute-api.sa-east-1.amazonaws.com/producao/bdr';
  } else if (tipo === 'cripto') {
    url =
      'https://sl1nqc9j1f.execute-api.sa-east-1.amazonaws.com/producao/cripto';
  }
  // console.log(url);
  return {
    url: url,
    options: {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept-Encoding': 'gzip',
      },
    },
  };
}

export function AWS_GET_FII_FILTRO(id) {
  return {
    url: `https://5u8m261gkh.execute-api.sa-east-1.amazonaws.com/producao/fundos-imobiliarios?id=${id}`,
    options: {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept-Encoding': 'gzip',
      },
    },
  };
}

export function AWS_GET_ACOES_FILTRO(id) {
  return {
    url: `https://8kvtcqztpc.execute-api.sa-east-1.amazonaws.com/producao/acoes-filtro?id=${id}`,
    options: {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept-Encoding': 'gzip',
      },
    },
  };
}

export function AWS_GET_BOLSA_FILTRO(id, tipoInvestimento) {
  console.log(id);
  console.log(tipoInvestimento);
  var url = `https://8kvtcqztpc.execute-api.sa-east-1.amazonaws.com/producao/acoes-filtro?id=${id}`;

  if (tipoInvestimento === 'fii')
    url = `https://5u8m261gkh.execute-api.sa-east-1.amazonaws.com/producao/fundos-imobiliarios?id=${id}`;

  return {
    url: url,
    options: {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept-Encoding': 'gzip',
      },
    },
  };
}

export function AWS_GET_COMPARADOR_BOLSA(produto, tipo) {
  return {
    url: `https://nkh24q40zk.execute-api.sa-east-1.amazonaws.com/producao/comparador-acoes-fundos-imobiliarios?produtos=${produto}&tipo=${tipo}`,
    // url: `https://nkh24q40zk.execute-api.sa-east-1.amazonaws.com/producao/comparador-acoes-fundos-imobiliarios?produtos=|HCTR11|IRDM11&tipo=fii`,
    options: {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept-Encoding': 'gzip',
      },
    },
  };
}

export function AWS_POST_COMPARADOR_BOLSA(body) {
  // console.log(JSON.stringify(body));
  return {
    url: 'https://nkh24q40zk.execute-api.sa-east-1.amazonaws.com/producao/comparador-bolsa',
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    },
  };
}

export function AWS_POST_COMPARADOR_FUNDOS(body) {
  // console.log(JSON.stringify(body));
  return {
    url: ' https://o0snqzxqed.execute-api.sa-east-1.amazonaws.com/producao/comparador-bolsa',
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    },
  };
}

export function AWS_POST_COMPARADOR_FUNDOS_DF(body) {
  // console.log(JSON.stringify(body));
  return {
    url: 'https://v2j12xgo6a.execute-api.sa-east-1.amazonaws.com/producao/rendimentorendafixa',
    // 'https://v2j12xgo6a.execute-api.sa-east-1.amazonaws.com/producao/comparador-fundos',
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    },
  };
}

export function AWS_POST_SIMULADOR_CARTEIRA(body) {
  // console.log(JSON.stringify(body));
  return {
    url: 'https://pb1kje92rd.execute-api.sa-east-1.amazonaws.com/producao/rendimentorendafixa',
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    },
  };
}

export function AWS_GET_FUNDOS_DISTINTOS() {
  return {
    url: 'https://hlu6c8t2r4.execute-api.sa-east-1.amazonaws.com/producao/get-fundos-distintos',
    options: {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept-Encoding': 'gzip',
      },
    },
  };
}

export function AWS_GET_LANCAMENTO_FUNDOS() {
  return {
    url: 'https://sl1nqc9j1f.execute-api.sa-east-1.amazonaws.com/producao/lancamento-fundos',
    options: {
      method: 'GET',
    },
  };
}

export function AWS_GET_INVESTIMENTOS(produto, chave) {
  return {
    url: `https://dh6pptmd90.execute-api.sa-east-1.amazonaws.com/producao/get-investimentos?produto=${produto.toUpperCase()}&chave=${chave.toUpperCase()}`,
    options: {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept-Encoding': 'gzip',
      },
    },
  };
}

export function AWS_GET_INVESTIMENTOS_GZIP() {
  return {
    url: 'https://cpe9u0snv3.execute-api.sa-east-1.amazonaws.com/producao/produtos',
    options: {
      method: 'GET',
    },
  };
}

export function AWS_GET_INVESTIMENTOS_FILTRO(body) {
  // console.log(JSON.stringify(body));
  return {
    url: 'https://5qzblrna21.execute-api.sa-east-1.amazonaws.com/producao/post-investimentos-filtro',
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    },
  };
}

export function AWS_GET_PRODUTOS_PORTFOLIO() {
  return {
    url: 'https://sl1nqc9j1f.execute-api.sa-east-1.amazonaws.com/producao/produtos-portfolio',
    options: {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept-Encoding': 'gzip',
      },
    },
  };
}

export function AWS_GET_NETFLIX() {
  return {
    url: 'https://tdtqg755u6.execute-api.sa-east-1.amazonaws.com/producao/netflix',
    options: {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept-Encoding': 'gzip',
      },
    },
  };
}

export function AWS_GET_FECHAMENTO_MERCADO() {
  return {
    url: 'https://do6htk0856.execute-api.sa-east-1.amazonaws.com/producao/fechamento',
    options: {
      method: 'GET',
    },
  };
}

export function AWS_GET_BDR() {
  var d = new Date();
  var hora = d.getHours();
  var url = '';
  console.log(hora);
  if (hora === 18 || hora === 19 || hora === 20) {
    url = 'https://sl1nqc9j1f.execute-api.sa-east-1.amazonaws.com/producao/bdr';
  } else {
    url =
      'https://dh6pptmd90.execute-api.sa-east-1.amazonaws.com/producao/get-investimentos?produto=BDR&chave=TODOS';
  }

  return {
    url: url,
    options: {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept-Encoding': 'gzip',
      },
    },
  };
}

export function AWS_GET_FAVORITOS(uid) {
  var url = `https://s9g9lzdixd.execute-api.sa-east-1.amazonaws.com/producao/portfolio?uid=${uid}`;

  return {
    url: url,
    options: {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept-Encoding': 'gzip',
      },
    },
  };
}

export function AWS_POST_FAVORITOS(http_method, produtoChave, produtoTipo) {
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
        console.log(response);
        // return response.json();
      } else {
        throw new Error('Something went wrong ...');
      }
    })
    .catch((error) => this.setState({ error, isLoading: false }));
}

export function AWS_GET_RATING_STARS(pagina) {
  var url = `https://2rvgwie2kj.execute-api.sa-east-1.amazonaws.com/producao/portfolio?pagina=${pagina}`;

  return {
    url: url,
    options: {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept-Encoding': 'gzip',
      },
    },
  };
}

export function AWS_POST_RATING_STARS(pagina, voto) {
  var url = `https://2rvgwie2kj.execute-api.sa-east-1.amazonaws.com/producao/portfolio?pagina=${pagina}¨&voto=${voto}`;
  return {
    url: url,
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    },
  };
}

export function AWS_GET_ROTINAS() {
  return {
    url: 'https://frzlxrsp2m.execute-api.sa-east-1.amazonaws.com/producao/rotinas',
    options: {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept-Encoding': 'gzip',
      },
    },
  };
}

export function AWS_GET_FUNDAMENTUS(ticker) {
  var url = `https://6o8ac60x21.execute-api.sa-east-1.amazonaws.com/producao/fundamentus?tickers=${ticker}`;
  return {
    url: url,
    options: {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    },
  };
}

export function AWS_GET_TBFUNDAMENTUS(tickers) {
  // https://t8nx4uao96.execute-api.sa-east-1.amazonaws.com/producao/fundamentus?tickers=MGLU3|PETR4
  var url = `https://t8nx4uao96.execute-api.sa-east-1.amazonaws.com/producao/fundamentus?tickers=${tickers}`;
  // console.log(url);
  return {
    url: url,
    options: {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    },
  };
}
