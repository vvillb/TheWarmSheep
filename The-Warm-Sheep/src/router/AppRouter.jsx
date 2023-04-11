import React from 'react'
import {Navigate, Route,Routes} from 'react-router-dom'
import HomePage from '../App/pages/HomePage'

const AppRouter = () => {
  return (
    <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/*' element={<Navigate to='/'/>}/>
    </Routes>
  )
}

export default AppRouter
