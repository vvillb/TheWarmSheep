import React , { useEffect, useRef } from 'react'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { Grid } from '@mui/material';
import backgroundImage from '../../assets/images/playaAsturias.jpg'
import '../components/parallax/styles.css'
import img1 from '../../assets/images/img1.jpg'
import img2 from '../../assets/images/img2.jpg'
import img3 from '../../assets/images/img3.jpg'
import './styles.css'




const ParallaxHero2 = () => {
    const containerRef = useRef();



    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        const sections = gsap.utils.toArray(".panel");
        gsap.to(sections, {
          xPercent: -100 * (sections.length - 1),
          ease: "none",
          scrollTrigger: {
            trigger: ".container",
            pin: true,
            scrub: 1,
            snap: 1 / (sections.length - 1),
            end: () => "+=" + containerRef.current.offsetWidth,
          },
        });
      }, []);
      
  return (
    <React.Fragment>

<section className="banner">
        <div className="banner-content">
                         <h1>The Warm Sheep</h1>
                         </div>
      </section>
      <div ref={containerRef} className="container">
        <section className="description panel blue">
                   <img src={img1} />
                    <h2>ES6</h2>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi
                        labore eius cum perferendis consectetur culpa laboriosam quam, sed
                        ea nihil, suscipit, quidem est expedita. Nihil enim obcaecati
                        deleniti eaque sed.
                        </p>
                        </section>
        <section className="panel red">
                <img src={img2}/>
                <h2>ES6</h2>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi
                    labore eius cum perferendis consectetur culpa laboriosam quam, sed
                    ea nihil, suscipit, quidem est expedita. Nihil enim obcaecati
                    deleniti eaque sed.
                </p>   
                </section>
        <section className="description panel blue">
                 <img src={img3}/>
                <h2>ES6</h2>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi
                    labore eius cum perferendis consectetur culpa laboriosam quam, sed
                    ea nihil, suscipit, quidem est expedita. Nihil enim obcaecati
                    deleniti eaque sed.
                    </p>
                    </section>
        <section className="panel red">
          <img src={backgroundImage} />
          <h2>React JS</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi
            labore eius cum perferendis consectetur culpa laboriosam quam, sed
            ea nihil, suscipit, quidem est expedita. Nihil enim obcaecati
            deleniti eaque sed.
          </p>
        </section>
      </div>
      </React.Fragment>
  );
};

export default ParallaxHero2
