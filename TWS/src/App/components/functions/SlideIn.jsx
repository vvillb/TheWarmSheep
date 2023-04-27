import { useRef } from 'react'
import { Card, Grid, Slide, Typography } from "@mui/material";
import { useInView } from 'react-intersection-observer';


const SlideIn = (props) => {
    const { children } = props;
    const { ref, inView } = useInView({
        /* Optional options */
        threshold: 0,
        triggerOnce: false
      });
    const trigger = {inView};

  console.log(trigger)
    return (  
    <Grid item ref={ref}>
    <Slide    in={inView} hysteresis={0.1} mountOnEnter   direction="left" timeout={1000}>
    <Typography   variant='h3' gutterBottom>
        {children}
    </Typography>    
    </Slide>
    </Grid>
    );
  }


export default SlideIn
