import React from 'react'
import "./hero.css"
import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import { CSSRulePlugin } from 'gsap/all';
 
function Hero() {

    useGSAP(()=>{
        let headerSecTl = gsap.timeline();
        let activeItemIndicator = CSSRulePlugin.getRule(".bodyImg::after");

        headerSecTl.from('.bodyText', {
            opacity: 0,
            y: 100,
            duration: 2,
            ease: "Power1.out",
        })

        headerSecTl.to(activeItemIndicator, {
            width: "0%",
            duration: 0.5,
        })
    })
    return (
        <>
            <div className="page-center">
                <div className="header_body">
                    <div className="bodyText">
                        <div className="bodyText-content" id="heroHead">
                            Welcome to the <span>Golden</span> Arches Where Every Bite is a <span>Smile!</span>
                        </div>
                    </div>
                    <div className="bodyImg">
                        <img src="/images/body-img.jpg" alt="Burger Image" />
                    </div>
                    <div className="hero-order-btn">

                    </div>
                </div>
            </div>



        </>
    )
}

export default Hero