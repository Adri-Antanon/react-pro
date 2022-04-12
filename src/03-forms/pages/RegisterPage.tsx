import { FormEvent } from 'react';
import { useForm } from '../hooks/useForm';

import '../styles/styles.css';

export const RegisterPage = () => {
  const {
    onChange,
    resetForm,
    isValidEmail,
    formData,
    email,
    name,
    password1,
    password2,
  } = useForm({
    name: '',
    email: '',
    password1: '',
    password2: '',
  });

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('submit', formData);
  };

  return (
    <div>
      <h1>RegisterPage</h1>
      <form noValidate onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={name}
          onChange={onChange}
          className={`${name.length <= 0 && 'has-error'}`}
        />
        {name.trim().length <= 0 && <span>Este campo es necesario</span>}
        <input
          type="text"
          name="email"
          placeholder="Email"
          value={email}
          onChange={onChange}
          className={`${!isValidEmail(email) && 'has-error'}`}
        />
        {!isValidEmail(email) && <span>Email no es válido</span>}
        <input
          type="password"
          placeholder="Password"
          name="password1"
          value={password1}
          onChange={onChange}
        />

        {password1.trim().length <= 0 && <span>Este campo es necesario</span>}
        {password1.trim().length < 6 && password1.trim().length > 0 && (
          <span>La contraseña tiene que tener 6 carácteres</span>
        )}
        <input
          type="password"
          name="password2"
          placeholder="Repeat password"
          value={password2}
          onChange={onChange}
        />

        {password2.trim().length <= 0 && <span>Este campo es necesario</span>}
        {password2.trim().length > 0 && password1 !== password2 && (
          <span>Las contraseñas no coinciden</span>
        )}
        <button type="submit">Register</button>
        <button type="button" onClick={resetForm}>
          Reset Form
        </button>
      </form>
    </div>
  );
};
