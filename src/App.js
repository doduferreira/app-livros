import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { UserStorage } from './Contexts/UserContext';
import isMobile from './Components/Helper/Mobile';
import { Container } from 'react-bootstrap';
import Menu from './Header/Menu';
import HeaderFinal from './Header/HeaderFinal';
import LoginForm from './Components/Autenticacao/LoginForm';
// import Menu1 from './Header/Menu1';
// import Menu2 from './Header/Menu2';

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
            {/* <Menu /> */}

            {/* <Menu1 /> */}
            {/* <Menu2 /> */}
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
            </Routes>

            {/* <Footer /> */}
          </UserStorage>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
