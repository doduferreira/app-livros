import React from 'react';
import style from './Header.module.css';

import {
  faUserCircle,
  faCaretRight,
  faCaretDown,
  faSignOutAlt,
} from '@fortawesome/free-solid-svg-icons';
import { UserContext } from '../Contexts/UserContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Botao from '../Components/Forms/Botao';

const HeaderLogged = () => {
  const { user, userLogout, login } = React.useContext(UserContext);

  return (
    <div className="App">
      <nav className={style.nav}>
        <div className={style.navbar}>
          <div className={[style.conatiner, style.nav_container].join(' ')}>
            <div className={style.botaoMenu}>
              <Botao>Comece já</Botao>
            </div>
            <label for="chkHamburger" style={{ color: '#F7F7F7' }}>
              .
            </label>
            <input
              role="presentation"
              className={style.checkbox}
              type="checkbox"
              name="chkHamburger"
              id="chkHamburger"
            />

            <div className={style.hamburger_lines}>
              <span className={[style.line, style.line1].join(' ')}></span>
              <span className={[style.line, style.line2].join(' ')}></span>
              <span className={[style.line, style.line3].join(' ')}></span>
            </div>
            <div className={style.logo}>
              <a href="/" rel="dofollow">
                <img
                  loading="auto"
                  style={{
                    width: '130px',
                    height: 'auto',
                    position: 'absolute',
                    top: '8px',
                    left: '15px',
                  }}
                  // src={fgLogo}
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPoAAACWCAMAAADABGUuAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAMAUExURf///w4WKCZk6xIaLP39/fv9//v7+w4WKv39/yRi6xAYKihk6wAIHB5e6yhm6xxc6yJg6xAYLP3//xZY6QMMIAYOIgIKHhpa68fX+Rha6QoSJgAGGhJW6QwUKPv7/RQcLipm6/n7/wgQJJOx9SBg6xIaLt3n+8nZ+wAEGPf5/1CB7wwUJs/d+05UYvn5+zQ6Svv7/16N8QIMHgkSJBRW6RohNI+v9SBe67HH90R47SZi6/X4/9Xh+0B27dfj+xYeMMPV+TBq7RRY6fP09AdN6Xif80RKWWiT8efv/SJi6/v9/Uh875i19UR67vX5/4Gl84eLlSxo6zhw7fP3/gYQIo2v9WqV8Ttz7WCN8dbX25y49UJ37evs7ZGw9vHy89fZ26eqsQAGHAAJHj9GVUdNW4qs9d/o/RBU6SkwQTtBUe3y/RgfMgpQ6ePr/dTV2DA3SF5jcNna3RQcMKnB9/n5+hpc67a5v6C89xwkNh8mOOnv/XF2gkpQXs3a+67F99vc32FncxIYLCQrPFBWZJSXoHh9iMPFyqbA9+/w8VGE75Wz9bzP+YqOmOrq60JIV2ZrdyIpO1uK8bPJ+RhY6ebt/c/Q1HSd80Z67jJs7fL1/rfL+eDg4+/0/TVu7ZuepmWS8aKmrWxwfGpve42t9Z+79mKP8UxSYMPT+SwzRLq8wbnN+Q1S6QAAFMfJzrK1vOXm6L7AxWCP8ZCUnff394WJk9vl+4ep9NHf+4GFj2yX8amss6O991RaaJ+iqvX19W+Y8kp+79Pg+1heagQOIIOHkcXV+dnk+66wt93e4SYuPqvD98zN0sHT+ZWZoayutefo6jY8TI2Rm9HT11xhbuTk5Hqh8+3t7zg+Tm1yfvX2936DjVNYZlSF706B73yBi8jY+xpa6bGzuXZ7h5ibo1aH77/CxyYsPoiMlMrL0H6k88DR+ZOz9YOn87u9w///+8HDx2huenR4haGjq6Wnr4Ol8/n7/JSz+W50fsXX+QoUJgJJ5zhATvf7/xAWKqnD9+3p4c6mygYAAARqaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8P3hwYWNrZXQgYmVnaW49J++7vycgaWQ9J1c1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCc/Pgo8eDp4bXBtZXRhIHhtbG5zOng9J2Fkb2JlOm5zOm1ldGEvJz4KPHJkZjpSREYgeG1sbnM6cmRmPSdodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjJz4KCiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0nJwogIHhtbG5zOkF0dHJpYj0naHR0cDovL25zLmF0dHJpYnV0aW9uLmNvbS9hZHMvMS4wLyc+CiAgPEF0dHJpYjpBZHM+CiAgIDxyZGY6U2VxPgogICAgPHJkZjpsaSByZGY6cGFyc2VUeXBlPSdSZXNvdXJjZSc+CiAgICAgPEF0dHJpYjpDcmVhdGVkPjIwMjMtMDEtMTc8L0F0dHJpYjpDcmVhdGVkPgogICAgIDxBdHRyaWI6RXh0SWQ+MmM2ZmVlNTgtZjhlMi00YTdkLTgxNDQtZTA1MjI3NDI5ZDllPC9BdHRyaWI6RXh0SWQ+CiAgICAgPEF0dHJpYjpGYklkPjUyNTI2NTkxNDE3OTU4MDwvQXR0cmliOkZiSWQ+CiAgICAgPEF0dHJpYjpUb3VjaFR5cGU+MjwvQXR0cmliOlRvdWNoVHlwZT4KICAgIDwvcmRmOmxpPgogICA8L3JkZjpTZXE+CiAgPC9BdHRyaWI6QWRzPgogPC9yZGY6RGVzY3JpcHRpb24+CgogPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9JycKICB4bWxuczpkYz0naHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8nPgogIDxkYzp0aXRsZT4KICAgPHJkZjpBbHQ+CiAgICA8cmRmOmxpIHhtbDpsYW5nPSd4LWRlZmF1bHQnPlJFTUlOREVSIC0gMTwvcmRmOmxpPgogICA8L3JkZjpBbHQ+CiAgPC9kYzp0aXRsZT4KIDwvcmRmOkRlc2NyaXB0aW9uPgoKIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PScnCiAgeG1sbnM6cGRmPSdodHRwOi8vbnMuYWRvYmUuY29tL3BkZi8xLjMvJz4KICA8cGRmOkF1dGhvcj5ncmVrYW1hcmlpPC9wZGY6QXV0aG9yPgog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"
                  alt="Logotipo Site Guardar Dinheiro"
                />
              </a>
            </div>
            <div className={style.menu_items}>
              <ul>
                <li>
                  <a href="#" rel="dofollow">
                    Funcionalidades
                  </a>
                </li>

                <li>
                  <a href="#" rel="dofollow">
                    Depoimentos
                  </a>
                </li>
                <li>
                  <a href="/login" rel="dofollow">
                    Login
                  </a>
                </li>
                <li>
                  <div className={style.dropdown}>
                    <a href="#" className={style.dropbtn}>
                      Dropdown <FontAwesomeIcon icon={faCaretDown} />
                    </a>
                    <div className={style.dropdownContent}>
                      <a href="#">Link 1</a>
                      <a href="#">Link 2</a>
                      <a href="#">Link 3</a>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};
export default HeaderLogged;
