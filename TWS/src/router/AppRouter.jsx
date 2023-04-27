import React from 'react'
import {Navigate, Route,Routes} from 'react-router-dom'
import HomePage from '../App/pages/HomePage'
import AboutPage from '../App/pages/AboutPage'
import ContactPage from '../App/pages/ContactPage'
import ProductPage from '../App/pages/ProductPAge'


const AppRouter = () => {
  return (
    <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/*' element={<Navigate to='/'/>}/>
        <Route path='/About' element={<AboutPage/>}/>
        <Route path='/Contact' element={<ContactPage/>}/>
        <Route path='/Products' element={<ProductPage/>}/>
    </Routes>
  )
}

export default AppRouter
