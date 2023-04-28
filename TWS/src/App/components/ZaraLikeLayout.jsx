import { Grid, Paper } from '@mui/material'
import React from 'react'

const ZaraLikeLayout = (props) => {
    const {foto1,foto2,foto3,fotoGrande}=props;

  return (
    <Grid container>
        <Grid item xs={6} sm={4}>
            <Paper variant='outlined' square>
                {foto1}
            </Paper>
        </Grid>
        <Grid item xs={6} sm={4}>
            <Paper variant='outlined' square>
                {foto2}
            </Paper>
        </Grid>
        <Grid item xs={6} sm={4}>
            <Paper variant='outlined' square>
                {foto3}
            </Paper>
        </Grid>
        <Grid item xs={12} >
            <Paper variant='outlined' square>
                {fotoGrande}
            </Paper>
        </Grid>
    </Grid>
  )
}

export default ZaraLikeLayout
