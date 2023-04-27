import { Card, CardMedia, Grid, Typography } from '@mui/material';
import React from 'react'
import SlideIn from './functions/SlideIn';

const PhotoLeftTextRight = (props) => {
  const { children,image,titulo} = props;
  return (
    <>
   
    <Grid container 
    >
          
      <Grid item xs={12} sm={6}  sx={{  backgroundColor:'background.main', justifyContent:'center', alignContent:'center' ,display:'flex', padding:'5%'}}>
       
        <Card sx={{ maxWidth: 345 , backgroundColor:'transparent'}}>
          <CardMedia
            component="img"
            image={image}
            alt="An image"
            sx={{  }}
          />
        </Card>
       
      </Grid>

     
      <Grid item xs={12} sm={6}  sx={{  justifyContent:'center', alignContent:'center' ,display:'flex', padding:'5%', flexWrap:'wrap',}}>
      <SlideIn>{titulo}</SlideIn>     
       <Typography paragraph >
        {children}
        </Typography>
      </Grid>
      
    </Grid>

      

    </>
  )}
 
  
export default PhotoLeftTextRight
