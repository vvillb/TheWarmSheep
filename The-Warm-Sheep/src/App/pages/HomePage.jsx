import React from 'react'
import AppLayout from '../layout/AppLayout'
import { Grid, Typography } from '@mui/material'
import HeroSection from './HeroSection'


const HomePage = () => {
  return (
    <React.Fragment >
    <AppLayout>
      <HeroSection/>
      <Typography variant='h1'>
            The Warm Sheep
        </Typography>
        <Typography variant='h3'>
             Handmade Knits
        </Typography>
      <Grid container spacing={0}
          direction="column"
          alignItems="center"
          justifyContent="center"
          sx={{minHeight:'50vh',backgroundColor:'secondary.main',margin:0,padding:10}}>
      </Grid>  
     
    </AppLayout>
    </React.Fragment>
  )
}

export default HomePage
