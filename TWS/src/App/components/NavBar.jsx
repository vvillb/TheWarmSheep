import * as React from 'react';
import { AppBar, Grid, Button, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText, Toolbar, Typography } from "@mui/material";
import { MenuOutlined } from '@mui/icons-material';
import HideOnScroll from './functions/HideOnScroll';
import { Link } from 'react-router-dom';

const navItems = [
  { id:1, title: 'Home', path: '/' },
  { id:2, title: 'Rincones', path: '/about' },
  { id:3, title: 'Contacto', path: '/contact' },
  { id:3, title: 'Productos', path: '/products' },
];

const NavBar = () => {
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen((prevState) => !prevState);
  };

  const drawer = (
    <Grid sx={{ width: 250 }}>
      <List>
        {navItems.map((item) => (
          <ListItem key={item.id} disablePadding>
            <Link to={item.path} onClick={handleDrawerToggle}>
            <ListItemButton >
              <ListItemText primary={item.title} />
            </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
    </Grid>
  );

  return (
    <Grid justifyContent="space-around" sx={{ flexGrow: 1 }}>
      <HideOnScroll> 
       
        <AppBar   sx={{maxWidth:'100vw', position: 'fixed', left: 0, right: 0}}>
          <Toolbar  sx={{textAlign:'left', justifyContent:'space-around'}}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2, display: { md: 'none' } }}
              onClick={handleDrawerToggle}
            >
              <MenuOutlined />
            </IconButton>
            <Grid  container justifyContent='flex-start'>
            <Link to='/'  sx={{ flexGrow: 1 }}>
            <Typography variant="h6" component="div" color="secondary" sx={{ flexGrow: 1 }}>
              The Warm Sheep
            </Typography>
            </Link>
            </Grid>
            <Grid container sx={{ display: { xs: 'none', md: 'flex' }}}>
            <Grid sx={{ display:'flex', justifyContent:'flex-end', flexGrow:1}}>
              {navItems.map((item) => (
                <Link key={item.id} to={item.path} >
                <Button key={item.id} color="secondary"  
                sx={{
                  ':hover':{
                    color:'error.main'
                  }
                }}>
                  {item.title}
                </Button>
                </Link>
              ))}
            </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
        </HideOnScroll>
        <Drawer
          anchor="left"
          open={drawerOpen}
          onClose={handleDrawerToggle}
          sx={{ display: { md: 'none' } }}
        >
          {drawer}
        </Drawer>
      </Grid>
  );
};

export default NavBar;
