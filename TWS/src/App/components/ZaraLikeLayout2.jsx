import { Card, CardMedia, Container, Grid, Typography } from '@mui/material'
import React from 'react'

const ZaraLikeLayout2 = (props) => {
    const {texto1,texto2,texto3,texto4,foto1,foto2,foto3,foto4}=props;
  return (
    <Container disableGutters>
    <Grid container 
    rowSpacing={2} spacing={2}
    justifyContent="center"
    sx={{maxWidth:'100vw', display:'flex', padding:'2%',marginLeft:'-6.85',marginRight:0
    }}>
    <Grid item xs={6} sm={8} justifyContent="center" sx={{ padding:'2%'}}>
    <Card sx={{  backgroundColor:'transparent',display:'contents',alignItems:'center', maxHeight:'100%',margin: 'auto',minHeight:'100%',padding:'2%'}}>
      <CardMedia
        component="img"
        loading="lazy" 
        image={foto1}
        alt="An image"
        sx={{  objectFit:'cover' ,
        objectPosition: 'center',
        height: '100%',
        }}
      />
    </Card>
     <Typography gutterBottom sx={{backgroundColor:'transparent',display:'block',color:'#c4d5c4'}}>
            {texto1}
    </Typography>
        
    </Grid>
    <Grid item xs={6} sm={4} justifyContent="center" sx={{ padding:'2%'}}>
    <Card sx={{  backgroundColor:'transparent',display:'contents',alignItems:'center', maxHeight:'100%',margin: 'auto',minHeight:'100%',padding:'2%'}}>
      <CardMedia
        component="img"
        loading="lazy" 
        image={foto2}
        alt="An image"
        sx={{objectFit:'cover' ,
        objectPosition: 'center',
        height: '100%',
         }}
      />
    </Card>
     <Typography gutterBottom sx={{backgroundColor:'transparent',display:'block',color:'#c4d5c4'}}>
            {texto2}
    </Typography>

    </Grid>
    <Grid item xs={12} sm={4} justifyContent="center" sx={{ padding:'2%'}}>
    <Card sx={{  backgroundColor:'transparent',display:'contents',alignItems:'center',maxHeight:'100%',margin: 'auto',minHeight:'100%',padding:'2%'}}>
      <CardMedia
        component="img"
        loading="lazy" 
        image={foto3}
        alt="An image"
        sx={{objectFit:'cover' ,
        objectPosition: 'center',
        height: '100%',
         }}
      />
    </Card>
     <Typography gutterBottom sx={{backgroundColor:'transparent',display:'block',color:'#c4d5c4'}}>
            {texto3}
    </Typography>
    </Grid>
    <Grid item xs={12} sm={8} justifyContent="center" sx={{ padding:'2%'}}>
    <Card sx={{   backgroundColor:'transparent',display:'contents',alignItems:'center', maxHeight:'100%',margin: 'auto',minHeight:'100%',padding:'2%'}}>
      <CardMedia
        component="img"
        image={foto4}
        alt="An image"
        sx={{ objectFit:'cover' ,
        objectPosition: 'center',
        height: '100%',
         }}
      />
    </Card>
    <Typography gutterBottom sx={{backgroundColor:'transparent',display:'block',color:'#c4d5c4'}}>
            {texto4}
    </Typography>
    
    </Grid>
</Grid>
</Container>
  )
}

export default ZaraLikeLayout2
