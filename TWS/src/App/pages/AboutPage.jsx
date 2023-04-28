import React, { useEffect } from 'react'
import AppLayout from '../layout/AppLayout'
import { Card, CardContent, Typography } from '@mui/material'
import CardCover from '@mui/joy/CardCover';
import Footer from '../components/Footer'
import knits from '../../assets/images/img3.jpg'
import PhotoLeftTextRight from '../components/PhotoLeftTextRight'
import PhotoRightTextLeft from '../components/PhotoRightTextLeft'



const AboutPage = () => {
  useEffect(()=>{
    window.scrollTo(0,0);
  
  },[])
  return (
    <AppLayout>
        <Card component="li" sx={{ minWidth: 300, flexGrow: 1 }}>
        <CardCover>
          <video
            autoPlay
            loop
            muted
            poster='../../assets/images/products/paisajeRisco.jpg'
          >
            <source
              src="../../assets/videos/paisajeChapona.mp4"
              type="video/mp4"
            />
          </video>
        </CardCover>
        <CardContent>
          <Typography
            level="h6"
            fontWeight="lg"
            textColor="#fff"
            mt={{ xs: 12, sm: 18 }}
          >
            Video
          </Typography>
        </CardContent>
      </Card>
      <PhotoRightTextLeft image={knits}  titulo="about" >
        Voluptate velit pariatur sint quis irure nulla officia elit ea dolore cupidatat labore. Irure labore eu id esse. Amet amet minim ut laboris.
      </PhotoRightTextLeft>
      <PhotoLeftTextRight image={knits} direction="row" titulo="about" >
        Voluptate velit pariatur sint quis irure nulla officia elit ea dolore cupidatat labore. Irure labore eu id esse. Amet amet minim ut laboris.
      </PhotoLeftTextRight>
      <PhotoRightTextLeft image={knits}  titulo="about" >
        Voluptate velit pariatur sint quis irure nulla officia elit ea dolore cupidatat labore. Irure labore eu id esse. Amet amet minim ut laboris.
      </PhotoRightTextLeft>
      <Footer/>
    </AppLayout>
  )
}

export default AboutPage
