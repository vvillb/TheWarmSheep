import React from 'react'
import { AppBar, Grid, Button, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText, Toolbar, Typography } from "@mui/material";
import { Link } from 'react-router-dom';
import InstagramIcon from '@mui/icons-material/Instagram';



const Footer = () => {
  return (
    
    <Grid container  
    direction="row"
    // position="fixed"
    justifyContent="space-evenly"
    alignItems="center"
    sx={{
        padding:'1%',
        backgroundColor: 'primary.main',
        left: 0, 
        right: 0
        
    }}
  >
        <Grid item xs={12} sm={6}
        alignItems="center">
          
            <Link to='/' >
            <Button fullWidth color="secondary"  
            sx={{
              ':hover':{
                color:'error.main'
              }
            }}>
            <Typography >The Warm Sheep 2023</Typography>
              
            </Button>
            </Link>
         
        </Grid>
        <Grid item xs={12} sm={6}
        alignItems="center">
          
          <Link to='https://www.instagram.com/thewarmsheep_/' >
          <Button  fullWidth color="secondary"
          sx={{
            color:"secondary",
            ':hover':{
              color:'error.main'
            }
          }}>
            <InstagramIcon/>
            <Typography >Instagram</Typography>
            </Button>
          </Link>
       
      </Grid>
    </Grid>
  )
}

export default Footer
