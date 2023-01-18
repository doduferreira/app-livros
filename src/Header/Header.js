import React from 'react';
import { Navbar, NavDropdown, Nav } from 'react-bootstrap';
import styles from './Header.module.css';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import isMobile from '../Components/Helper/Mobile';
import { UserContext } from '../Contexts/UserContext';
import Logo from '../Components/Logo/Logo';

const Header = () => {
  const mobile = isMobile();
  const { user, userLogout, login } = React.useContext(UserContext);

  // function handleRotas(rota, nomeRota) {
  //   return (
  //     <Nav.Link
  //       as={Link}
  //       to={rota}
  //       href={rota}
  //       aria-label={nomeRota}
  //       // className="nav-link py-3 px-0 px-lg-3    rounded"
  //       className={styles.navlink}
  //     >
  //       {nomeRota}
  //     </Nav.Link>
  //   );
  // }

  function headerLogin() {
    if (!login) {
      return (
        <NavDropdown
          title={
            <span
              className={[styles.navlink, styles.navlinkDropDown].join(' ')}
            >
              Conta
              <FontAwesomeIcon icon={faChevronDown} />
            </span>
          }
        >
          <NavDropdown.Item href="/autenticacao/criar">
            {<span className={styles.navlink}>CADASTRE-SE GRÁTIS</span>}
          </NavDropdown.Item>
          <NavDropdown.Item href="/autenticacao">
            {<span className={styles.navlink}>LOGIN</span>}
          </NavDropdown.Item>
          <NavDropdown.Divider />
        </NavDropdown>
      );
    } else {
      return (
        <NavDropdown
          title={
            <span
              className={[styles.navlink, styles.navlinkDropDown].join(' ')}
            >
              Conta
              <FontAwesomeIcon icon={faChevronDown} />
            </span>
          }
        >
          <NavDropdown.Item href="/favoritos">
            {
              <span className={styles.navlink}>
                MEUS INVESTIMENTOS FAVORITOS
              </span>
            }
          </NavDropdown.Item>
          <NavDropdown.Item onClick={userLogout}>
            {<span className={styles.navlink}>SAIR</span>}
          </NavDropdown.Item>
          <NavDropdown.Divider />
        </NavDropdown>
      );
    }
  }

  return (
    <header>
      <div>
        <Navbar
          collapseOnSelect
          variant="dark"
          expand="sm"
          style={{
            backgroundColor: '#F7F7F7',

            position: 'fixed',
            // width: '100%',
            // height: '75px',
            // marginBottom:'10px' ,
            zIndex: '9999',
            top: '0',
            left: '0',
            right: '0',
          }}
          // className={styles.navbar}
        >
          <div
            className="container"
            style={{
              // border: '1px solid #00bfff',
              backgroundColor: '#F7F7F7',
              marginLeft: '110px',
            }}
          >
            <Navbar.Brand href="/">
              <div
                style={{
                  width: '130px',
                  height: 'auto',
                  position: 'absolute',
                  top: '8px',
                  left: '15px',
                }}
              >
                <Logo />
              </div>
            </Navbar.Brand>
            <Navbar.Toggle
              className={styles.navtoogle}
              aria-controls="basic-navbar-nav"
            />
            <Navbar.Collapse
              id="basic-navbar-nav"
              // className={mobile ? styles.mobileMenu : null}
            >
              <Nav className="ml-auto">
                {/* {mobile ? <span className={styles.span}>MENU</span> : null} */}
                {/* <hr className={styles.hr} /> */}
                {/* {handleRotas(
                  '/fundos-de-investimento',
                  'Melhores Fundos de Investimentos',
                )}
                {handleRotas(
                  '/fundos-imobiliarios',
                  'Melhores Fundos Imobiliários',
                )}
                {handleRotas('/acoes', 'Melhores Ações')}
                {handleRotas('/bdr', 'Melhores BDRs')}
                {handleRotas('/etf', 'Melhores ETFs')}
                {handleRotas('/criptomoeda', 'Melhores Criptomoedas')} */}

                <NavDropdown
                  title={
                    <span
                      className={[styles.navlink, styles.navlinkDropDown].join(
                        ' ',
                      )}
                    >
                      {'Melhores Investimentos de 2023 '}
                      <FontAwesomeIcon icon={faChevronDown} />
                    </span>
                  }
                >
                  <NavDropdown.Item href="/fundos-de-investimento">
                    {
                      <span className={styles.navlink}>
                        Melhores Fundos de Investimentos
                      </span>
                    }
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/fundos-imobiliarios">
                    {
                      <span className={styles.navlink}>
                        Melhores Fundos Imobiliários
                      </span>
                    }
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/acoes">
                    {<span className={styles.navlink}>Melhores Ações</span>}
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/bdr">
                    {<span className={styles.navlink}>Melhores BDRs</span>}
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/etf">
                    {<span className={styles.navlink}>Melhores ETFs</span>}
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/criptomoeda">
                    {
                      <span className={styles.navlink}>
                        Melhores Criptomoedas
                      </span>
                    }
                  </NavDropdown.Item>

                  <NavDropdown.Divider />
                </NavDropdown>

                <NavDropdown
                  title={
                    <span
                      className={[styles.navlink, styles.navlinkDropDown].join(
                        ' ',
                      )}
                    >
                      Calculadora Renda Fixa
                      <FontAwesomeIcon icon={faChevronDown} />
                    </span>
                  }
                >
                  <NavDropdown.Item href="/calculadora-renda-fixa">
                    {
                      <span className={styles.navlink}>
                        {!mobile
                          ? 'Calculadora de Contas Digitais X Tesouro X CDBs X Poupança'
                          : 'Contas Digitais X Tesouro X CDBs X Poupança'}
                      </span>
                    }
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/como-juntar/1000000">
                    {
                      <span className={styles.navlink}>
                        Calculadora do Milhão
                      </span>
                    }
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/quanto-rende/0/pagbank">
                    {
                      <span className={styles.navlink}>
                        Quanto Rende Meu Dinheiro no PagBank
                      </span>
                    }
                  </NavDropdown.Item>

                  <NavDropdown.Item href="/quanto-rende/0/tesouro">
                    {
                      <span className={styles.navlink}>
                        Quanto Rende Meu Dinheiro no Tesouro
                      </span>
                    }
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/quanto-rende/0/nubank">
                    {
                      <span className={styles.navlink}>
                        Quanto Rende Meu Dinheiro no Nubank
                      </span>
                    }
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/quanto-rende/0/picpay">
                    {
                      <span className={styles.navlink}>
                        Quanto Rende Meu Dinheiro no Picpay
                      </span>
                    }
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/quanto-rende/0/mercadopago">
                    {
                      <span className={styles.navlink}>
                        Quanto Rende Meu Dinheiro no Mercado Pago
                      </span>
                    }
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/quanto-rende/0/neon">
                    {
                      <span className={styles.navlink}>
                        Quanto Rende Meu Dinheiro no Banco Neon
                      </span>
                    }
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/quanto-rende/0/will">
                    {
                      <span className={styles.navlink}>
                        Quanto Rende Meu Dinheiro no Will Bank
                      </span>
                    }
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/quanto-rende/0/bv">
                    {
                      <span className={styles.navlink}>
                        Quanto Rende Meu Dinheiro no Banco BV
                      </span>
                    }
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/quanto-rende/0/iti">
                    {
                      <span className={styles.navlink}>
                        Quanto Rende Meu Dinheiro no Iti
                      </span>
                    }
                  </NavDropdown.Item>

                  <NavDropdown.Item href="/quanto-rende/0/poupanca">
                    {
                      <span className={styles.navlink}>
                        Quanto Rende Meu Dinheiro na Poupança
                      </span>
                    }
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/quanto-rende/0/next">
                    {
                      <span className={styles.navlink}>
                        Quanto Rende Meu Dinheiro no Banco Next
                      </span>
                    }
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/quanto-rende/0/inter">
                    {
                      <span className={styles.navlink}>
                        Quanto Rende Meu Dinheiro no Banco Inter
                      </span>
                    }
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/quanto-rende/0/99pay">
                    {
                      <span className={styles.navlink}>
                        Quanto Rende Meu Dinheiro no 99Pay
                      </span>
                    }
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/quanto-rende/0/fgts">
                    {
                      <span className={styles.navlink}>
                        Quanto Rende Meu Dinheiro no FGTS
                      </span>
                    }
                  </NavDropdown.Item>

                  <NavDropdown.Divider />
                </NavDropdown>

                <NavDropdown
                  title={
                    <span
                      className={[styles.navlink, styles.navlinkDropDown].join(
                        ' ',
                      )}
                    >
                      Comparadores
                      <FontAwesomeIcon icon={faChevronDown} />
                    </span>
                  }
                >
                  <NavDropdown.Item href="/comparador-fundos-de-investimentos">
                    {
                      <span className={styles.navlink}>
                        Fundos de Investimentos
                      </span>
                    }
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/comparador-fundos-imobiliarios">
                    {
                      <span className={styles.navlink}>
                        Fundos Imobiliários
                      </span>
                    }
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/comparador-acoes">
                    {<span className={styles.navlink}>Ações</span>}
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/comparador-bdr">
                    {<span className={styles.navlink}>BDR</span>}
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/comparador-etf">
                    {<span className={styles.navlink}>ETF</span>}
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/comparador-cripto">
                    {<span className={styles.navlink}>Criptomoedas</span>}
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                </NavDropdown>

                <NavDropdown
                  title={
                    <span
                      className={[styles.navlink, styles.navlinkDropDown].join(
                        ' ',
                      )}
                    >
                      Simuladores
                      <FontAwesomeIcon icon={faChevronDown} />
                    </span>
                  }
                >
                  <NavDropdown.Item href="/melhor-cartao-credito">
                    {
                      <span className={styles.navlink}>
                        Melhor Cartão de Crédito
                      </span>
                    }
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/emprestimo/0/simulador">
                    {<span className={styles.navlink}>Empréstimos</span>}
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/quanto/100/cdi">
                    {<span className={styles.navlink}>Simulador de % CDI</span>}
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/quanto-rende/0/fundo-imobiliario">
                    {
                      <span className={styles.navlink}>
                        Simulador de Dividendos Fundo Imobiliário
                      </span>
                    }
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown
                  title={
                    <span
                      className={[styles.navlink, styles.navlinkDropDown].join(
                        ' ',
                      )}
                    >
                      Não sei Investir
                      <FontAwesomeIcon icon={faChevronDown} />
                    </span>
                  }
                >
                  <NavDropdown.Item
                    href="/educacao-financeira"
                    target="_self"
                    rel="dofollow"
                  >
                    {<span className={styles.navlink}>Comece por Aqui</span>}
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/livros">
                    {
                      <span className={styles.navlink}>
                        Livros Recomendados
                      </span>
                    }
                  </NavDropdown.Item>
                </NavDropdown>
                {headerLogin()}
                {/* <span
                  // className={styles.navlink}
                  style={{ marginTop: '7px', marginLeft: '3px' }}
                >
                  <a
                    href="https://blog.guardardinheiro.com.br/"
                    className={styles.navlink}
                    target="_blank"
                    rel="dofollow"
                  >
                    Blog
                  </a>
                </span> */}
              </Nav>
            </Navbar.Collapse>
          </div>
        </Navbar>
        {/* <hr className={styles.hr}></hr> */}
      </div>
      {/* <hr></hr> */}

      {/* {headerLogin()} */}
      <br />
      <br />
      <br />
    </header>
  );
};

export default Header;
