import React, { useEffect } from 'react'
import AppLayout from '../layout/AppLayout'
import { Box, Grid, Typography ,Card,CardMedia,Container} from '@mui/material'
import knits from '../../assets/images/img3.jpg'
import beach from '../../assets/images/playaAsturias.jpg'
import her from '../../assets/images/her.jpg'
import videoSunset from '../../assets/videos/PaisajeSunset1.mp4'
import { Image } from '@mui/icons-material'
import HeroSection from './HeroSection'
import Footer from '../components/Footer'
import FadeIn from '../components/functions/FadeIn'
import SlideIn from '../components/functions/SlideIn'
import SlideInRight from '../components/functions/SlideInRight'
import lanas from '../../assets/images/products/lanaBlanca2.jpg'


const HomePage = () => {
  useEffect(()=>{
    window.scrollTo(0,0);
  
  },[])
  return (
    <AppLayout>
    <HeroSection/>
    
    <Grid container 
    >
          
      <Grid item xs={12} sm={6}  sx={{  backgroundColor:'background.main', justifyContent:'center', alignContent:'center' ,display:'flex', padding:'5%'}}>
       
        <Card sx={{ maxWidth: 345 , backgroundColor:'transparent'}}>
          <CardMedia
            component="img"
            image={lanas}
            alt="An image"
            sx={{ }}
          />
        </Card>
       
      </Grid>

     
      <Grid item xs={12} sm={6}  sx={{  justifyContent:'center', alignContent:'center' ,display:'flex', padding:'5%', flexWrap:'wrap',}}>
      <SlideIn>La mejor calidad</SlideIn>     
       <Typography paragraph >
          Primer texto. Eiusmod aute officia sit enim cupidatat proident nulla. Commodo esse amet labore Lorem voluptate et exercitation. Dolore eiusmod in cillum amet elit sit. Tempor sunt proident elit anim aliquip deserunt nulla nulla commodo id elit.
        </Typography>
      </Grid>
      
    </Grid>

    <Grid container   direction="row-reverse">
    <Grid item xs={12} sm={6}  sx={{  backgroundColor:'background.main', justifyContent:'center', alignContent:'center' ,display:'flex', padding:'5%'}}>        
    
   
    <Card sx={{ display: 'flex', maxWidth:345}}>
          <CardMedia
            component="img"
            image={her}
            alt="An image"
            sx={{ }}
          />
        </Card>
       
        </Grid>
        <Grid item xs={12} sm={6}  sx={{ justifyContent:'center', alignContent:'center' ,display:'flex', padding:'5%',flexWrap:'wrap'}}>
        <SlideInRight>Las manos detrás de todo</SlideInRight>     
        <Typography paragraph>
          Segundo texto. Quis ullamco fugiat non enim cupidatat cillum nisi Lorem. Nostrud consequat pariatur cillum veniam dolore non non cupidatat nisi minim sunt in aliqua amet. Magna ea cupidatat adipisicing consequat ipsum qui dolor. Consequat fugiat aliquip sint nulla irure est nisi.
        </Typography>
      </Grid>
      <Grid container>
      <Grid item xs={12} sm={6}  sx={{  backgroundColor:'background.main', justifyContent:'center', alignContent:'center' ,display:'flex', padding:'5%'}}>        
      
     
      <Card sx={{ display: 'flex', maxWidth: 345 }}>
          <CardMedia
            component="video"
            image={videoSunset}
            alt="An image"
            autoPlay
            loop
            muted
            
          />
        </Card>
       
        </Grid>
        <Grid item xs={12} sm={6}  sx={{ justifyContent:'center', alignContent:'center' ,display:'flex', padding:'5%',flexWrap:'wrap'}}>
        <SlideIn>Lugares que inspiran</SlideIn> 
        <Typography paragraph>
          Tercer texto Minim sint laboris Lorem Lorem amet voluptate ullamco aliqua occaecat. Et in sint laborum ea. Reprehenderit eu deserunt enim quis ex elit minim eiusmod amet eu cupidatat. Ex anim irure velit deserunt exercitation in officia aute minim. Adipisicing aliqua adipisicing enim dolor anim dolor Lorem ad qui. Exercitation do magna enim irure pariatur et incididunt aliqua. Consequat nostrud eiusmod minim tempor nisi excepteur ex.
        </Typography>
      </Grid>
      </Grid>
    </Grid>
  
    <Footer/>
    </AppLayout>

  )
}

export default HomePage
