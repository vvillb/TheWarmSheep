import { useRef } from 'react'
import { Slide } from "@mui/material";
import { useInView } from 'react-intersection-observer';


const SlideIn = (props) => {
    const { children } = props;
    const { ref, inView } = useInView({
        /* Optional options */
        threshold: 0,
      });
    const trigger = {inView};

  console.log(trigger)
    return (
      <Slide   ref={ref} in={inView} hysteresis={0.1} mountOnEnter   direction="up" >
        {children}
      </Slide>
    );
  }


export default SlideIn
