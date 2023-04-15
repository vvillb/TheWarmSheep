import { Grid, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";


 const ParallaxHero = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => setScrollPosition(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  return(
    <React.Fragment>
        <Grid container>
        <Grid item
        // banner container
        sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            //backgroundImage: 'url(../../../assets/images/playa1.jpg)',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: '50% 70%',
            height: '600px',
            transition: '0.1s linear',
            backgroundSize: `${(window.outerHeight - scrollPosition) / 3}%`,
            padding:'0 10%'
          }}>
            <Typography variant='h1' 
          sx={{
              textShadow:'0px 0px 20px rgba(0,0,0,0.4)',
              fontSize:'(5rem,8vw,20rem)',
              textAlign: 'left',
              position: 'absolute',
              width: '470px',
              height: '80px',
              flexDirection: 'column',
              flexWrap:'wrap' ,
              transform:'translate(30%,150%)'}}>
              The Warm Sheep
          </Typography>
          <Typography variant='h3'
          sx={{
            fontSize:'clamp(3rem,6vw,15rem)',
              position: 'absolute',
              width: '470px',
              height: '80px',
              flexDirection: 'column' ,
              flexWrap:'wrap' ,
              transform:'translate(100%,500%)'

          }}>
              Handmade Knits
          </Typography>

        </Grid>
        <Grid item
        // container
        >
          <h2>Tejidos y paisajes</h2>
          <p>Cupidatat consectetur consectetur proident irure qui sunt velit ad ad occaecat et laboris. Aliqua eu nulla dolore eiusmod excepteur proident deserunt enim adipisicing qui. Ad minim consectetur ex exercitation proident nulla aute tempor eu laboris. Elit mollit eiusmod dolore aute ullamco occaecat culpa labore sit. Commodo exercitation esse minim do enim ea culpa pariatur in aliquip exercitation cupidatat consectetur. Tempor mollit quis elit Lorem aliqua magna elit culpa in mollit sit laboris sint dolor. Aute nisi excepteur nisi magna laboris deserunt Lorem duis ea est dolore occaecat qui.</p>
          <p>Dolor duis et laborum commodo elit sunt proident ea aliquip excepteur adipisicing. Ullamco tempor elit consequat magna. Consectetur adipisicing sunt nulla reprehenderit laboris officia anim.</p>
          <p>Enim exercitation dolore pariatur irure reprehenderit. Labore magna veniam pariatur laboris nisi eu mollit minim nulla duis ut. Mollit non est nostrud sint irure qui. Eu ipsum officia adipisicing sint proident culpa deserunt ad qui tempor. Magna quis officia consequat irure culpa officia mollit.</p>
        </Grid>
        </Grid>
    </React.Fragment>
  );

}

export default ParallaxHero;