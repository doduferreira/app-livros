import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Inicio.module.css';
import { Container } from 'react-bootstrap';
import { faBookOpen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Incio = () => {
  const navigate = useNavigate();

  React.useEffect(() => {
    window.localStorage.getItem('gd_uid');
  }, []);

  return (
    <>
      <Container>
        <h2>Inicio</h2>
        <div className={styles.container}>
          <div className={styles.item}>
            <div>
              <span>Cadastrar um novo livro</span>
            </div>
            <div>
              <FontAwesomeIcon icon={faBookOpen} />
            </div>
          </div>
          <div className={styles.item}>
            <div>
              <span>Cadastrar mensagem</span>
            </div>
            <div>
              <FontAwesomeIcon icon={faBookOpen} />
            </div>
          </div>
          <div className={styles.item}>
            <div>
              <span>Livros mais lidos pelos nossos usuarios</span>
            </div>
            <div>
              <FontAwesomeIcon icon={faBookOpen} />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Incio;
