import { Card, CardMedia, Container, Grid, Typography } from '@mui/material'
import React from 'react'

const ZaraLikeLayout = (props) => {
    const {texto1,texto2,texto3,foto1,foto2,foto3,fotoGrande}=props;

  return (
    <Container disableGutters>
    <Grid container 
    rowSpacing={1} spacing={2}
    justifyContent="center"
    
    sx={{maxWidth:'100vw', display:'flex', padding:'2%',marginLeft:0,marginRight:0}}>
        <Grid justifyContent="center"item xs={6} sm={4} sx={{ padding:'2%'}}>
        <Card sx={{ maxHeight:'75vh', backgroundColor:'transparent' ,display:'contents',alignItems:'center',margin: 'auto'}}>
          <CardMedia
            component="img"
            image={foto1}
            alt="An image"
            sx={{ }}
          />
        </Card >
         <Typography sx={{backgroundColor:'transparent',display:'block'}}>
                {texto1}
        </Typography>
            
        </Grid>
        <Grid item xs={6} sm={4} sx={{ padding:'2%'}}>
        <Card sx={{  maxHeight:'75vh',backgroundColor:'transparent',display:'contents',alignItems:'center',margin: 'auto'}}>
          <CardMedia
            component="img"
            image={foto2}
            alt="An image"
            sx={{  }}
          />
        </Card>
         <Typography sx={{backgroundColor:'transparent'}}>
                {texto2}
        </Typography>

        </Grid>
        <Grid item xs={6} sm={4} sx={{ padding:'2%'}}>
        <Card sx={{maxHeight:'75vh',  backgroundColor:'transparent',display:'contents',alignItems:'center',margin: 'auto'}}>
          <CardMedia
            component="img"
            image={foto3}
            alt="An image"
            sx={{  }}
          />
        </Card>
         <Typography sx={{backgroundColor:'transparent'}}>
                {texto3}
        </Typography>
        </Grid>
        <Grid item xs={6} sm={12} sx={{ padding:'2%'}}>
        <Card sx={{ maxHeight:'75vh', backgroundColor:'transparent',display:'contents',alignItems:'center'}}>
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
