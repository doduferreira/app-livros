import React from 'react';
import { Routes, Route, Navigate } from 'react-router';
import LoginCreate from './LoginCreate';
import LoginForm from './LoginForm';
import LoginPasswordLost from './LoginPasswordLost';
import { UserContext } from '../../Contexts/UserContext';

const Autenticacao = () => {
  const { login } = React.useContext(UserContext);

  if (login === true) return <Navigate to="/favoritos" />;
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginForm />}></Route>
        <Route path="/criar" element={<LoginCreate />}></Route>
        <Route path="perdeu" element={<LoginPasswordLost />}></Route>
      </Routes>
    </div>
  );
};

export default Autenticacao;
