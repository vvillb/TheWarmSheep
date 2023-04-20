import React from 'react'
import AppTheme from './theme/AppTheme'
import AppRouter from './router/AppRouter'
import './index.css'
import { BrowserRouter } from 'react-router-dom'


const App = () => {
  return (
    <>
    <BrowserRouter>
      <AppTheme>
        <AppRouter/>
      </AppTheme>
    </BrowserRouter>
    </>
    
  )
}

export default App
