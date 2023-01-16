import React from 'react';
import { Container } from 'react-bootstrap';

import { Helmet } from 'react-helmet';
import BreadcumbH1 from '../Components/Tags/BreadcumbH1';

const Adm = () => {
  React.useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <>
      {/* <Helmet>
        <script>{`OneSignal.sendTag("adm-site-gd","1");`}</script>
      </Helmet> */}

      <BreadcumbH1 texto="Administradores" paginaAtual="Administradores" />
    </>
  );
};

export default Adm;
