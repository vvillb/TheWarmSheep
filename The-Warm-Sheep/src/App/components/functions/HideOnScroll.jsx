import * as React from 'react';
import {Slide, useScrollTrigger } from "@mui/material";


const navItems = ['Home', 'About', 'Contact'];

function HideOnScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger} timeout={500}>
      {children}
    </Slide>
  );
}



export default HideOnScroll;