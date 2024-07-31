import { FaPhone } from "react-icons/fa6";
import { IoPerson } from "react-icons/io5";
import css from "./Contact.module.css"
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";


export default function Contact({contact: {id, name, number}}) {
  const dispatch = useDispatch();

  return (
    <div className={css.container}>
      <div className={css.wrapper}>
        <p><IoPerson className={css.icon} size="14" />{name}</p>
        <p><FaPhone className={css.icon} size="14" />{number}</p> 
      </div>
      
      <button className={css.button}
        type='button'
        onClick={() => dispatch(deleteContact(id))
      } >Delete</button>
    </div>
  )

} 