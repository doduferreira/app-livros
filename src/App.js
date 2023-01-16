import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { UserStorage } from './Contexts/UserContext';
import isMobile from './Components/Helper/Mobile';
import Footer from './Footer/Footer';

const Header = React.lazy(() => import('./Header/Header.js'));
const HeaderFinal = React.lazy(() => import('./Header/HeaderFinal.js'));
// politica
const Sobre = React.lazy(() => import('./Pages/SobreNos/Sobre'));
const PoliticaPrivacidade = React.lazy(() =>
  import('./Pages/SobreNos/PoliticaPrivacidade'),
);

// login
const Registro = React.lazy(() => import('./Components/Autenticacao/Registro'));
const Login = React.lazy(() => import('./Components/Autenticacao/Login'));
const Autenticacao = React.lazy(() =>
  import('./Components/Autenticacao/Autenticacao'),
);

//auxilaires
const LGPD = React.lazy(() => import('./Components/Helper/LGPD'));
const Topo = React.lazy(() => import('./Components/Helper/Topo'));

//home
const Home = React.lazy(() => import('./Pages/Home/Home2'));

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
            <React.Suspense fallback={<div>Carregando...</div>}>
              {!this.state.mobile ? <Header /> : <HeaderFinal />}
            </React.Suspense>
            <React.Suspense fallback={<div></div>}>
              <LGPD />
            </React.Suspense>

            {this.state.mobile ? (
              <div>
                <br />
                {/* <br /> */}
                <br />
              </div>
            ) : null}

            <Routes>
              <Route
                path="/registro"
                element={
                  <React.Suspense fallback={<div></div>}>
                    <Registro />
                  </React.Suspense>
                }
              />
              <Route
                path="/login"
                element={
                  <React.Suspense fallback={<div></div>}>
                    <Login />
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

              <Route
                path="/"
                element={
                  <React.Suspense fallback={<div></div>}>
                    <Home />
                  </React.Suspense>
                }
              />
            </Routes>

            <Footer />
          </UserStorage>
        </BrowserRouter>

        <React.Suspense fallback={<div></div>}>
          <Topo />
        </React.Suspense>
      </>
    );
  }
}

export default App;
