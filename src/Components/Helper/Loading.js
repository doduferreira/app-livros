import React from 'react';
import { Ring } from 'react-awesome-spinners';
import styles from './Loading.module.css';

const Loading = () => {
  const [loading, setLoading] = React.useState(true);
  return (
    <div className={styles.div_center}>
      {loading && <Ring />} <h2 style={{ color: '#3F3F44' }}>Carregando...</h2>
    </div>
  );
};

export default Loading;
