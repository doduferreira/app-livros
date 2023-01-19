import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { faBookOpen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useFetch from '../../Hooks/useFetch';
import { GOOGLE_GET_BOOKS } from '../Integracoes/Api';
import styles from './GoogleBooks.module.css';
import Botao from '../Forms/Botao';

const GoogleBooks = () => {
  const navigate = useNavigate();
  const [count, setCount] = React.useState(0);
  const { data, loading, error, request } = useFetch();
  React.useEffect(() => {
    window.localStorage.getItem('gd_uid');
  }, []);

  function getBooksByName(e) {
    setCount(e.target.value.length);
    if (e.target.value.length >= 3) {
      console.log('vai');
      const { url, options } = GOOGLE_GET_BOOKS(e.target.value);
      request(url, options);
    }
  }

  return (
    <>
      <input
        type="text"
        // onChange={(e) => setCount(e.target.value.length)}
        onChange={(e) => getBooksByName(e)}
      ></input>
      <p>{count}</p>
      <span>Resultados</span>
      <div className={styles.container}>
        {data &&
          data.items.map((book) => (
            <div className={styles.item}>
              <div>
                <p>{book.volumeInfo.title}</p>
              </div>
              <div>
                {book.volumeInfo.imageLinks && (
                  <img src={book.volumeInfo.imageLinks.thumbnail}></img>
                )}
              </div>
              {/* <div>
                {book.volumeInfo.pageCount && (
                  <p>{book.volumeInfo.pageCount}</p>
                )}
              </div> */}
              <Botao>CADASTRAR</Botao>
            </div>
          ))}
      </div>
    </>
  );
};

export default GoogleBooks;
