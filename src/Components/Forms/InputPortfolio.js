import React from 'react';
import { Container } from 'react-bootstrap';
import useFetch from '../../Hooks/useFetch';
import {
  AWS_GET_PRODUTOS_PORTFOLIO,
  AWS_GET_FII_ACOES,
  AWS_GET_FUNDOS_DISTINTOS,
} from '../Integracoes/Api';
import styles from './InputPortfolio.module.css';

const InputPortfolio = (props) => {
  const { data, loading, error, request } = useFetch();
  const [text, setText] = React.useState('');
  const [suggestions, setSuggestions] = React.useState([]);

  React.useEffect(() => {
    if (props.funcionalidade === 'favoritos') {
      const { url, options } = AWS_GET_PRODUTOS_PORTFOLIO();
      request(url, options);
    } else if (props.funcionalidade === 'fundos') {
      const { url, options } = AWS_GET_FUNDOS_DISTINTOS();
      request(url, options);
    } else {
      const { url, options } = AWS_GET_FII_ACOES(props.funcionalidade);
      request(url, options);
    }
  }, [request]);

  function onSuggestHandler(text) {
    if (props.funcionalidade === 'favoritos') {
      setText(
        text.tipo.toUpperCase() +
          '  -  ' +
          text.nome.toUpperCase() +
          '  -  ' +
          text.chave.toUpperCase(),
      );
    } else if (props.funcionalidade === 'fundos') {
      setText(text.cnpj.toUpperCase() + '  -  ' + text.nome.toUpperCase());
    } else if (props.funcionalidade === 'etf') {
      setText(text.ticker.toUpperCase() + '  -  ' + text.nome.toUpperCase());
    } else if (props.funcionalidade === 'cripto') {
      setText(text.simbolo.toUpperCase() + '  -  ' + text.nome.toUpperCase());
    } else {
      setText(text.acao.toUpperCase() + '  -  ' + text.empresa.toUpperCase());
    }

    setSuggestions([]);
  }

  function onChangeHandler(text) {
    var qtdeCaracteres = 1;
    if (props.funcionalidade === 'favoritos') {
      qtdeCaracteres = 3;
    }
    let matches = [];
    if (text.length >= qtdeCaracteres) {
      matches = data.filter((registro) => {
        var ticker = '';
        var nome = '';
        if (props.funcionalidade === 'favoritos') {
          ticker = registro.chave;
          nome = registro.nome;
        } else if (props.funcionalidade === 'fundos') {
          ticker = registro.cnpj;
          nome = registro.nome;
        } else if (props.funcionalidade === 'etf') {
          ticker = registro.ticker;
          nome = registro.nome;
        } else if (props.funcionalidade === 'cripto') {
          ticker = registro.simbolo;
          nome = registro.nome;
        } else {
          ticker = registro.acao;
          nome = registro.empresa;
        }
        const regex = new RegExp(`${text}`, 'gi');

        return (nome + '_' + ticker).match(regex);
      });
    }
    // console.log('matches', matches);
    setSuggestions(matches);
    setText(text);
  }

  function retornaListaBonita(segguestion) {
    if (props.funcionalidade === 'favoritos') {
      return retornaListaBonitaFavoritos(segguestion);
    } else {
      return retornaListaBonitaComparador(segguestion);
    }
  }

  function retornaListaBonitaFavoritos(suggestion) {
    if (suggestion.tipo == 'FUNDOS' || suggestion.tipo == 'CRIPTO') {
      return (
        <div>
          <div style={{ margin: '1px' }}>
            <span className={styles.spanTipo}>{suggestion.tipo}</span>
            <div style={{ display: 'grid', marginLeft: '10px' }}>
              <span className={styles.spanNome}>
                {suggestion.nome.toUpperCase()}
              </span>
              <span className={styles.spanDetalhe}>
                {suggestion.chave.toUpperCase()}
              </span>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <div style={{ margin: '1px' }}>
            <span className={styles.spanTipo}>{suggestion.tipo}</span>
            <div style={{ display: 'grid', marginLeft: '10px' }}>
              <span className={styles.spanNome}>
                {suggestion.chave.toUpperCase()}
              </span>
              <span className={styles.spanDetalhe}>
                {suggestion.nome.toUpperCase()}
              </span>
            </div>
          </div>
        </div>
      );
    }
  }

  function retornaListaBonitaETF(suggestion) {
    return (
      <div>
        <div style={{ margin: '1px' }}>
          <span className={styles.spanTipo}>{'ETF'}</span>
          <div style={{ display: 'grid', marginLeft: '10px' }}>
            <span className={styles.spanNome}>
              {suggestion.ticker.toUpperCase()}
            </span>
            <span className={styles.spanDetalhe}>
              {suggestion.nome.toUpperCase()}
            </span>
          </div>
        </div>
      </div>
    );
  }

  function retornaListaBonitaComparador(suggestion) {
    var ticker = '';
    var nome = '';

    if (props.funcionalidade === 'etf') {
      ticker = suggestion.ticker;
      nome = suggestion.nome;
    } else if (props.funcionalidade === 'cripto') {
      ticker = suggestion.simbolo;
      nome = suggestion.nome;
    } else if (props.funcionalidade === 'fundos') {
      ticker = suggestion.cnpj;
      nome = suggestion.nome;
    } else {
      ticker = suggestion.acao;
      nome = suggestion.empresa;
    }

    return (
      <div>
        <div style={{ margin: '1px' }}>
          <span className={styles.spanTipo}>
            {props.funcionalidade.toUpperCase()}
          </span>
          <div style={{ display: 'grid', marginLeft: '10px' }}>
            <span className={styles.spanNome}>{ticker.toUpperCase()}</span>
            <span className={styles.spanDetalhe}>{nome.toUpperCase()}</span>
          </div>
        </div>
      </div>
    );
  }

  function onFocusInput() {
    document.getElementById('inputPortfolio').value = '';
  }

  if (loading)
    return (
      <input
        id="inputPortfolio"
        type="text"
        className={styles.input}
        placeholder={'CARREGANDO PRODUTOS... '}
      ></input>
    );
  if (data)
    return (
      <div>
        <input
          id="inputPortfolio"
          type="text"
          className={styles.input}
          placeholder={'🔎 PESQUISE '}
          onChange={(e) => onChangeHandler(e.target.value)}
          onFocus={() => onFocusInput()}
          value={text}
        ></input>
        {suggestions &&
          suggestions.map((suggestion, i) => (
            <div
              key={i}
              className={styles.suggestion}
              onClick={() => onSuggestHandler(suggestion)}
            >
              {retornaListaBonita(suggestion)}
            </div>
          ))}
      </div>
    );
  else return null;
};

export default InputPortfolio;
