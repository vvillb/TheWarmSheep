import React from 'react'
import {Navigate, Route,Routes} from 'react-router-dom'
import HomePage from '../App/pages/HomePage'
import AboutPage from '../App/pages/AboutPage'
import ContactPage from '../App/pages/ContactPage'

const AppRouter = () => {
  return (
    <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/*' element={<Navigate to='/'/>}/>
        <Route path='/About' element={<AboutPage/>}/>
        <Route path='/Contact' element={<ContactPage/>}/>
    </Routes>
  )
}

export default AppRouter
