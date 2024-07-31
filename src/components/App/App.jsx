import ContactForm from '../ContactForm/ContactForm'
import SearchBox from '../SearchBox/SearchBox'
import ContactList from '../ContactList/ContactList'
import css from './App.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { fetchContacts } from '../../redux/contactsOps'
import { selectError, selectLoading } from '../../redux/contactsSlice'
import { FadeLoader } from "react-spinners";

export default function App() {

  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const isError = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  } ,[dispatch])

  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <ContactForm  />
      <SearchBox />
      {isLoading && <FadeLoader color='gray' height={10}/>}
      {isError && <p className={css.error}>Oops! Something went wrong, please try again later.</p>}
      <ContactList />
    </div>

  )
}