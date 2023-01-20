import React from 'react';

import styles from './Input.module.css';

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
    <div className={styles.inputGroup}>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        onKeyUp={onKeyUp}
        placeholder={placeholder}
        step={step}
      />
      <label htmlFor={name}>{label}</label>
      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
};

export default Input;
