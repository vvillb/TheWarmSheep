import { useRef } from 'react'
import {Card, Fade, Slide, useScrollTrigger } from "@mui/material";
import { useInView } from 'react-intersection-observer';


const FadeIn = (props) => {
    const { children } = props;
    const { ref, inView, entry } = useInView({
        /* Optional options */
        threshold: 0,
        triggerOnce: true
      });
     const trigger = {inView};
console.log(trigger)
  console.log(inView)
    return (
      <Card  ref={ref} sx={{ maxWidth: 345 }}>
      <Fade  timeout={500}  in={inView} hysteresis={0.1} mountOnEnter  unmountOnExit direction="up" >
        {children}
      </Fade>
      </Card>
    );
  }


export default FadeIn
