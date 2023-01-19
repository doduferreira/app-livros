import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { faBookOpen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import GoogleBooks from '../../Components/Google/GoogleBooks';

const CadastrarLivro = () => {
  const navigate = useNavigate();
  const [count, setCount] = React.useState(0);
  React.useEffect(() => {
    window.localStorage.getItem('gd_uid');
  }, []);

  return (
    <>
      <Container>
        <h2>Cadastro</h2>

        <GoogleBooks />
      </Container>
    </>
  );
};

export default CadastrarLivro;
