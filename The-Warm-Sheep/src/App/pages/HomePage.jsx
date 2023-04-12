import React from 'react'
import AppLayout from '../layout/AppLayout'
import { Box, Grid, Typography } from '@mui/material'
import HeroSection from './HeroSection'
import { Image } from '@mui/icons-material'


const HomePage = () => {
  return (
    <React.Fragment >
    <AppLayout>
      <Box >
      <Grid container spacing={0}
          direction="column"
          alignItems="center"
          justifyContent="center"
          sx={{minHeight:'100vh',backgroundColor:'secondary.main'}}
          
          > 
          <Typography variant='h1' sx={{ textAlign: 'left' }}>
              The Warm Sheep
          </Typography>
          <Typography variant='h3'>
              Handmade Knits
          </Typography>
          <HeroSection/>
      
        
          <Typography variant='body1'>
            Minim minim adipisicing dolore ut deserunt nostrud. Ut enim nostrud et consectetur deserunt commodo mollit duis cillum aliqua ullamco anim. Amet eiusmod ex id culpa do eu deserunt anim occaecat esse. Qui ex cillum culpa enim laboris duis. Laborum non ullamco proident culpa sit duis. Mollit fugiat ex commodo duis sunt ea culpa.
          Excepteur sit nulla irure consequat esse incididunt dolor proident voluptate reprehenderit labore quis et tempor. Minim do non amet dolore quis nulla magna dolor dolor do adipisicing fugiat velit aliquip. Labore cupidatat mollit Lorem consectetur elit sunt do eu veniam tempor cupidatat Lorem in proident. Consectetur incididunt esse minim duis Lorem voluptate est amet. Lorem sunt ut aute sit amet duis sit esse deserunt quis ea non sint.
          Lorem ex ad non sint. Cupidatat aute est pariatur commodo mollit. Proident do irure et veniam excepteur ut consectetur aliqua ut non. Excepteur nisi consectetur nulla ullamco deserunt magna mollit aliqua ullamco ex elit tempor et non.
          Pariatur ex laboris dolore aliqua laboris nisi nostrud velit aliqua ipsum magna ad. Aliquip deserunt fugiat eu voluptate est aliquip duis ea anim id pariatur irure cillum. Aliquip velit nisi id est voluptate et aute laborum consequat eiusmod sunt dolor. Esse sit reprehenderit est sint sunt.
         aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
          </Typography>
        </Grid>  
        </Box>
     
     
    </AppLayout>
    </React.Fragment>
  )
}

export default HomePage
