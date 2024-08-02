import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import { Field, Form, Formik } from "formik";
import css from './RegistrationForm.module.css'

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
    }} onSubmit={handleSubmit}>
      <Form className={css.container} autoComplete="off"> 
        <label className={css.label}>
          Userame
          <Field className={css.input} type="text" name="name" />
        </label>
        <label className={css.label}>
          Email
          <Field className={css.input} type="email" name="email" />
        </label>
        <label className={css.label}>
          Password
          <Field className={css.input} type="password" name="password"/>
        </label>

      <button className={css.button} type="submit">Register</button>
      </Form>
    </Formik>
  );
}
