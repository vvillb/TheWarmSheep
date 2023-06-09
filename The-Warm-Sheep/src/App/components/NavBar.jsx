import * as React from 'react';
import { AppBar, Box, Button, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText, Toolbar, Typography } from "@mui/material";
import { MenuOutlined } from '@mui/icons-material';
import HideOnScroll from './functions/HideOnScroll';
import { Link } from 'react-router-dom';

const navItems = [
  { id:1, title: 'Home', path: '/' },
  { id:2, title: 'About', path: '/about' },
  { id:3, title: 'Contact', path: '/contact' },
];

const NavBar = () => {
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box sx={{ width: 250 }}>
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
    </Box>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <HideOnScroll>
        <AppBar position="fixed">
          <Toolbar >
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
            <Box>
            <Link to='/'  sx={{ flexGrow: 1 }}>
            <Typography variant="h6" component="div" color="secondary" sx={{ flexGrow: 1 }}>
              The Warm Sheep
            </Typography>
            </Link>
            </Box>
            <Box sx={{ display: { xs: 'none', md: 'flex' }}}>
          
              {navItems.map((item) => (
                <Link key={item.id} to={item.path} >
                <Button key={item.id} color="secondary"  >
                  {item.title}
                </Button>
                </Link>
              ))}
            
            </Box>
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
      </Box>
  );
};

export default NavBar;
