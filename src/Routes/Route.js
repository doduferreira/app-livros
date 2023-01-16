import { Route, Navigate } from 'react-router-dom';

export default function RouteWrapper({
  component: Component,
  isPrivate,
  ...rest
}) {
  const loading = false;
  const logged = false;

  if (loading) {
    return <div></div>;
  }

  if (!logged && isPrivate) {
    return <Navigate to="/" />;
  }

  if (logged && !isPrivate) {
    return <Navigate to="/simulador-carteira" />;
  }

  return <Route {...rest} render={(props) => <Component {...props} />} />;
}
