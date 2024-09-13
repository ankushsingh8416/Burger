import React from 'react'
import "./inside.css"
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
function Inside() {
    gsap.registerPlugin(ScrollTrigger);

    useGSAP(() => {
        gsap.from(".what-inside-main-img", {
            scale: 0.5,
            duration: 1,
            ease: 'power1.inOut',
            scrollTrigger: {
                trigger: ".what-inside-main-img",
                scroller: "body",

            }
        })


        gsap.from(".layer-right-cntnt", {
            x: "100px",
            opacity: 0,
            duration: 1,
            ease: 'power1.inOut',
            scrollTrigger: {
                trigger: ".layer-right-cntnt",
                scroller: "body",
 
            }
        })
        gsap.from(".layer-left-cntnt", {
            x: "-100px",
            opacity: 0,
            duration: 1,
            ease: 'power1.inOut',
            scrollTrigger: {
                trigger: ".layer-left-cntnt",
                scroller: "body",

            }
        })
    })




    return (
        <>
            <div className="what-inside-sec-main cntnt-section">
                <div className="page-center">
                    <div className="what-inside-cntnt-contain">
                        <div className="what-inside-img-contain">
                            <img src="/images/what-inside-sec-img.png" alt="Burger With Layers Image" className="what-inside-main-img" />

                            <div className="layer-arrow-abs-img layer-arrow1">
                                <img src="/images/what-inside-sec-arrow-1.png" alt="Arrow Image" />
                            </div>
                            <div className="layer-arrow-abs-img layer-arrow2">
                                <img src="/images/what-inside-sec-arrow-2.png" alt="Arrow Image" />
                            </div>
                            <div className="layer-arrow-abs-img layer-arrow3">
                                <img src="/images/what-inside-sec-arrow-3.png" alt="Arrow Image" />
                            </div>
                            <div className="layer-arrow-abs-img layer-arrow4">
                                <img src="/images/what-inside-sec-arrow-1.png" alt="Arrow Image" />
                            </div>
                            <div className="layer-arrow-abs-img layer-arrow5">
                                <img src="/images/what-inside-sec-arrow-1.png" alt="Arrow Image" />
                            </div>
                            <div className="layer-arrow-abs-img layer-arrow6">
                                <img src="/images/what-inside-sec-arrow-2.png" alt="Arrow Image" />
                            </div>
                        </div>
                        <div className="layer-abs-elem layer-bun-cntnt layer-right-cntnt">
                            <div className="layer-abs-cntnt">
                                <div className="layer-des-cntnt">Soft and toasted to perfection</div>
                                <div className="layer-head-cntnt">bun</div>
                                <div className="layer-img-cntnt">
                                    <img src="/images/what-inside-bun-img.png" alt="Burger Bun" />
                                </div>
                            </div>
                        </div>
                        <div className="layer-abs-elem layer-onion-cntnt layer-right-cntnt">
                            <div className="layer-abs-cntnt">
                                <div className="layer-img-cntnt">
                                    <img src="/images/what-inside-onion-img.png" alt="Burger Bun" />
                                </div>
                                <div className="layer-head-cntnt">onion</div>
                                <div className="layer-des-cntnt">Zesty and finely chopped</div>
                            </div>
                        </div>
                        <div className="layer-abs-elem layer-cheese-cntnt layer-right-cntnt">
                            <div className="layer-abs-cntnt">
                                <div className="layer-img-cntnt">
                                    <img src="/images/what-inside-cheese-lettuce.png" alt="Burger Bun" />
                                </div>
                                <div className="layer-head-cntnt">cheese</div>
                                <div className="layer-des-cntnt">Melted to creamy perfection</div>
                            </div>
                        </div>
                        <div className="layer-abs-elem layer-lettuce-cntnt layer-left-cntnt">
                            <div className="layer-abs-cntnt">
                                <div className="layer-img-cntnt">
                                    <img src="/images/what-inside-lettuce-img.png" alt="Burger Bun" />
                                </div>
                                <div className="layer-head-cntnt">lettuce</div>
                                <div className="layer-des-cntnt">Fresh and crispy for that<br />perfect crunch</div>
                            </div>
                        </div>
                        <div className="layer-abs-elem layer-tomato-cntnt layer-left-cntnt">
                            <div className="layer-abs-cntnt">
                                <div className="layer-img-cntnt">
                                    <img src="/images/what-inside-tomato-lettuce.png" alt="Burger Bun" />
                                </div>
                                <div className="layer-head-cntnt">tomato</div>
                                <div className="layer-des-cntnt">Juicy slices for a burst of freshness</div>
                            </div>
                        </div>
                        <div className="layer-abs-elem layer-beef-cntnt layer-left-cntnt">
                            <div className="layer-abs-cntnt">
                                <div className="layer-img-cntnt">
                                    <img src="/images/what-inside-beef-img.png" alt="Burger Bun" />
                                </div>
                                <div className="layer-head-cntnt">beef</div>
                                <div className="layer-des-cntnt">Juicy, flavorful, and cooked to order</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



        </>
    )
}

export default Inside