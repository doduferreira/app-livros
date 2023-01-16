import { BrowserRouter } from 'react-router-dom';
import Route from './Route';
import HomeNova from '../Components/Home/HomeNova';
import Login from '../Components/Autenticacao/Login';
import Registro from '../Components/Autenticacao/Registro';

import Carteira from '../Components/Carteira/Carteira';

export default function Routes() {
  return (
    <BrowserRouter>
      <Route exact path="/" element={HomeNova} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/registro" component={Registro} />

      <Route exact path="/simulador-carteira" component={Carteira} isPrivate />
    </BrowserRouter>
  );
}
