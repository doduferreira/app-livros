import React from 'react';
import styles from './Menu.module.css';

const Menu = () => {
  return (
    <div className="App">
      <details>
        <summary></summary>
        <nav className={styles.menu}>
          <a href="#link">Home</a>
          <a href="#link">Work</a>
          <a href="#link">Links</a>
          <a href="#link">Contact</a>
          <a href="#link">About</a>
        </nav>
      </details>
    </div>
  );
};
export default Menu;
