import React from 'react'
import AppLayout from '../layout/AppLayout'
import Footer from '../components/Footer'
import { Typography } from '@mui/material'
import SingleProduct from '../components/SingleProduct'
import foto1 from '../../assets/images/products/product1.jpg'
import foto2 from '../../assets/images/products/product2.jpg'
import fondo from '../../assets/images/playa.jpg'


const ProductPage = () => {
  return (
    <AppLayout>
        <Typography variant='h2'>
            Algunas creaciones...
        </Typography>

        <SingleProduct fondo={fondo} titulo="jhgdh" foto1={foto1} foto2={foto2}>
            Lana ...Consectetur dolor adipisicing adipisicing nisi commodo ullamco ea. Et ullamco do reprehenderit occaecat anim. Aliqua do irure duis non nostrud dolore laboris Lorem deserunt mollit enim. Duis incididunt aute laborum excepteur ullamco esse irure velit cillum aliqua adipisicing sunt proident.
        </SingleProduct>

      <Footer/>
    </AppLayout>
  )
}

export default ProductPage
