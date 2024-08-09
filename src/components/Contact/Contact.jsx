// import { FaPhone } from "react-icons/fa6";
// import { IoPerson } from "react-icons/io5";
import css from "./Contact.module.css"
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
import { useState } from "react";
import EditContactForm from "../EditContactForm/EditContactForm";


export default function Contact({ id, name, number }) {
  const [isEditing, setIsEditing] = useState(false);
    const [deleteModal, setDeleteModal] = useState(false);
    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(deleteContact(id));
        setDeleteModal(false);
    };

    const handleClickModal = (e) => {
        e.stopPropagation();
    };

    return(
        <div className={css.container}>
            {!isEditing ? (
                <div >
                    <div >
                        <img src="https://cdn-icons-png.flaticon.com/512/1077/1077114.png" alt={name} />
                        <p>{name}</p>
                    </div>
                    <div >
                        <img src="https://uxwing.com/wp-content/themes/uxwing/download/communication-chat-call/phone-icon.png" alt={number} />
                        <p>{number}</p>
                    </div>
                    <div >
                        <button onClick={() => setIsEditing(true)}>Edit</button>
                        <button onClick={() => setDeleteModal(true)}>Delete</button>
                    </div>
                </div>
            ) : (
                <EditContactForm id={id} name={name} number={number} onCancel={() => setIsEditing(false)} />
            )}
            {deleteModal && (
                <div  onClick={() => setDeleteModal(false)}>
                    <div onClick={handleClickModal}>
                        <p>Are you sure you want to delete this contact?</p>
                        <div>
                            <button onClick={handleDelete}>Yes</button>
                            <button onClick={() => setDeleteModal(false)}>No</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}