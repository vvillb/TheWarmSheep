import { useEffect } from 'react'
import AppLayout from '../layout/AppLayout'
import { Grid, Typography ,Card,CardMedia} from '@mui/material'
import videoSunset from '../../assets/videos/PaisajeSunset1.mp4'
import HeroSection from './HeroSection'
import Footer from '../components/Footer'
import SlideIn from '../components/functions/SlideIn'
import SlideInRight from '../components/functions/SlideInRight'
import lanas from '../../assets/images/products/lanaBlanca2.jpg'
import Lau from '../../assets/videos/paisajeChapona.mp4'
import { Link } from 'react-router-dom'


const HomePage = () => {
  useEffect(()=>{
    window.scrollTo(0,0);
  
  },[])
  return (
    <AppLayout>
    <HeroSection/>
    
    <Grid container 
    sx={{maxWidth:'100vw'}}
    >
          
      <Grid item xs={12} sm={6}  sx={{  backgroundColor:'background.main', justifyContent:'center', alignContent:'center' ,display:'flex', padding:'5%',maxWidth:'100vw'}}>
       
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
       En The Warm Sheep queremos que tengas una experiencia única y personalizada, por eso todas nuestras creaciones están hechas a
        mano con las mejores lanas de alta calidad. Y si quieres hacer un pedido, puedes escoger tú mismo el color y el tipo de lana 
        que más te guste. Queremos que cada prenda sea única y especial para ti, porque sabemos que las cosas hechas con cariño son las
         que más valor tienen. Así que anímate a navegar por nuestra página y descubre todo lo que podemos ofrecerte.
        </Typography>
      </Grid>
      
    </Grid>

    <Grid container   direction="row-reverse">
    <Grid item xs={12} sm={6}  sx={{  backgroundColor:'background.main', justifyContent:'center', alignContent:'center' ,display:'flex', padding:'5%'}}>        
    
   
    <Card sx={{ display: 'flex', maxWidth:345}}>
          <CardMedia
            component="video"
            image={Lau}
            alt="An image"
            autoPlay
            loop
            muted
          />
        </Card>
       
        </Grid>
        <Grid item xs={12} sm={6}  sx={{ justifyContent:'center', alignContent:'center' ,display:'flex', padding:'5%',flexWrap:'wrap'}}>
        <SlideInRight>Las manos detrás de todo</SlideInRight>     
        <Typography paragraph>
        Laura es una chica asturiana de corazón cálido, a la que siempre le ha gustado tejer con aguja y ganchillo. 
        Su pasión por las creaciones de lana y el cariño que pone en cada una de ellas se refleja en todas las prendas 
        que crea. Si quieres saber más sobre su trabajo y hablar directamente con ella para hacer un pedido personalizado,
         no dudes en visitar la <Link to='/Contact'>página de contacto</Link> . Laura estará encantada de compartir contigo su amor por la lana y 
         ayudarte a crear la prenda de tus sueños.
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
        En la sección <Link to='/About'>Rincones</Link> encontrarás algunos de los lugares favoritos de Laura, creadora de The Warm Sheep.
         Si eres un amante de la naturaleza y te gusta explorar, esta sección es para ti. Laura te invita a descubrir algunos sitios
          especiales y hermosos de Asturias que han sido una gran fuente de inspiración para ella. ¡No te lo pierdas!
        </Typography>
      </Grid>
      </Grid>
    </Grid>
  
    <Footer/>
    </AppLayout>

  )
}

export default HomePage
