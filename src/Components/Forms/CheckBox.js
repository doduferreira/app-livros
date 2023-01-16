import React from 'react';
import styleschk from './CheckBox.module.css';
import styles from './Input.module.css';

const CheckBox = ({
  label,
  name,
  value,
  onChange,
  error,
  onBlur,
  onKeyUp,
  placeholder,
}) => {
  return (
    <div className={styles.wrapper}>
      <label htmlFor={name} className={styleschk.container}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        // className={styles.input}
        type="checkbox"
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        onKeyUp={onKeyUp}
        placeholder={placeholder}
      />
      <span className={styleschk.checkmark}></span>
    </div>
  );
};

export default CheckBox;
