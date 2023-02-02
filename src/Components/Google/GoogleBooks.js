import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { faBookOpen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useFetch from '../../Hooks/useFetch';
import { GOOGLE_GET_BOOKS, POST_ADD_BOOK_TO_USER } from '../Integracoes/Api';
import styles from './GoogleBooks.module.css';
import Botao from '../Forms/Botao';
import ModalCadastro from '../Modal/ModalCadastro';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Input from '../Forms/Input';

const GoogleBooks = () => {
  const navigate = useNavigate();
  const [count, setCount] = React.useState();
  const { data, loading, error, request } = useFetch();
  const [show, setShow] = React.useState(false);
  const [chosenBookId, setChosenBookId] = React.useState(null);
  const [chosenBookTitle, setChosenBookTitle] = React.useState(null);

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

  function addBookToUser(event, book) {
    event.preventDefault();
    setChosenBookId(book.id);
    setChosenBookTitle(book.volumeInfo.title);
    setShow(true);
    console.log(show);
  }

  function retornaLivroDetalhado(book) {
    // console.log(book);
    let paginas = 0;
    let idGoogle,
      titulo,
      breveDescricao,
      urlImg = '';

    idGoogle = book.id;
    titulo = book.volumeInfo.title;
    if (book.searchInfo) {
      breveDescricao = book.searchInfo.textSnippet;
    }

    if (book.volumeInfo.imageLinks) {
      urlImg = book.volumeInfo.imageLinks.thumbnail;
    }

    return (
      <div className={styles.item}>
        <div>
          <p>{idGoogle}</p>
          <p>{titulo}</p>
        </div>
        <div>
          <img src={urlImg}></img>
        </div>
        <div>
          <p>{breveDescricao}</p>
        </div>

        <Botao variant="primary" onClick={(e) => addBookToUser(e, book)}>
          Incluir em Meus Livros
        </Botao>
      </div>
    );
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
          data.totalItems > 0 &&
          data.items.map((book) => retornaLivroDetalhado(book))}
      </div>
      {show && (
        <ModalCadastro
          onClose={() => setShow(false)}
          google_book_id={chosenBookId}
          google_book_title={chosenBookTitle}
          show={show}
        />
      )}
    </>
  );
};

export default GoogleBooks;
