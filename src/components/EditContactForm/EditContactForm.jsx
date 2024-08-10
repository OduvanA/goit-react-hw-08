import { useDispatch } from "react-redux";
import { editContact } from "../../redux/contacts/operations.js";
import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';

const EditContactForm = ({ id, name, number, onCancel }) => {

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
        const updatedData = { name: values.name, number: values.number };
        dispatch(editContact({ contactsId: id, updatedData }));
        onCancel();
    };


    return (
        <div>

            <Formik
                initialValues={{id, name, number}}
                validationSchema={ContactsSchema}
                onSubmit={handleEditContact}
            >
                <Form autoComplete="off">
                    <div>
                        <Field type="name" name="name" id="name"/>
                        <ErrorMessage name="name" component="div"/>
                    </div>
                    <div>
                        <Field type="number" name="number" id="number"/>
                        <ErrorMessage name="number" component="div"/>
                    </div>

                    <button type="submit">Save</button>
                    <button onClick={onCancel}>Cancel</button>
                </Form>
            </Formik>
        </div>
    );
};

export default EditContactForm;