import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { MyTextInput } from '../components';

import '../styles/styles.css';

export const RegisterFormikPage = () => {
  return (
    <div>
      <h1>RegisterFormikPage</h1>
      <Formik
        initialValues={{
          name: '',
          email: '',
          password: '',
          confirmPassword: '',
        }}
        onSubmit={(values) => {
          alert(JSON.stringify(values, null, 2));
        }}
        validationSchema={Yup.object({
          name: Yup.string()
            .min(2, 'Must be at least 2 characters')
            .max(15, 'Must be 15 characters or less')
            .required('Required'),
          email: Yup.string()
            .email('Invalid email address')
            .required('Required'),
          password: Yup.string()
            .min(6, 'Must be at least 6 characters')
            .max(20, 'Must be 20 characters or less')
            .required('Required'),
          confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Passwords must match')
            .required('Required'),
        })}
      >
        {(formik) => (
          <Form>
            <MyTextInput
              name="name"
              label="Name"
              type="text"
              placeholder="Adri"
            />

            <MyTextInput
              name="email"
              label="Email Address"
              type="email"
              placeholder="test@gmail.com"
            />

            <MyTextInput
              name="password"
              label="Password"
              type="password"
              placeholder="*******"
            />

            <MyTextInput
              name="confirmPassword"
              label="Confirm Password"
              type="password"
              placeholder="*******"
            />

            <button type="submit">Create</button>
            <button type="button" onClick={formik.handleReset}>
              Reset Form
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
