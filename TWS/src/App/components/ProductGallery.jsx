import { Box, ImageList, ImageListItem } from '@mui/material'
import React from 'react'
import setNaranja1 from  '../../assets/images/products/setNaranja1.jpg'
import setNaranja2 from  '../../assets/images/products/setNaranja2.jpg'
import balaclavaAzul1 from  '../../assets/images/products/balaclavaAzul1.jpg'
import balaclavaAzul2  from  '../../assets/images/products/balaclavaAzul2.jpg'
import balaclavaAzul3 from  '../../assets/images/products/balaclavaAzul3.jpg'
import balaclavaRosa1 from  '../../assets/images/products/balaclavaRosa1.jpg'
import  balaclavaRosa2 from  '../../assets/images/products/balaclavaRosa2.jpg'
import  BalaclavaRosa3 from  '../../assets/images/products/BalaclavaRosa3.jpg'
import beanieAzul from  '../../assets/images/products/beanieAzul.jpg'
import BolsoVerde3 from  '../../assets/images/products/BolsoVerde3.jpg'
import BolsoVerde4 from  '../../assets/images/products/BolsoVerde4.jpg'
import BolsoVerde5 from  '../../assets/images/products/BolsoVerde5.jpg'
import bufandaMarron1 from  '../../assets/images/products/bufandaMarron1.jpg'
import bufandaMarron2 from  '../../assets/images/products/bufandaMarron2.jpg'
import bufandaMarron3 from  '../../assets/images/products/bufandaMarron3.jpg'
import bufandaMarron4 from  '../../assets/images/products/bufandaMarron4.jpg'
import bufandaMarron5 from  '../../assets/images/products/bufandaMarron5.jpg'
import bufandaMarron6 from  '../../assets/images/products/bufandaMarron6.jpg'
import bufandaVerde2 from  '../../assets/images/products/bufandaVerd2.jpg'
import bufandaVerde1 from  '../../assets/images/products/bufandaVerde1.jpg'
import cuelloVErde from  '../../assets/images/products/cuelloVErde.jpg'
import jerseyAzul1 from  '../../assets/images/products/jerseyAzul1.jpg'
import jerseyAzul2 from  '../../assets/images/products/jerseyAzul2.jpg'
import jerseyAzul3 from  '../../assets/images/products/jerseyAzul3.jpg'
import jerseyAzul4 from  '../../assets/images/products/jerseyAzul4.jpg'
import jerseyAzul5 from  '../../assets/images/products/jerseyAzul5.jpg'
import jerseyAzul6 from  '../../assets/images/products/jerseyAzul6.jpg'
import JerseyMangas1 from  '../../assets/images/products/JerseyMangas1.jpg'
import JerseyMangas2 from  '../../assets/images/products/JerseyMangas2.jpg'
import JerseyMangas3 from  '../../assets/images/products/JerseyMangas3.jpg'
import JerseyMangas4 from  '../../assets/images/products/JerseyMangas4.jpg'
import JerseyMangas5 from  '../../assets/images/products/JerseyMangas5.jpg'
import jerseyMulticolor1 from  '../../assets/images/products/jerseyMulticolor1.jpg'
import jerseyMulticolor2 from  '../../assets/images/products/jerseyMulticolor2.jpg'
import jerseyVerde1 from  '../../assets/images/products/jerseyVerde1.jpg'
import jerseyVerde2 from  '../../assets/images/products/jerseyVerde2.jpg'
import mittensVerdes1 from  '../../assets/images/products/mittensVerdes1.jpg'
import mittensVerdes2 from  '../../assets/images/products/mittensVerdes2.jpg'
import paisajeMontaña2 from  '../../assets/images/products/paisajeMontaña2.jpg'
import paisajePlaya3 from  '../../assets/images/products/paisajePlaya3.jpg'
import lanaMulticolor from  '../../assets/images/products/lanaMulticolor.jpg'
import paisajeRisco from  '../../assets/images/products/paisajeRisco.jpg'
import paisajePlaya5 from  '../../assets/images/products/paisajePlaya5.jpg'
import paisajeRisco2 from  '../../assets/images/products/paisajeRisco2.jpg'
import paisajeMontaña1 from  '../../assets/images/products/PaisajeMontaña1.jpg'

import LauraNY from  '../../assets/images/products/product17.jpg'
import paisajeCaballos from '../../assets/images/products/paisajeCaballos.jpg'
import ZaraLikeLayout from './ZaraLikeLayout'
import ZaraLikeLayout2 from './ZaraLikeLayout2'





const ProductGallery = () => {
  return (
    <>
    <ZaraLikeLayout
    texto1="bufanda multicolor"
    foto1={LauraNY}
    foto2={lanaMulticolor}
    texto2='lana '
    foto3={cuelloVErde}
    texto3=''
    fotoGrande={balaclavaAzul1}
    tetxo4='balaclava azul'
    />
    <ZaraLikeLayout2
    texto1="mittens verdes"
    foto1={mittensVerdes2}
    texto2='balaclava azul'
    foto2={balaclavaAzul3}
    texto4='balaclava azul'
    foto4={balaclavaAzul2}
    foto3={paisajeCaballos}
    />
    <ZaraLikeLayout
    texto1="gorro azul"
    texto2=''
    texto3='jersey multicolor'
    tetxo4='jersey multicolor'
    foto1={beanieAzul}
    foto2={paisajeMontaña2}
    foto3={JerseyMangas5}
    fotoGrande={JerseyMangas1}
    />
    <ZaraLikeLayout
    texto1="jersey multicolor"
    texto2='set de bolso y neceser'
    texto3=''
    tetxo4=''
    foto1={JerseyMangas3}
    foto2={BolsoVerde4}
    foto3={JerseyMangas4}
    fotoGrande={BolsoVerde3}
    />
    <ZaraLikeLayout2
    texto1="jersey azul"
    texto2=''
    texto3='set de gorro y mitones'
    tetxo4=''
    foto1={jerseyAzul1}
    foto2={jerseyAzul2}
    foto3={setNaranja2}
    foto4={setNaranja1}
    />
    <ZaraLikeLayout
    texto1=""
    texto2=''
    texto3='balaclava rosa'
    tetxo4=''
    foto1={balaclavaRosa1}
    foto2={BalaclavaRosa3}
    foto3={balaclavaRosa2}
    fotoGrande={paisajeRisco}
    />
    <ZaraLikeLayout2
    texto1=""
    texto2='set de jersey y gorro'
    texto3='bufanda'
    tetxo4=''
    foto1={bufandaVerde2}
    foto2={jerseyVerde2}
    foto3={bufandaVerde1}
    foto4={jerseyVerde1}
    />
    <ZaraLikeLayout
    texto1=""
    texto2=''
    texto3='bufanda marrón'
    tetxo4=''
    foto1={bufandaMarron3}
    foto2={paisajePlaya5}
    foto3={bufandaMarron5}
    fotoGrande={bufandaMarron6}
    />
    <ZaraLikeLayout2
    texto1="jersey multicolor"
    texto2=''
    texto3=''
    tetxo4=''
    foto1={jerseyMulticolor1}
    foto2={paisajeMontaña1}
    foto3={paisajeRisco2}
    foto4={jerseyMulticolor2}
    />
    </>
   )
}

export default ProductGallery

  //   <Box sx={{ padding:'2%'}}>
  //   <ImageList variant="masonry" cols={3} gap={8}>
      
  //       <ImageListItem >
  //         <img
  //           src={setNaranja1}
  //           alt='Set Naranja'
  //           loading="lazy"
  //         />
  //       </ImageListItem>
  //       <ImageListItem >
  //         <img
  //           src={setNaranja2}
  //           alt='Set Naranja'
  //           loading="lazy"
  //         />
  //       </ImageListItem>
  //       <ImageListItem >
  //         <img
  //           src={balaclavaAzul1}
  //           alt='Set Naranja'
  //           loading="lazy"
  //         />
  //       </ImageListItem>
  //       <ImageListItem >
  //         <img
  //           src={balaclavaAzul2}
  //           alt='Set Naranja'
  //           loading="lazy"
  //         />
  //       </ImageListItem>
  //       <ImageListItem >
  //         <img
  //           src={balaclavaAzul3}
  //           alt='Set Naranja'
  //           loading="lazy"
  //         />
  //       </ImageListItem>
  //       <ImageListItem >
  //         <img
  //           src={balaclavaRosa1}
  //           alt='Set Naranja'
  //           loading="lazy"
  //         />
  //       </ImageListItem>
  //       <ImageListItem >
  //         <img
  //           src={balaclavaRosa2}
  //           alt='Set Naranja'
  //           loading="lazy"
  //         />
  //       </ImageListItem>
  //       <ImageListItem >
  //         <img
  //           src={BalaclavaRosa3}
  //           alt='Set Naranja'
  //           loading="lazy"
  //         />
  //       </ImageListItem>
  //       <ImageListItem >
  //         <img
  //           src={beanieAzul}
  //           alt='Set Naranja'
  //           loading="lazy"
  //         />
  //       </ImageListItem>
  //       <ImageListItem >
  //         <img
  //           src={BolsoVerde3}
  //           alt='Set Naranja'
  //           loading="lazy"
  //         />
  //       </ImageListItem>
  //       <ImageListItem >
  //         <img
  //           src={BolsoVerde4}
  //           alt='Set Naranja'
  //           loading="lazy"
  //         />
  //       </ImageListItem>
  //       <ImageListItem >
  //         <img
  //           src={BolsoVerde5}
  //           alt='Set Naranja'
  //           loading="lazy"
  //         />
  //       </ImageListItem>
  //       <ImageListItem >
  //         <img
  //           src={bufandaMarron1}
  //           alt='Set Naranja'
  //           loading="lazy"
  //         />
  //       </ImageListItem>
  //       <ImageListItem >
  //         <img
  //           src={bufandaMarron2}
  //           alt='Set Naranja'
  //           loading="lazy"
  //         />
  //       </ImageListItem>
  //       <ImageListItem >
  //         <img
  //           src={bufandaMarron3}
  //           alt='Set Naranja'
  //           loading="lazy"
  //         />
  //       </ImageListItem>
  //       <ImageListItem >
  //         <img
  //           src={bufandaMarron4}
  //           alt='Set Naranja'
  //           loading="lazy"
  //         />
  //       </ImageListItem>
  //       <ImageListItem >
  //         <img
  //           src={bufandaMarron5}
  //           alt='Set Naranja'
  //           loading="lazy"
  //         />
  //       </ImageListItem>
  //       <ImageListItem >
  //         <img
  //           src={bufandaMarron6}
  //           alt='Set Naranja'
  //           loading="lazy"
  //         />
  //       </ImageListItem>
  //       <ImageListItem >
  //         <img
  //           src={bufandaVerde2}
  //           alt='Set Naranja'
  //           loading="lazy"
  //         />
  //       </ImageListItem>
  //       <ImageListItem >
  //         <img
  //           src={bufandaVerde1}
  //           alt='Set Naranja'
  //           loading="lazy"
  //         />
  //       </ImageListItem>
  //       <ImageListItem >
  //         <img
  //           src={cuelloVErde}
  //           alt='Set Naranja'
  //           loading="lazy"
  //         />
  //       </ImageListItem>
  //       <ImageListItem >
  //         <img
  //           src={jerseyAzul1}
  //           alt='Set Naranja'
  //           loading="lazy"
  //         />
  //       </ImageListItem>
  //       <ImageListItem >
  //         <img
  //           src={beanieAzul}
  //           alt='Set Naranja'
  //           loading="lazy"
  //         />
  //       </ImageListItem>
  //       <ImageListItem >
  //         <img
  //           src={jerseyAzul6}
  //           alt='Set Naranja'
  //           loading="lazy"
  //         />
  //       </ImageListItem>
  //       <ImageListItem >
  //         <img
  //           src={JerseyMangas1}
  //           alt='Set Naranja'
  //           loading="lazy"
  //         />
  //       </ImageListItem>
  //       <ImageListItem >
  //         <img
  //           src={JerseyMangas2}
  //           alt='Set Naranja'
  //           loading="lazy"
  //         />
  //       </ImageListItem>
  //       <ImageListItem >
  //         <img
  //           src={JerseyMangas3}
  //           alt='Set Naranja'
  //           loading="lazy"
  //         />
  //       </ImageListItem>
  //       <ImageListItem >
  //         <img
  //           src={JerseyMangas4}
  //           alt='Set Naranja'
  //           loading="lazy"
  //         />
  //       </ImageListItem>
  //       <ImageListItem >
  //         <img
  //           src={JerseyMangas5}
  //           alt='Set Naranja'
  //           loading="lazy"
  //         />
  //       </ImageListItem>
  //       <ImageListItem >
  //         <img
  //           src={jerseyMulticolor1}
  //           alt='Set Naranja'
  //           loading="lazy"
  //         />
  //       </ImageListItem>
  //       <ImageListItem >
  //         <img
  //           src={jerseyMulticolor2}
  //           alt='Set Naranja'
  //           loading="lazy"
  //         />
  //       </ImageListItem>
  //       <ImageListItem >
  //         <img
  //           src={jerseyVerde1}
  //           alt='Set Naranja'
  //           loading="lazy"
  //         />
  //       </ImageListItem>
  //       <ImageListItem >
  //         <img
  //           src={jerseyVerde2}
  //           alt='Set Naranja'
  //           loading="lazy"
  //         />
  //       </ImageListItem>
  //       <ImageListItem >
  //         <img
  //           src={mittensVerdes1}
  //           alt='Set Naranja'
  //           loading="lazy"
  //         />
  //       </ImageListItem>
  //       <ImageListItem >
  //         <img
  //           src={mittensVerdes2}
  //           alt='Set Naranja'
  //           loading="lazy"
  //         />
  //       </ImageListItem>
      


      
  //   </ImageList>
  // </Box>
