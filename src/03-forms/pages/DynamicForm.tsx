import { Formik, Form } from 'formik';
import { MyTextInput } from '../components';
import formJSON from '../data/custom-form.json';

const initialValues: { [x: string]: any } = {};

for (const input of formJSON) {
  initialValues[input.name] = input.value || '';
}

export const DynamicForm = () => {
  return (
    <div>
      <h1>Dynamic Form Page</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 500);
        }}
      >
        {(formik) => (
          <Form noValidate>
            {formJSON.map(({ label, name, placeholder, type, value }) => {
              return (
                <MyTextInput
                  key={name}
                  label={label}
                  name={name}
                  placeholder={placeholder}
                  type={(type as any) || 'text'}
                />
              );
            })}
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
