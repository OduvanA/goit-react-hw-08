import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import { Field, Form, Formik, ErrorMessage } from "formik";
import * as Yup from 'yup';
import css from './RegistrationForm.module.css';

const validationSchema = Yup.object({
  name: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email address').required('Required'),
  password: Yup.string().min(7, 'Password must be at least 7 characters').required('Required'),
});

export default function RegistrationForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(register(values))
    actions.resetForm();
  };

  return (
    <Formik initialValues={{
      name: '',
      email: '',
      password: '',
    }} validationSchema={validationSchema}
      onSubmit={handleSubmit}>
      <Form className={css.container} autoComplete="off"> 
        <label className={css.label}>
          Userame
          <Field className={css.input} type="text" name="name" />
          <ErrorMessage name="name" component="div" className={css.error} />
        </label>
        <label className={css.label}>
          Email
          <Field className={css.input} type="email" name="email" />
          <ErrorMessage name="email" component="div" className={css.error} />
        </label>
        <label className={css.label}>
          Password
          <Field className={css.input} type="password" name="password" />
          <ErrorMessage name="password" component="div" className={css.error} />
        </label>

      <button className={css.button} type="submit">Register</button>
      </Form>
    </Formik>
  );
}
