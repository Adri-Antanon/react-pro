import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { MyTextInput, MySelect, MyCheckbox } from '../components';

import '../styles/styles.css';

export const FormikAbstract = () => {
  return (
    <div>
      <h1>Formik Abstract Tutorial</h1>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          terms: false,
          jobType: '',
        }}
        onSubmit={(values) => {
          alert(JSON.stringify(values, null, 2));
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, 'Must be 15 characters or less')
            .required('Required'),
          lastName: Yup.string()
            .max(20, 'Must be 20 characters or less')
            .required('Required'),
          email: Yup.string()
            .email('Invalid email address')
            .required('Required'),
          terms: Yup.boolean().oneOf([true], 'You must accept the terms'),
          jobType: Yup.string()
            .notOneOf(['it-junior'], 'This option is not allowed')
            .required('Required'),
        })}
      >
        {(formik) => (
          <Form>
            <MyTextInput
              label="First Name"
              name="firstName"
              placeholder="Adrián"
              type="text"
            />

            <MyTextInput
              label="Last Name"
              name="lastName"
              placeholder="Antañón"
              type="text"
            />

            <MyTextInput
              label="Email Address"
              name="email"
              placeholder="test@gmail.com"
              type="email"
            />

            <MySelect label="Job Type" name="jobType">
              <option value={''}>Select a job type</option>
              <option value="designer">Designer</option>
              <option value="developer">Developer</option>
              <option value="it-senior">IT Senior</option>
              <option value="it-junior">IT Junior</option>
            </MySelect>

            <MyCheckbox
              label="I agree to the terms and conditions"
              name="terms"
            />
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
