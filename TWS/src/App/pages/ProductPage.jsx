import React, { useEffect } from 'react'
import AppLayout from '../layout/AppLayout'
import Footer from '../components/Footer'
import { Typography } from '@mui/material'
import SingleProduct from '../components/SingleProduct'
import foto1 from '../../assets/images/products/product1.jpg'
import foto2 from '../../assets/images/products/product2.jpg'
import fondo from '../../assets/images/playa.jpg'
import ProductGallery from '../components/ProductGallery'


const ProductPage = () => {
  useEffect(()=>{
    window.scrollTo(0,0);
  
  },[])
  return (
    <AppLayout>
        <ProductGallery/>

      <Footer/>
    </AppLayout>
  )
}

export default ProductPage
