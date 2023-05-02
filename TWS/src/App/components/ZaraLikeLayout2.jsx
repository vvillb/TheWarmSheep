import { Card, CardMedia, Container, Grid, Typography } from '@mui/material'
import React from 'react'

const ZaraLikeLayout2 = (props) => {
    const {texto1,texto2,texto3,texto4,foto1,foto2,foto3,foto4}=props;
  return (
    <Container disableGutters>
    <Grid container 
    rowSpacing={1} spacing={2}
    justifyContent="center"
    sx={{maxWidth:'100vw', display:'flex', padding:'2%',marginLeft:0,marginRight:0
    }}>
    <Grid item xs={6} sm={8} justifyContent="center" sx={{ padding:'2%'}}>
    <Card sx={{  backgroundColor:'transparent',display:'contents',alignItems:'center', maxHeight:'100%',margin: 'auto',minHeight:'100%'}}>
      <CardMedia
        component="img"
        image={foto1}
        alt="An image"
        sx={{  objectFit:'cover' ,
        objectPosition: 'center',
        height: '100%',
        }}
      />
    </Card>
     <Typography sx={{backgroundColor:'transparent',display:'block'}}>
            {texto1}
    </Typography>
        
    </Grid>
    <Grid item xs={6} sm={4} justifyContent="center" sx={{ padding:'2%'}}>
    <Card sx={{  backgroundColor:'transparent',display:'contents',alignItems:'center', maxHeight:'100%',margin: 'auto',minHeight:'100%'}}>
      <CardMedia
        component="img"
        image={foto2}
        alt="An image"
        sx={{objectFit:'cover' ,
        objectPosition: 'center',
        height: '100%',
         }}
      />
    </Card>
     <Typography sx={{backgroundColor:'transparent',display:'block'}}>
            {texto2}
    </Typography>

    </Grid>
    <Grid item xs={12} sm={4} justifyContent="center" sx={{ padding:'2%'}}>
    <Card sx={{  backgroundColor:'transparent',display:'contents',alignItems:'center',maxHeight:'100%',margin: 'auto',minHeight:'100%'}}>
      <CardMedia
        component="img"
        image={foto3}
        alt="An image"
        sx={{objectFit:'cover' ,
        objectPosition: 'center',
        height: '100%',
         }}
      />
    </Card>
     <Typography sx={{backgroundColor:'transparent',display:'block'}}>
            {texto3}
    </Typography>
    </Grid>
    <Grid item xs={12} sm={8} justifyContent="center" sx={{ padding:'2%'}}>
    <Card sx={{   backgroundColor:'transparent',display:'contents',alignItems:'center', maxHeight:'100%',margin: 'auto',minHeight:'100%'}}>
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
    <Typography sx={{backgroundColor:'transparent',display:'block'}}>
            {texto4}
    </Typography>
    
    </Grid>
</Grid>
</Container>
  )
}

export default ZaraLikeLayout2
