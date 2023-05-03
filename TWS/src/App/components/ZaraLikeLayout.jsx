import { Card, CardMedia, Container, Grid, Typography } from '@mui/material'
import React from 'react'

const ZaraLikeLayout = (props) => {
    const {texto1,texto2,texto3,foto1,foto2,foto3,fotoGrande}=props;

  return (
    <Container disableGutters>
    <Grid container 
    rowSpacing={2} spacing={2}
    justifyContent="center"
    
    sx={{maxWidth:'100vw', display:'flex', padding:'2%',marginLeft:'-6.85',marginRight:0,justifyContent:'center'}}>
        <Grid justifyContent="center" item xs={6} sm={4} sx={{ padding:'2%'}}>
        <Card sx={{ backgroundColor:'transparent',display:'contents',alignItems:'center', maxHeight:'100%',margin: 'auto',minHeight:'100%',padding:'2%'}}>
          <CardMedia
            component="img"
            image={foto1}
            alt="An image"
            sx={{ }}
          />
        </Card >
         <Typography gutterBottom sx={{backgroundColor:'transparent',display:'block',color:'#c4d5c4'}}>
                {texto1}
        </Typography>
            
        </Grid>
        <Grid item xs={6} sm={4} sx={{ padding:'2%'}}>
        <Card sx={{  backgroundColor:'transparent',display:'contents',alignItems:'center', maxHeight:'100%',margin: 'auto',minHeight:'100%',padding:'2%'}}>
          <CardMedia
            component="img"
            image={foto2}
            alt="An image"
            sx={{  }}
          />
        </Card>
         <Typography gutterBottom sx={{backgroundColor:'transparent',display:'block',color:'#c4d5c4'}}>
                {texto2}
        </Typography>

        </Grid>
        <Grid item xs={6} sm={4} sx={{ padding:'2%'}}>
        <Card sx={{ backgroundColor:'transparent',display:'contents',alignItems:'center', maxHeight:'100%',margin: 'auto',minHeight:'100%',padding:'2%'}}>
          <CardMedia
            component="img"
            image={foto3}
            alt="An image"
            sx={{  }}
          />
        </Card>
         <Typography gutterBottom sx={{backgroundColor:'transparent',display:'block',color:'#c4d5c4'}}>
                {texto3}
        </Typography>
        </Grid>
        <Grid item xs={6} sm={12} sx={{ padding:'2%'}}>
        <Card sx={{ backgroundColor:'transparent',display:'contents',alignItems:'center', maxHeight:'100%',margin: 'auto',minHeight:'100%',padding:'2%'}}>
          <CardMedia
            component="img"
            image={fotoGrande}
            alt="An image"
            sx={{objectFit:'cover' ,
            objectPosition: 'center',
            height: '100%',
            width: '100%', }}
          />
        </Card>
        </Grid>
    </Grid>
    </Container>
  )
}

export default ZaraLikeLayout
