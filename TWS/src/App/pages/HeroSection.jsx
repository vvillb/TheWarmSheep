import React from 'react'
import { Box, Button, Card, CardMedia, Grid, Paper, Typography } from '@mui/material'
import playa from '../../assets/images/playa1.jpg'
import { Link } from 'react-router-dom'
import '../../index.css'


const HeroSection = () => {
  return (
    <>
    <Grid
      sx={{
        height: '100vh',
        background: `linear-gradient( to right, rgba(0,0,0,0.6), transparent), url(${playa})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width:'100vw',
        flexDirection:'column'
      }}
    >
       <Grid container
       direction='row'
       justifyContent="center"
       >

      <Grid item
      xs
      sx={{
        justifyContent:'left',
        display:'flex',
        
      }}>
      <Typography variant='h1' 
          className='title'
          sx={{
              textShadow:'0px 0px 20px rgba(0,0,0,0.4)',
              // fontSize:'(5rem,8vw,20rem)',
              textAlign: 'left',
              flexDirection: 'column',
              flexWrap:'wrap' ,
              
              }}>
              The Warm Sheep
          </Typography>
          </Grid>
          
          
          <Grid item
          justifyContent="flex-end"
          >
          <Typography variant='h3'
          className='subtitle'
          sx={{
            
            // fontSize:'clamp(3rem,6vw,6rem)',
              flexDirection: 'column' ,
              flexWrap:'wrap' ,
          }}>
          </Typography>
          </Grid>
          </Grid>
          <Grid container
       direction='row'
       justifyContent="center"
       >

      <Grid item
      xs={6}
      >
    
          </Grid>
          
          
          <Grid item
          
          >
          <Typography variant='h3'
          className='subtitle'
          sx={{
            
            // fontSize:'clamp(3rem,6vw,6rem)',
              flexDirection: 'column' ,
              flexWrap:'wrap' ,
          }}>
              Handmade Knits
          </Typography>
          </Grid>
          </Grid>
          <Grid container
          direction="column"
          justifyContent="center"
          alignItems="center"
          >
          <Grid item>
      <Link to='/about'>
      <Button
        variant="contained"
        color="primary"
        sx={{
          textTransform: 'uppercase',
          fontSize: (theme) => theme.typography.pxToRem(16),
          fontWeight: (theme) => theme.typography.fontWeightBold,
        }}
        
      >
        About
      </Button>
      </Link>
      </Grid>
    </Grid></Grid>
    </>
  )
}

export default HeroSection
