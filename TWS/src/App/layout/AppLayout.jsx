import React from 'react'
import NavBar from '../components/NavBar'
import { Box, Toolbar } from '@mui/material'
import Breadcrumbs from '../components/Breadcrumbs'

const AppLayout = ({ children }) => {
  return (
    <Box sx={{ display: 'flex' }}>
        <NavBar/>
        <Breadcrumbs/>
        <Box
            component='main'
            sx={{ flexGrow: 1 , maxWidth:'100vw', justifyContent:'center'}}
            
        >
          <Toolbar/>
        {children}
        
        </Box>
   
    </Box>
  )
}

export default AppLayout
