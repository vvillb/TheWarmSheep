import { useRef } from 'react'
import {Fade, Slide, useScrollTrigger } from "@mui/material";
import useOnScreen from '../../../assets/hooks/useOnScreen';
import { useInView } from 'react-intersection-observer';


const ShowOnScroll = (props) => {
    const { children } = props;
    const { ref, inView, entry } = useInView({
        /* Optional options */
        threshold: 0,
      });
    const trigger = {inView};

  console.log(trigger)
    return (
      <Fade   ref={ref} in={inView} hysteresis={0.1} mountOnEnter   direction="up" >
        {children}
      </Fade>
    );
  }


export default ShowOnScroll
