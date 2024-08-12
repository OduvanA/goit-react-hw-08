import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/operations";
import { Field, Form, Formik, ErrorMessage } from "formik";
import * as Yup from 'yup';
import css from './LoginForm.module.css';

const validationSchema = Yup.object({
  email: Yup.string().email('Invalid email address').required('Required'),
  password: Yup.string().min(7, 'Password must be at least 7 characters').required('Required'),
});

export default function LoginForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(login(values))
    actions.resetForm();
  };

  return (
    <Formik initialValues={{
      email: '',
      password: '',
    }} validationSchema={validationSchema}
      onSubmit={handleSubmit}>
      <Form className={css.container} autoComplete="off"> 
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

      <button className={css.button} type="submit">Log in</button>
      </Form>
    </Formik>
  );
}
