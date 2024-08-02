
import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from '../../redux/contacts/operations';
import { selectError, selectLoading } from '../../redux/contacts/selectors';
import ContactForm from '../../components/ContactForm/ContactForm';
import SearchBox from '../../components/SearchBox/SearchBox';
import ContactList from '../../components/ContactList/ContactList';
import { FadeLoader } from "react-spinners";
import css from './ContactsPage.module.css'

export default function ContactsPage() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const isError = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch])
  

  return (
  <div className={css.container}>
      <h1>Phonebook</h1>
      <ContactForm  />
      <SearchBox />
      {isLoading && <FadeLoader color='gray' height={10}/>}
      {isError && <p className={css.error}>Oops! Something went wrong, please try again later.</p>}
      <ContactList />
    </div >
  )
}