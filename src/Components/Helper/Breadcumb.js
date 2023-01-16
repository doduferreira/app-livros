import React from 'react';
import styles from './Loading.module.css';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

const Breadcumb = (props) => {
  return (
    <Breadcrumb className={styles.breadcumb}>
      <Breadcrumb.Item href="/">
        <FontAwesomeIcon icon={faHome} className={styles.spanBreadcumb} />
        <span className={styles.spanBreadcumb}>{' Home'}</span>
      </Breadcrumb.Item>
      <Breadcrumb.Item active style={{ color: '#3F3F44' }}>
        {props.titulo}
      </Breadcrumb.Item>
    </Breadcrumb>
  );
};

export default Breadcumb;
