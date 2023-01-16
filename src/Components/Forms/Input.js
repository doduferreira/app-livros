import React from 'react';
import { Container } from 'react-bootstrap';
import styles from '../StylesGlobal/Input.module.css';

const Input = ({
  label,
  type,
  name,
  value,
  onChange,
  error,
  onBlur,
  onKeyUp,
  placeholder,
  step,
}) => {
  return (
    <div>
      <label htmlFor={name} className={styles.label}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        className={styles.input}
        type={type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        onKeyUp={onKeyUp}
        placeholder={placeholder}
        step={step}
      />
      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
};

export default Input;
