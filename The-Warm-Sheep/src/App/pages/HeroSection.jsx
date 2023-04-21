import React from 'react'
import '../../styles.css'
import { Box, Button, Card,  Grid,  Paper, Stack, Typography } from '@mui/material'
import playa from '../../assets/images/nets.jpg'
import { Link } from 'react-router-dom'


const HeroSection = () => {
  return (
    <Grid container
    
    sx={{
      height: '100vh',
      background: `url(${playa})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      
    // display: 'flex',
    // justifyContent: 'center',
    // alignItems: 'center',
      width:'100vw',
    // flexDirection:'column'
    
  }}>
    <Stack
    direction={{ xs: 'column', sm: 'row' }}
    spacing={{ xs: 1, sm: 2, md: 4 }}
    justifyContent="space-around"
    alignItems="center"
    
      
    >
      <Box
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
              }}>
              The Warm Sheep
          </Typography>
          </Box>
          <Box>
          <Typography variant='h3'
          sx={{
            // fontSize:'clamp(3rem,6vw,6rem)',
              flexDirection: 'column' ,
              flexWrap:'wrap' ,
              alignItems:"flex-end"
          }}>
              Handmade Knits
          </Typography>
          </Box>
          </Stack>
          <Stack spacing={2}
          direction="row"
          justifyContent="center"
          alignItems="center"
          sx={{
            width:"100vw"
          }}>
          <Box>
      <Link to='/about'>
      <Button
        variant="outlined"
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
      </Box>
    </Stack>
    </Grid>
//     <Box
//     sx={{
//         flexGrow:1
//     }}>
//   <Box container>
//       <Box item
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
//       </Box>
//       <Box item
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
//       </Box>
// </Box></Box>
  )
}

export default HeroSection
