
import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from '../../redux/contacts/operations';
import { selectError, selectLoading } from '../../redux/contacts/selectors';
import ContactForm from '../../components/ContactForm/ContactForm';
import SearchBox from '../../components/SearchBox/SearchBox';
import ContactList from '../../components/ContactList/ContactList';
import { BarLoader } from "react-spinners";
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
      <h1 className={css.title}>MyContacts App</h1>
      <p className={css.text}>create your phonebook</p>
      <ContactForm  />
      <SearchBox />
      {isLoading && <div className={css.loader}><BarLoader color="gray" width={200}/></div> }
      {isError && <p className={css.error}>Oops! Something went wrong, please try again later.</p>}
      <ContactList />
    </div >
  )
}