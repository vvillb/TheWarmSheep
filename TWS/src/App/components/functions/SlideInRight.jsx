import { useRef } from 'react'
import { Card, Grid, Slide, Typography } from "@mui/material";
import { useInView } from 'react-intersection-observer';


const SlideInRight = (props) => {
    const { children } = props;
    const { ref, inView } = useInView({
        /* Optional options */
        threshold: 0,
        triggerOnce: true
      });
    const trigger = {inView};

  console.log(trigger)
    return (  
    <Grid item ref={ref}>
    <Slide    in={inView} hysteresis={0.1} mountOnEnter   direction="right" >
    <Typography   variant='h3' gutterBottom>
        {children}
    </Typography>    
    </Slide>
    </Grid>
    );
  }


export default SlideInRight