import { useDispatch } from "react-redux";
import { editContact } from "../../redux/contacts/operations.js";
import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import css from './EditContactForm.module.css';

export default function EditContactForm({ id, name, number, onCancel }) {
  const ContactsSchema = Yup.object().shape({
    name: Yup.string()
      .trim()
      .min(3, "name must be at least 3 characters")
      .max(50, "you reached the max number of characters")
      .required("Required"),
    number: Yup.string()
      .trim()
      .min(3, "phone number must be at least 3 characters")
      .max(50, "you reached the max number of characters")
      .required("Required"),
  })

  const dispatch = useDispatch();

  const handleEditContact = (values) => {
    const {id, name, number} = values;
    dispatch(editContact({
      contactId: id,
      name,
      number
    }))
    onCancel();
  };

  return (
    <div className={css.editModal}>
      <Formik
        initialValues={{id, name, number}}
        validationSchema={ContactsSchema}
        onSubmit={handleEditContact}>
        <Form className={css.container} autoComplete="off">
          <div>
            <Field className={css.input} type="text" name="name" id="name"/>
            <ErrorMessage className={css.error} name="name" component="div"/>
          </div>
          <div>
            <Field className={css.input} type="text" name="number" id="number"/>
            <ErrorMessage className={css.error} name="number" component="div"/>
          </div>
          <div className={css.buttonContainer}>
            <button className={css.saveBtn} type="submit">Save</button>
            <button className={css.cancelBtn} onClick={onCancel}>Cancel</button>                      
          </div>     
        </Form>
      </Formik>
    </div>
  );
}