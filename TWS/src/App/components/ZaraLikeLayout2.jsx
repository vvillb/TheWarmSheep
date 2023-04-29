import { Card, CardMedia, Grid, Typography } from '@mui/material'
import React from 'react'

const ZaraLikeLayout2 = (props) => {
    const {texto1,texto2,texto3,texto4,foto1,foto2,foto3,foto4}=props;
  return (
    <Grid container>
    <Grid item xs={6} sm={8}>
    <Card sx={{  backgroundColor:'transparent'}}>
      <CardMedia
        component="img"
        image={foto1}
        alt="An image"
        sx={{  }}
      />
    </Card>
     <Typography sx={{backgroundColor:'transparent'}}>
            {texto1}
    </Typography>
        
    </Grid>
    <Grid item xs={6} sm={4}>
    <Card sx={{  backgroundColor:'transparent'}}>
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
    <Card sx={{ backgroundColor:'transparent'}}>
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
    <Grid item xs={6} sm={8}>
    <Card sx={{  backgroundColor:'transparent'}}>
      <CardMedia
        component="img"
        image={foto4}
        alt="An image"
        sx={{  }}
      />
    </Card>
    <Typography sx={{backgroundColor:'transparent'}}>
            {texto4}
    </Typography>
    
    </Grid>
</Grid>
  )
}

export default ZaraLikeLayout2
