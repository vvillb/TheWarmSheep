import React , { useEffect, useRef } from 'react'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { Grid } from '@mui/material';
import backgroundImage from '../../assets/images/playaAsturias.jpg'
import '../components/parallax/styles.css'
import img1 from '../../assets/images/img1.jpg'
import img2 from '../../assets/images/img2.jpg'
import img3 from '../../assets/images/img3.jpg'





const ParallaxHero2 = () => {
    const containerRef = useRef();


    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        const sections = gsap.utils.toArray(".panel");
        gsap.to(sections, {
          xPercent: -100 * (sections.length - 1),
          ease: "none",
          scrollTrigger: {
            trigger: "#parallax-container",
            pin: true,
            scrub: 1,
            snap: 1 / (sections.length - 1),
            end: () => "+=" + containerRef.current.offsetWidth,
          },
        });
      }, []);

      
  return (
    <React.Fragment>

        <Grid container
        
            sx={{
                //this is a section with classname banner   
                //all sections
                display:'flex',
                flexDirection:'column',
                justifyContent:'center',
                alignItems:'center',
                height:'100vh',
                padding:'0 80px'  ,   
                //   
                //backgroundImage: `url(${backgroundImage})`  ,   
                //banner:
                flexDirection:'row',
                textAlign:'left',
                gap:'30px',
                backgroundSize:'cover',
                backgroundPosition:'center',
                color:'white' ,
                backgroundImage: `url(${backgroundImage})`  ,   


                   }}
                >
                    <Grid item
                    //this is a div with classname banner-content
                    sx={{
                        //banner content:
                        position:'absolute',
                        top:0,
                        left:0,
                        width:'100%',
                        height:'100vh',
                        display:'flex',
                        flexDirection:'column',
                        alignItems:'center',
                        justifyContent:'center',
                        background: 'linear-gradient(rgb(81 119 124 / 0%), rgb(81 119 124 / 100%) 90%)' 

                    }}
                    >
                         <h1>The Warm Sheep</h1>
                    </Grid>
                
            
        </Grid>


        <Grid container ref={containerRef}
            className='container'
            id='parallax-container'
            // this is a div with clasname container
            sx={{
                //container:
                width:'400%',
                height:'100vh',
                display:'flex',
                flexWrap:'nowrap',
                backgroundColor:'#9bbabd'
                //
                
            }}
            >
                            
            <Grid item
            // this is a section with className="panel red"
            className='panel'
            sx={{
                //all sections
                display:'flex',
                flexDirection:'column',
                justifyContent:'center',
                alignItems:'center',
                height:'100vh',
                padding:'0 80px'  ,   
                //
                //panel
                width:'100%',
                height:'100%',
            }}
            >
                   <img src={img1} 
                 sx={{
                    width:'170px',
                    height:'170px',
                    objectFit:'contain'
                 }}/>
                <h2>ES6</h2>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi
                    labore eius cum perferendis consectetur culpa laboriosam quam, sed
                    ea nihil, suscipit, quidem est expedita. Nihil enim obcaecati
                    deleniti eaque sed.
                </p>   
            </Grid>
            <Grid item
            // this is a section with className="description panel blue"
            className='panel'
            sx={{
                //all sections
                display:'flex',
                flexDirection:'column',
                justifyContent:'center',
                alignItems:'center',
                height:'100vh',
                padding:'0 80px'  ,   
                //
                //panel
                width:'100%',
                height:'100%',
            }}
            >
                <img src={img2} 
                 sx={{
                    width:'170px',
                    height:'170px',
                    objectFit:'contain'
                 }}/>
                <h2>ES6</h2>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi
                    labore eius cum perferendis consectetur culpa laboriosam quam, sed
                    ea nihil, suscipit, quidem est expedita. Nihil enim obcaecati
                    deleniti eaque sed.
                </p>   
            </Grid>
            <Grid item
            // this is a section with className="panel red"
            className='panel'
            sx={{
                //all sections
                display:'flex',
                flexDirection:'column',
                justifyContent:'center',
                alignItems:'center',
                height:'100vh',
                padding:'0 80px'  ,   
                //
                //panel
                width:'100%',
                height:'100%',
            }}
            >
                 <img src={img3} 
                 sx={{
                    width:'170px',
                    height:'170px',
                    objectFit:'contain'
                 }}/>
                <h2>ES6</h2>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi
                    labore eius cum perferendis consectetur culpa laboriosam quam, sed
                    ea nihil, suscipit, quidem est expedita. Nihil enim obcaecati
                    deleniti eaque sed.
                </p>                 
            </Grid>
        </Grid>

      </React.Fragment>
  )
}

export default ParallaxHero2
