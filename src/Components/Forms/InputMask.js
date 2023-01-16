import React from 'react';
import styles from '../StylesGlobal/Input.module.css';
import NumberFormat from 'react-number-format';

const InputMask = ({
  label,
  thousandSeparator,
  decimalSeparator,
  prefix,
  suffix,
  type,
  name,
  value,
  onChange,
  error,
  onBlur,
  onKeyUp,
  placeholder,
}) => {
  return (
    <div>
      <label htmlFor={name} className={styles.label}>
        {label}
      </label>
      <NumberFormat
        id={name}
        name={name}
        className={styles.input}
        type={type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        onKeyUp={onKeyUp}
        placeholder={placeholder}
        thousandSeparator={thousandSeparator}
        decimalSeparator={decimalSeparator}
        prefix={prefix}
        suffix={suffix}
      />
      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
};

export default InputMask;
