import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { MySelect, MyTextInput } from '../components';
import formJSON from '../data/custom-form.json';

const initialValues: { [key: string]: any } = {};
const requiredFields: { [key: string]: any } = {};

for (const input of formJSON) {
  initialValues[input.name] = input.value || '';

  if (!input.validations) continue;

  let schema = Yup.string();

  for (const rule of input.validations) {
    if (rule.type === 'required') {
      schema = schema.required(rule.message);
    }

    if (rule.type === 'minLength') {
      schema = schema.min((rule as any).value, rule.message);
    }

    if (rule.type === 'maxLength') {
      schema = schema.max((rule as any).value, rule.message);
    }

    if (rule.type === 'email') {
      schema = schema.email(rule.message);
    }
  }

  requiredFields[input.name] = schema;
}

const validationSchema = Yup.object({ ...requiredFields });

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
        validationSchema={validationSchema}
      >
        {(formik) => (
          <Form noValidate>
            {formJSON.map(
              ({ label, name, placeholder, type, value, options }) => {
                if (
                  type === 'text' ||
                  type === 'email' ||
                  type === 'password'
                ) {
                  return (
                    <MyTextInput
                      key={name}
                      label={label}
                      name={name}
                      placeholder={placeholder}
                      type={type as any}
                    />
                  );
                } else if (type === 'select') {
                  return (
                    <MySelect label={label} name={name}>
                      <option value="">Select an option</option>
                      {options?.map(({ id, label }) => (
                        <option key={id} value={`${id}-${label}`}>
                          {label}
                        </option>
                      ))}
                    </MySelect>
                  );
                }

                throw new Error(`Type : ${type} not supported`);
              },
            )}
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
