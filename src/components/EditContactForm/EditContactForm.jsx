import { useDispatch } from "react-redux";
import { editContact } from "../../redux/contacts/operations.js";
import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';

const EditContactForm = ({ id, name, number, onCancel }) => {
    const dispatch = useDispatch();

    return (
        <div>

            <Formik
                initialValues={{id, name, number}}
                validationSchema={Yup.object({
                    name: Yup.string().required('Required').min(3, 'Мінімальна кількість символів - 3').max(50, 'Максимальна кількість символів - 50'),
                    number: Yup.string().required('Required').min(3, 'Мінімальна кількість символів - 3').max(50, 'Максимальна кількість символів - 50'),
                })}
                onSubmit={(values) => {
                    const {id, name, number} = values;
                    dispatch(editContact({
                        id,
                        name,
                        number
                    }))
                    onCancel();
                }}
            >
                <Form>
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