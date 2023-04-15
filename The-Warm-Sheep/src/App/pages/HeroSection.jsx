import React from 'react'
import '../../styles.css'
import { Box, Card, CardMedia, Grid, Paper, Typography } from '@mui/material'
import playa from '../../assets/images/playa1.jpg'


const HeroSection = () => {
  return (
    <Box
    sx={{
        flexGrow:1
    }}>
  <Grid container>
      <Grid item
            sx={{
              
                position:'absolute',
                // top:0,
                // left:0,
                // width:'100%',
                height:'100%',   
                display: 'flex',
                alignItems:'center',
                justifyContent:'center' ,
                left: '238px',
                top: '0',
                width: '1102px',
                objectFit:'cover',
                maxWidth:'100vw',
                // transform: 'translate(-50%, -50%)',
                //  maxWidth: '100%',
                // height: 'auto',

                }}  
                >
                <img
                    src={playa}
                    
                />
      </Grid>
      <Grid item
      sx={{
        maxWidth: '100%',
      }}>
          <Typography variant='h1' 
          sx={{
              textShadow:'0px 0px 20px rgba(0,0,0,0.4)',
              fontSize:'(5rem,8vw,20rem)',
              textAlign: 'left',
              position: 'absolute',
              width: '470px',
              height: '80px',
              flexDirection: 'column',
              flexWrap:'wrap' ,
              transform:'translate(30%,150%)'}}>
              The Warm Sheep
          </Typography>
          <Typography variant='h3'
          sx={{
            fontSize:'clamp(3rem,6vw,15rem)',
              position: 'absolute',
              width: '470px',
              height: '80px',
              flexDirection: 'column' ,
              flexWrap:'wrap' ,
              transform:'translate(100%,500%)'

          }}>
              Handmade Knits
          </Typography>
      </Grid>
</Grid></Box>
  )
}

export default HeroSection
