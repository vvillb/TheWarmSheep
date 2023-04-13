import React from 'react'
import '../../styles.css'
import { Box, Card, CardMedia, Paper, Typography } from '@mui/material'
import playa from '../../assets/images/playa.jpg'


const HeroSection = () => {
  return (
  <Box>
          
            <Card
            sx={{
                position: 'absolute',
                left: '238px',
                top: '187px',
                width: '1102px',
                height: '800px',
                }}  
                >
                <img
                    src={playa}
                    sx={{ minHeight: '100vh', 
                    maxWidth: '75%', 
                    margin: '0 auto', 
                    display: 'block' 
                  }}
                />
          </Card>
           
          
          <Typography variant='h1' 
          sx={{
              textAlign: 'left',
              position: 'absolute',
              left: '80px',
              top: '231px',
              width: '470px',
              height: '80px',
              flexDirection: 'column' }}>
              The Warm Sheep
          </Typography>
          <Typography variant='h3'
          sx={{
              position: 'absolute',
              left: '1022px',
              top: '610px',
              width: '470px',
              height: '80px',
              flexDirection: 'column' 
          }}>
              Handmade Knits
          </Typography>

        
          </Box>
  )
}

export default HeroSection
