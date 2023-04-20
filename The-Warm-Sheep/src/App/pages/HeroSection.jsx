import React from 'react'
import '../../styles.css'
import { Box, Button, Card, CardMedia, Grid, Paper, Typography } from '@mui/material'
import playa from '../../assets/images/playa1.jpg'
import { Link } from 'react-router-dom'


const HeroSection = () => {
  return (
    <Grid
      sx={{
        height: '100vh',
        background: `linear-gradient( rgba(8, 8, 37, 0.85), rgba(0, 15, 80, 0.675)), url(${playa})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width:'100vw',
        flexDirection:'column'
      }}
    >
      <Grid item
      sx={{
        justifyContent:'left',
        display:'flex'
      }}>
      <Typography variant='h1' 
          sx={{
              textShadow:'0px 0px 20px rgba(0,0,0,0.4)',
              // fontSize:'(5rem,8vw,20rem)',
              textAlign: 'left',
              flexDirection: 'column',
              flexWrap:'wrap' ,
              color:'white'
              }}>
              The Warm Sheep
          </Typography>
          </Grid>
          <Grid item>
          <Typography variant='h3'
          sx={{
            // fontSize:'clamp(3rem,6vw,6rem)',
              flexDirection: 'column' ,
              flexWrap:'wrap' ,
          }}>
              Handmade Knits
          </Typography>
          </Grid>
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
    </Grid>
//     <Box
//     sx={{
//         flexGrow:1
//     }}>
//   <Grid container>
//       <Grid item
//             sx={{
              
//                 position:'absolute',
//                 // top:0,
//                 // left:0,
//                 // width:'100%',
//                 height:'100%',   
//                 display: 'flex',
//                 alignItems:'center',
//                 justifyContent:'center' ,
//                 left: '238px',
//                 top: '0',
//                 width: '1102px',
//                 objectFit:'cover',
//                 maxWidth:'100vw',
//                 // transform: 'translate(-50%, -50%)',
//                 //  maxWidth: '100%',
//                 // height: 'auto',

//                 }}  
//                 >
//                 <img
//                     src={playa}
                    
//                 />
//       </Grid>
//       <Grid item
//       sx={{
//         maxWidth: '100%',
//       }}>
//           <Typography variant='h1' 
//           sx={{
//               textShadow:'0px 0px 20px rgba(0,0,0,0.4)',
//               fontSize:'(5rem,8vw,20rem)',
//               textAlign: 'left',
//               position: 'absolute',
//               width: '470px',
//               height: '80px',
//               flexDirection: 'column',
//               flexWrap:'wrap' ,
//               transform:'translate(30%,150%)'}}>
//               The Warm Sheep
//           </Typography>
//           <Typography variant='h3'
//           sx={{
//             fontSize:'clamp(3rem,6vw,15rem)',
//               position: 'absolute',
//               width: '470px',
//               height: '80px',
//               flexDirection: 'column' ,
//               flexWrap:'wrap' ,
//               transform:'translate(100%,500%)'

//           }}>
//               Handmade Knits
//           </Typography>
//       </Grid>
// </Grid></Box>
  )
}

export default HeroSection
