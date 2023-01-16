import React from 'react';
import styles from './BreadcumbH1.module.css';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

const BreadcumbH1 = (props) => {
  return (
    <div className={styles.div}>
      <Breadcrumb className={styles.breadcumb}>
        <Breadcrumb.Item href="/">
          <FontAwesomeIcon icon={faHome} className={styles.spanBreadcumb} />
          <span className={styles.spanBreadcumb}>{' Home'}</span>
        </Breadcrumb.Item>
        {props.paginaAnterior && (
          <Breadcrumb.Item href={props.rotaPaginaAnterior}>
            <FontAwesomeIcon className={styles.spanBreadcumb} />
            <span className={styles.spanBreadcumb}>{props.paginaAnterior}</span>
          </Breadcrumb.Item>
        )}
        <Breadcrumb.Item active style={{ color: '#3F3F44' }}>
          {props.paginaAtual}
        </Breadcrumb.Item>
      </Breadcrumb>
      <h1 className={styles.h1}>{props.texto}</h1>
    </div>
  );
};

export default BreadcumbH1;
