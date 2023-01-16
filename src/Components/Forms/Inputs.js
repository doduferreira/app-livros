import React from 'react';
import styles from './Inputs.module.css';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';

const Inputs = ({
  tipo,
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
  const [telefone, setTelefone] = React.useState();
  // onChange={(e) => setSenha(e.target.value)}
  return (
    <div>
      {tipo === 'normal' ? (
        <div className={styles.inputContainer}>
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
          <label htmlFor={name}> {label}</label>
        </div>
      ) : null}

      {tipo === 'phone' ? (
        <div className={styles.inputContainer}>
          <PhoneInput
            id={name}
            name={name}
            international={false}
            defaultCountry="BR"
            placeholder="telefone (__) _____-____"
            value={value}
            onChange={(e) => setTelefone(value)}
          />
        </div>
      ) : null}
      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
};

export default Inputs;
