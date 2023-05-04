import { useEffect } from 'react'
import AppLayout from '../layout/AppLayout'
import Footer from '../components/Footer'
import knits from '../../assets/images/img3.jpg'
import PhotoLeftTextRight from '../components/PhotoLeftTextRight'
import PhotoRightTextLeft from '../components/PhotoRightTextLeft'
import video1 from '../../assets/videos/paisajeChapona.mp4'
import { Card, CardMedia, Grid, Typography } from '@mui/material'
import SlideIn from '../components/functions/SlideIn'



const AboutPage = () => {
  useEffect(()=>{
    window.scrollTo(0,0);
  
  },[])
  return (
    <AppLayout>


<Grid container 
    >
          
      <Grid item xs={12} sm={6}  sx={{  backgroundColor:'background.main', justifyContent:'center', alignContent:'center' ,display:'flex', padding:'5%'}}>
       
        <Card sx={{ maxWidth: 345 , backgroundColor:'transparent'}}>
          <CardMedia
            component="video"
            image={video1}
            alt="An image"
            autoPlay
            loop
            muted
            
            sx={{autoPlay:'true',
              loop:'true',
              muted:'true'  }}
          />
        </Card>
       
      </Grid>
      
      <Grid item xs={12} sm={6}  sx={{  justifyContent:'center', alignContent:'center' ,display:'flex', padding:'5%', flexWrap:'wrap',}}>
      <SlideIn>Rincones</SlideIn>     
       <Typography paragraph >
        Magna aute labore ea veniam officia adipisicing esse. Officia eu adipisicing fugiat duis non aliquip dolore Lorem culpa laboris proident. Sunt reprehenderit enim dolore laboris proident id exercitation. Nostrud duis exercitation qui occaecat. Ad ea aliquip sint excepteur consequat laborum cillum ullamco sit laboris ad veniam ex quis. Labore exercitation anim id et ad deserunt non aliquip irure.
        </Typography>
      </Grid>
      
    </Grid>
   
      <PhotoRightTextLeft image={knits}  titulo="about" >
        Voluptate velit pariatur sint quis irure nulla officia elit ea dolore cupidatat labore. Irure labore eu id esse. Amet amet minim ut laboris.
      </PhotoRightTextLeft>
      <PhotoLeftTextRight image={knits} direction="row" titulo="about" >
        Voluptate velit pariatur sint quis irure nulla officia elit ea dolore cupidatat labore. Irure labore eu id esse. Amet amet minim ut laboris.
      </PhotoLeftTextRight>
      <PhotoRightTextLeft image={knits}  titulo="about" >
        Voluptate velit pariatur sint quis irure nulla officia elit ea dolore cupidatat labore. Irure labore eu id esse. Amet amet minim ut laboris.
      </PhotoRightTextLeft>
      <Footer/>
    </AppLayout>
  )
}

export default AboutPage
