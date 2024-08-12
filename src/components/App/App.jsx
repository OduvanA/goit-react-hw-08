
import { Routes, Route } from 'react-router';
import { lazy, Suspense, useEffect } from 'react';
import { BarLoader } from 'react-spinners'
import Layout from '../Layout/Layout';
import { useDispatch, useSelector } from 'react-redux';
import { refreshUser } from '../../redux/auth/operations';
import { selectIsRefreshing } from '../../redux/auth/selectors';
import RestrictedRoute from '../RestrictedRoute';
import PrivatedRoute from '../PrivateRoute';
import css from './App.module.css'

const HomePage = lazy(() => import('../../pages/HomePage/HomePage'));
const RegistrationPage = lazy(() => import('../../pages/RegistrationPage/RegistrationPage'));
const LoginPage = lazy(() => import('../../pages/LoginPage/LoginPage'));
const ContactsPage = lazy(() => import('../../pages/ContactsPage/ContactsPage'));

export default function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser())
  }, [dispatch])

  return isRefreshing ? (
      <div className={css.loader}><BarLoader color="gray" width={200}/></div>
  ) : (
    <Layout>
      <Suspense fallback={<div>Loading....</div>}>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/register' element={
            <RestrictedRoute component={<RegistrationPage />} redirectTo='/contacts' />} />
          <Route path='/login' element={
            <RestrictedRoute component={<LoginPage />} redirectTo='/contacts' />} />
          <Route path='/contacts' element={
            <PrivatedRoute component={<ContactsPage />} redirectTo='/login' />} />
        </Routes>
      </Suspense>
    </Layout>
  )
}