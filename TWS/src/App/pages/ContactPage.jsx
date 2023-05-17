import { useEffect } from 'react'
import AppLayout from '../layout/AppLayout'
import { Card, CardMedia, Grid, Typography } from '@mui/material'
import { useDispatch } from 'react-redux'
import { addBreadcrumbs, clearBreadcrumbs } from '../../store/slices/breadcrumbSlice'
import PhotoRightTextLeft from '../components/PhotoRightTextLeft'
import LauNY from '../../assets/images/products/LauNY.png'
import Footer from '../components/Footer'
import PhotoLeftTextRight from '../components/PhotoLeftTextRight'
import lana from '../../assets/images/products/lanaBlanca.jpg'
import SlideIn from '../components/functions/SlideIn'



const ContactPage = () => {
  useEffect(()=>{
    window.scrollTo(0,0);
  
  },[])

  const dispatch = useDispatch();

  //limpiar la navegación si es una página de raíz:
  dispatch(clearBreadcrumbs());
  //introducir un elemento
  const label='/ Contacto';
  dispatch(addBreadcrumbs({label}))


  return (
    <AppLayout>
      <Grid continer>
      

      

        <Grid item>
        <PhotoRightTextLeft image={LauNY}  titulo="Contacto" >
        Sigue a The Warm Sheep en instagram para ver más creaciones, paisajes e inspiración.
      </PhotoRightTextLeft>
      <PhotoLeftTextRight image={lana} titulo='¿Tienes algo en mente?'>
        Habla con Laura para hacerlo realidad! No dudes en enviar un mensaje directo para empezar.
      </PhotoLeftTextRight>
        </Grid>
        <Grid item xs={12} sm={6}  sx={{  justifyContent:'center', alignContent:'center' ,display:'flex', padding:'5%'}}>
       
       <Card sx={{  backgroundColor:'transparent'}}>
         <CardMedia
           component="iframe"
           title='instagram'           
           src='https://instagram.com/thewarmsheep_'
           sx={{ height: '65vh', width: '80vw' }}
         />
        
       </Card>
      
     </Grid>
       </Grid>
       <Footer/>
    </AppLayout>
  )
}

export default ContactPage
