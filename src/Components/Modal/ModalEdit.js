import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import useFetch from '../../Hooks/useFetch';
import Loading from '../Helper/Loading';
import { POST_ADD_BOOK_TO_USER } from '../Integracoes/Api';
import { useNavigate } from 'react-router-dom';

function ModalEdit(props) {
  const navigate = useNavigate();
  const { data, loading, error, request } = useFetch();

  React.useEffect(() => {
    const { url, options } = POST_ADD_BOOK_TO_USER(
      props.google_book_id,
      window.localStorage.getItem('gd_uid'),
      '',
      '',
      'insert',
    );
    request(url, options);
  }, []);

  if (!props.show) {
    return null;
  }

  return (
    <Modal show={props.show} onHide={props.onClose}>
      <Modal.Header>
        <Modal.Title>{props.google_book_title}</Modal.Title>
      </Modal.Header>
      {data &&
        data.body
          .replace(
            '1',
            'Livro Cadastrado com Sucesso na sua Estante de Livros!',
          )
          .replace(
            '0',
            'Você já possui este Livro Cadastrado na Sua Estante de Livros!',
          )}
      {loading && <Loading />}
      <Modal.Body></Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={props.onClose}>
          Fechar
        </Button>
        <Button variant="secondary" onClick={props.onClose}>
          Cadastrar Mais Livros?
        </Button>
        <Button variant="primary" onClick={(e) => navigate('/')}>
          Ir para meus liver?
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalEdit;
