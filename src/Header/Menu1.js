import React from 'react';
import styles from './Menu1.module.css';

const Menu = () => {
  return (
    <div className="App">
      <nav>
        <div className={styles.navicon}>
          <div></div>
        </div>

        <a>This was</a>
        <a>Made using</a>
        <a>The clip-path property</a>
        <a>Transition in</a>
        <a>CSS only</a>
      </nav>
    </div>
  );
};
export default Menu;
