import { Card, CardMedia, Grid, Typography } from '@mui/material'
import React from 'react'

const SingleProduct = (props) => {
    const {children,fondo,titulo,foto1,foto2} = props;
  return (
    <Grid container 
    sx={{
        height: '33vh',
        background: `linear-gradient( to right, rgba(0,0,0,0.6), transparent), url(${fondo})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width:'75vw'
    }}>
       <Typography variant='h3' gutterBottom>{titulo}</Typography>
        <Grid item   xs={12} sm={6} >
        <Card sx={{ maxWidth: 345 , backgroundColor:'transparent'}}>
          <CardMedia
            component="img"
            image={foto1}
            alt="An image"
            sx={{  }}
          />
        </Card>
        </Grid>
        <Grid item   xs={12} sm={6}>
        <Card sx={{ maxWidth: 345 , backgroundColor:'transparent'}}>
          <CardMedia
            component="img"
            image={foto2}
            alt="An image"
            sx={{  }}
          />
        </Card>
        </Grid> 
        <Typography paragraph>{children} </Typography>
    </Grid>
  )
}

export default SingleProduct
