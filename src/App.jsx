import React, { useRef } from "react";
import Navbar from './Components/Navbar/navbar'
import Hero from './Components/Hero/hero'
import TextSlider from './Components/TextSlider/textSlider'
import Feature from './Components/Featured/feature'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import Exclusive from './Components/Exclusive/exclusive'
import Inside from './Components/Inside/inside'
import TextMoving from './Components/TextMoving/textMoving'
import Download from './Components/Downloads/download'
import Footer from './Components/Footer/footer'
import Cart from './Components/Cart/cart'
import { Toaster } from 'react-hot-toast'


function App() {

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    const absRightImg_Elem = gsap.utils.toArray(".abs-img-right");
    absRightImg_Elem.forEach(element => {
      gsap.from(element, {
        opacity: 0,
        x: "100px",
        duration: 1,
        ease: 'power1.inOut',
        stagger: 0.5,
        scrollTrigger: {
          trigger: element,
          scroller: "body",
          start: "top 80%",
          end: "top 60%",
          scrub: 1,
        }
      })
    });
    const absLeftImg_Elem = gsap.utils.toArray(".abs-img-left");
    absLeftImg_Elem.forEach(element => {
      gsap.from(element, {
        opacity: 0,
        x: "-100px",
        duration: 1,
        ease: 'power1.inOut',
        stagger: 0.5,
        scrollTrigger: {
          trigger: element,
          scroller: "body",
          start: "top 80%",
          end: "top 60%",
          scrub: 1,
        }
      })
    });

  }, []);

  return (
    <>
      <div class="wrapper" id="main" >
        <Toaster
          reverseOrder={false}
        />
        <Navbar />
        <Cart />
        <Hero />
        <TextSlider />
        <Feature />
        <Exclusive />
        <Inside />
        <TextMoving />
        <Download />
        <Footer />
      </div>
    </>
  )
}

export default App
