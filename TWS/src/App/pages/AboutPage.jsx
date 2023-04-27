import React, { useEffect } from 'react'
import AppLayout from '../layout/AppLayout'
import { Typography } from '@mui/material'
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
