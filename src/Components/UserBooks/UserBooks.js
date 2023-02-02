import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Table } from 'react-bootstrap';
import { faBookOpen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useFetch from '../../Hooks/useFetch';
import { GET_USER_BOOKS } from '../Integracoes/Api';
// import styles from './GoogleBooks.module.css';
import Botao from '../Forms/Botao';
import ModalCadastro from '../Modal/ModalCadastro';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Input from '../Forms/Input';

const UserBooks = () => {
  const navigate = useNavigate();

  const { data, loading, error, request } = useFetch();

  React.useEffect(() => {
    const { url, options } = GET_USER_BOOKS(
      window.localStorage.getItem('gd_uid'),
    );
    request(url, options);
  }, []);

  return (
    <>
      <div className="container">
        <div className="row">
          <Table striped bordered hover>
            <thead>
              <tr>
                <td>Título</td>
                <td>Autores</td>
                <td>Categoria</td>
                <td>Páginas</td>
              </tr>
            </thead>
            <tbody>
              {data &&
                data.map((book) => (
                  <tr>
                    <td>
                      <img src={book.thumbnail} />
                      {book.title}
                    </td>

                    <td>{book.authors}</td>
                    <td>{book.category}</td>
                    <td>{book.page_count}</td>
                  </tr>
                ))}
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
};

export default UserBooks;
