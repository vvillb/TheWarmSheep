import React from 'react'
import '../../styles.css'
import { Box, Card, CardMedia, Paper } from '@mui/material'
import playa from '../../assets/videos/beach.mp4'


const HeroSection = () => {
  return (
    
            <Card 
            >
                <CardMedia
                    component='video'
                    alt='video'
                    src={playa}
                    title='video'
                    type='video/mp4'
                    muted=''
                    autoPlay=''
                    minHeight="100vh"
                />
            </Card>
  )
}

export default HeroSection
