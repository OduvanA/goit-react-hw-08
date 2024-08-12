import { FaPhone } from "react-icons/fa6";
import { IoPerson } from "react-icons/io5";
import css from "./Contact.module.css"
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
import { useState } from "react";
import EditContactForm from "../EditContactForm/EditContactForm";


export default function Contact({ contact: { id, name, number } }) {
  const [isEditing, setIsEditing] = useState(false);
    const [deleteModal, setDeleteModal] = useState(false);
    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(deleteContact(id));
        setDeleteModal(false);
    };



    return(
        <div >
            {!isEditing ? (
                <div className={css.container}>
                    <div className={css.wrapper}>
                    <p className={css.icon}><IoPerson className={css.icon} size="14" />
                        {name}</p>
                    <p className={css.icon}><FaPhone className={css.icon} size="14" />
                        {number}</p>                         
                    </div>

                    <div className={css.btnWrapper}>
                        <button className={css.button} onClick={() => setIsEditing(true)}>Edit</button>
                        <button className={css.button} onClick={() => setDeleteModal(true)}>Delete</button>
                    </div>
                </div>
            ) : (
                <EditContactForm id={id} name={name} number={number} onCancel={() => setIsEditing(false)} />
            )}
            {deleteModal && (
                <div className={css.deleteModal} onClick={() => setDeleteModal(false)}>
                    <div className={css.containerModal}>
                        
                        <p className={css.text}>This contact will be deleted from your phonebook</p>
                        <div className={css.delete} onClick={handleDelete}>Delete Contact</div>
                        <div className={css.cancel} onClick={() => setDeleteModal(false)}>Cancel</div>
                    </div>
                </div>
            )}
        </div>
    )
}