import React, { useEffect } from 'react';
import './textSlider.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

function TextSlider() {
    useEffect(() => {
        gsap.to('.text-slide-contain', {
            x: "-30%",
            duration: 1,
            ease: 'power1.inOut',
            scrollTrigger: {
                trigger: ".text-slide-contain",
                scroller: 'body',
                start: "top 90%",
                end: "top 0%",
                scrub: 2,
            }
        });


    }, []);

    return (
        <div className="text-slider-container">
            <div className="text-slide-contain">
                <div className="text-slide-head">
                    I'm loving it <img src="/images/up-right-arrow.png" alt="Arrow Icon" />
                </div>
                <div className="text-slide-head">
                    I'm loving it <img src="/images/up-right-arrow.png" alt="Arrow Icon" />
                </div>
                <div className="text-slide-head">
                    I'm loving it <img src="/images/up-right-arrow.png" alt="Arrow Icon" />
                </div>
                <div className="text-slide-head">
                    I'm loving it <img src="/images/up-right-arrow.png" alt="Arrow Icon" />
                </div>
            </div>
        </div>
    );
}

export default TextSlider;
