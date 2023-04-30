import { Card, CardMedia, Grid, Typography } from '@mui/material'
import React from 'react'

const ZaraLikeLayout = (props) => {
    const {texto1,texto2,texto3,foto1,foto2,foto3,fotoGrande}=props;

  return (
    <Grid container sx={{maxWidth:'100vw'}}>
        <Grid item xs={6} sm={4}>
        <Card sx={{ maxHeight:'75vh', backgroundColor:'transparent' ,display:'flex',alignItems:'center'}}>
          <CardMedia
            component="img"
            image={foto1}
            alt="An image"
            sx={{  }}
          />
        </Card >
         <Typography sx={{backgroundColor:'transparent'}}>
                {texto1}
        </Typography>
            
        </Grid>
        <Grid item xs={6} sm={4}>
        <Card sx={{  maxHeight:'75vh',backgroundColor:'transparent',display:'flex',alignItems:'center'}}>
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
        <Grid item xs={6} sm={4}>
        <Card sx={{maxHeight:'75vh',  backgroundColor:'transparent',display:'flex',alignItems:'center'}}>
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
        <Grid item xs={6} sm={12}>
        <Card sx={{ maxHeight:'75vh', backgroundColor:'transparent',display:'flex',alignItems:'center'}}>
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
  )
}

export default ZaraLikeLayout
