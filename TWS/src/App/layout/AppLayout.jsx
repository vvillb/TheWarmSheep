import React from 'react'
import NavBar from '../components/NavBar'
import { Box, Toolbar } from '@mui/material'

const AppLayout = ({ children }) => {
  return (
    <Box sx={{ display: 'flex' }}>
        <NavBar/>

        <Box
            component='main'
            sx={{ flexGrow: 1 }}
            
        >
          <Toolbar/>
        {children}
        </Box>
    </Box>
  )
}

export default AppLayout
