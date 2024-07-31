import { selectFilteredContacts } from "../../redux/contactsSlice";
import Contact from "../Contact/Contact"
import css from "./ContactList.module.css"
import { useSelector } from "react-redux";


export default function ContactList() {
  const visibleContacts = useSelector(selectFilteredContacts);
  
  return (
    <ul className={css.container}>
      {visibleContacts.map((contact) => (
        <li key={contact.id}>
          <Contact contact={contact} />
        </li>
      ))}
    </ul> 
  );
} 