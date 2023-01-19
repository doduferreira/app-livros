import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { UserStorage } from './Contexts/UserContext';
import isMobile from './Components/Helper/Mobile';
import { Container } from 'react-bootstrap';
import LoginForm from './Components/Autenticacao/LoginForm';
import Incio from './Pages/Inicio/Inicio';
import CadastrarLivro from './Pages/CadastrarLivro/CadastrarLivro';

const Home = React.lazy(() => import('./Pages/Home/Home'));
const Registro = React.lazy(() => import('./Components/Autenticacao/Registro'));
const Login = React.lazy(() => import('./Components/Autenticacao/Login'));
const Autenticacao = React.lazy(() =>
  import('./Components/Autenticacao/Autenticacao'),
);

class App extends Component {
  state = {
    mobile: false,
  };

  componentDidMount() {
    const mobile = isMobile();
    this.setState({ mobile: mobile });
  }

  render() {
    return (
      <>
        <BrowserRouter>
          <UserStorage>
            <Routes>
              <Route
                path="/"
                element={
                  <React.Suspense fallback={<div></div>}>
                    <Home />
                  </React.Suspense>
                }
              />

              <Route
                path="/login"
                element={
                  <React.Suspense fallback={<div></div>}>
                    <LoginForm />
                  </React.Suspense>
                }
              />
              <Route
                path="/autenticacao/*"
                element={
                  <React.Suspense fallback={<div></div>}>
                    <Autenticacao />
                  </React.Suspense>
                }
              />

              <Route path="/inicio" element={<Incio />} />
              <Route path="/cadastrarLivro" element={<CadastrarLivro />} />
            </Routes>

            {/* <Footer /> */}
          </UserStorage>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
