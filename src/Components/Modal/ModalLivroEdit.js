import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import useFetch from '../../Hooks/useFetch';
import Loading from '../Helper/Loading';
import { POST_ADD_BOOK_TO_USER } from '../Integracoes/Api';
import { useNavigate } from 'react-router-dom';

function ModalLivroEdit(props) {
  const navigate = useNavigate();
  const { data, loading, error, request } = useFetch();

  React.useEffect(() => {}, []);

  if (!props.show) {
    return null;
  }

  function editBook(event) {
    event.preventDefault();
    navigate('/');
  }

  return (
    <Modal show={props.show} onHide={props.onClose}>
      <Modal.Header>
        <Modal.Title>{props.book.title}</Modal.Title>
      </Modal.Header>

      <Modal.Body></Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={props.onClose}>
          Fechar
        </Button>
        <Button variant="primary" onClick={(e) => editBook(e)}>
          Ir para meus liver?
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalLivroEdit;
