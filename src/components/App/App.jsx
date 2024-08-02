
import { Routes, Route } from 'react-router'
import { lazy, Suspense } from 'react'
// import { FadeLoader } from "react-spinners";

import Layout from '../Layout/Layout';

const HomePage = lazy(() => import('../../pages/HomePage/HomePage'));
const RegistrationPage = lazy(() => import('../../pages/RegistrationPage/RegistrationPage'));
const LoginPage = lazy(() => import('../../pages/LoginPage/LoginPage'));
const ContactsPage = lazy(() => import('../../pages/ContactsPage/ContactsPage'));

export default function App() {



  return (

    <Layout>
      <Suspense fallback={<div>Loading....</div>}>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/register' element={<RegistrationPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/contacts' element={<ContactsPage />} />
        </Routes>
      </Suspense>
    </Layout>
  )
}