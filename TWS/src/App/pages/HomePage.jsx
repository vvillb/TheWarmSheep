import React from 'react'
import AppLayout from '../layout/AppLayout'
import { Box, Grid, Typography ,Card,CardMedia,Container} from '@mui/material'
import knits from '../../assets/images/img3.jpg'
import beach from '../../assets/images/playaAsturias.jpg'
import her from '../../assets/images/her.jpg'

import { Image } from '@mui/icons-material'
import HeroSection from './HeroSection'


const HomePage = () => {
  return (
    <AppLayout>
    <HeroSection/>
    
    <Grid container >
          
      <Grid item xs={12} sm={6}  sx={{ justifyContent:'center', alignContent:'center' ,display:'flex', padding:'5%'}}>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            image={knits}
            alt="An image"
            sx={{  }}
          />
        </Card>
      </Grid>

      <Grid item xs={12} sm={6}  sx={{ justifyContent:'center', alignContent:'center' ,display:'flex', padding:'5%', flexWrap:'wrap',}}>
      <Typography variant='h3' gutterBottom>La mejor calidad</Typography>         
      <Typography paragraph >
          Primer texto. Eiusmod aute officia sit enim cupidatat proident nulla. Commodo esse amet labore Lorem voluptate et exercitation. Dolore eiusmod in cillum amet elit sit. Tempor sunt proident elit anim aliquip deserunt nulla nulla commodo id elit.
        </Typography>
      </Grid>

    </Grid>

    <Grid container   direction="row-reverse">
    <Grid item xs={12} sm={6}  sx={{ justifyContent:'center', alignContent:'center' ,display:'flex', padding:'5%'}}>        <Card sx={{ display: 'flex', maxWidth:345}}>
          <CardMedia
            component="img"
            image={her}
            alt="An image"
            sx={{ }}
          />
        </Card>
        </Grid>
        <Grid item xs={12} sm={6}  sx={{ justifyContent:'center', alignContent:'center' ,display:'flex', padding:'5%',flexWrap:'wrap'}}>
        <Typography variant='h3' gutterBottom>Las manos detrás de todo</Typography>        
        <Typography paragraph>
          Segundo texto. Quis ullamco fugiat non enim cupidatat cillum nisi Lorem. Nostrud consequat pariatur cillum veniam dolore non non cupidatat nisi minim sunt in aliqua amet. Magna ea cupidatat adipisicing consequat ipsum qui dolor. Consequat fugiat aliquip sint nulla irure est nisi.
        </Typography>
      </Grid>
      <Grid container>
      <Grid item xs={12} sm={6}  sx={{ justifyContent:'center', alignContent:'center' ,display:'flex', padding:'5%'}}>        <Card sx={{ display: 'flex', maxWidth: 345 }}>
          <CardMedia
            component="img"
            image={beach}
            alt="An image"
            sx={{ }}
          />
        </Card>
        </Grid>
        <Grid item xs={12} sm={6}  sx={{ justifyContent:'center', alignContent:'center' ,display:'flex', padding:'5%',flexWrap:'wrap'}}>
        <Typography variant='h3' gutterBottom>Lugares que inspiran</Typography> 
        <Typography paragraph>
          Tercer texto Minim sint laboris Lorem Lorem amet voluptate ullamco aliqua occaecat. Et in sint laborum ea. Reprehenderit eu deserunt enim quis ex elit minim eiusmod amet eu cupidatat. Ex anim irure velit deserunt exercitation in officia aute minim. Adipisicing aliqua adipisicing enim dolor anim dolor Lorem ad qui. Exercitation do magna enim irure pariatur et incididunt aliqua. Consequat nostrud eiusmod minim tempor nisi excepteur ex.
        </Typography>
      </Grid>
      </Grid>
    </Grid>
   
    </AppLayout>

  )
}

export default HomePage
