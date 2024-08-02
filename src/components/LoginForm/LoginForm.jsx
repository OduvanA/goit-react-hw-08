import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/operations";
import { Field, Form, Formik } from "formik";
import css from './LoginForm.module.css'

export default function LoginForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(login(values))
    actions.resetForm();
  };

  return (
    <Formik initialValues={{
      name: '',
      password: '',
    }} onSubmit={handleSubmit}>
      <Form className={css.container} autoComplete="off"> 
        <label className={css.label}>
          Userame
          <Field className={css.input} type="text" name="name" />
        </label>
        <label className={css.label}>
          Password
          <Field className={css.input} type="password" name="password"/>
        </label>

      <button className={css.button} type="submit">Log in</button>
      </Form>
    </Formik>
  );
}
