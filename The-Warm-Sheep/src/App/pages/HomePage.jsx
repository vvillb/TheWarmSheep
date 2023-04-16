import React from 'react'
import AppLayout from '../layout/AppLayout'
import { Box, Grid, Typography ,Card} from '@mui/material'
import playa from '../../assets/images/playa.jpg'

import { Image } from '@mui/icons-material'
import HeroSection from './HeroSection'
import ParallaxSections from './ParallaxSections.jsx'


const HomePage = () => {
  return (
    <AppLayout>
      {/* <ParallaxSections/> */}
    <HeroSection/>
    </AppLayout>
//     <React.Fragment >
//     <AppLayout>
      
        
//         <Box
//         sx={{
//           flexGrow:1,
//           height:'100vh',
//           maxHeight:'1100px',
//           position:'relative',
//            overflow:'hidden'
//         }}>
//         <HeroSection/>
//         </Box>

//          <Box item spacing={0}
//               direction="column"
//               alignItems="center"
//               justifyContent="center"
//               sx={{minHeight:'100vh',backgroundColor:'secondary.main'}}
//               >          
//           <Typography variant='body1' >
//             Minim minim adipisicing dolore ut deserunt nostrud. Ut enim nostrud et consectetur deserunt commodo mollit duis cillum aliqua ullamco anim. Amet eiusmod ex id culpa do eu deserunt anim occaecat esse. Qui ex cillum culpa enim laboris duis. Laborum non ullamco proident culpa sit duis. Mollit fugiat ex commodo duis sunt ea culpa.
//           Excepteur sit nulla irure consequat esse incididunt dolor proident voluptate reprehenderit labore quis et tempor. Minim do non amet dolore quis nulla magna dolor dolor do adipisicing fugiat velit aliquip. Labore cupidatat mollit Lorem consectetur elit sunt do eu veniam tempor cupidatat Lorem in proident. Consectetur incididunt esse minim duis Lorem voluptate est amet. Lorem sunt ut aute sit amet duis sit esse deserunt quis ea non sint.
//           Lorem ex ad non sint. Cupidatat aute est pariatur commodo mollit. Proident do irure et veniam excepteur ut consectetur aliqua ut non. Excepteur nisi consectetur nulla ullamco deserunt magna mollit aliqua ullamco ex elit tempor et non.
//           Pariatur ex laboris dolore aliqua laboris nisi nostrud velit aliqua ipsum magna ad. Aliquip deserunt fugiat eu voluptate est aliquip duis ea anim id pariatur irure cillum. Aliquip velit nisi id est voluptate et aute laborum consequat eiusmod sunt dolor. Esse sit reprehenderit est sint sunt.
//          aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
//           </Typography>
//         </Box>               
        
     
//     </AppLayout>    
//     </React.Fragment>
  )
}

export default HomePage
