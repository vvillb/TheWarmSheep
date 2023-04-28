import { Box, ImageList, ImageListItem } from '@mui/material'
import React from 'react'



const itemData = [
    {
      id:1,
      img: 'https://images.unsplash.com/photo-1549388604-817d15aa0110',
      title: 'Bed',
    },];


const ProductGallery = () => {
  return (
    <Box sx={{ width: 500, height: 450, overflowY: 'scroll' }}>
    <ImageList variant="masonry" cols={3} gap={8}>
      {itemData.map((item) => (
        <ImageListItem key={item.id}>
          <img
            src={item.img}
            srcSet={item.img}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  </Box>
  );
}

export default ProductGallery


