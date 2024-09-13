import React, { useEffect } from 'react';
import "./exclusive.css";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CSSRulePlugin } from 'gsap/CSSRulePlugin';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, CSSRulePlugin);

function Exclusive() {
    useGSAP(() => {

        gsap.from(".deal-cntnt-head", {
            y: '-100%',
            opacity: 0,
            duration: 1,
            ease: 'power3.inOut',
            stagger: 0.1,
            scrollTrigger: {
                trigger: '.deal-cntnt-head',
                scroller: "body",
                start: 'top 70%',
                end: "top 20%",
            }
        });


        gsap.from(".deal-cntnt-des", {
            y: '100%',
            opacity: 0,
            duration: 1,
            ease: 'power3.inOut',
            stagger: 0.1,
            scrollTrigger: {
                trigger: '.deal-cntnt-des',
                scroller: "body",
               
            }
        });
        let activeItemIndicator = CSSRulePlugin.getRule(".deal-sec-img::after");

        gsap.to(activeItemIndicator, {
            width: "0%",
            duration: 1,
            ease: 'power3.inOut',
            scrollTrigger: {
                trigger: ".deal-sec-img",
                scroller: "body",
              
            }
        });


    }, []);

    return (
        <>
            <div className="exclusive-deal-section-main cntnt-section">
                <img src="/images/des-elem-img-2.png" alt="Sketch Tomato" className="abs-img abs-img-left" />
                <div className="page-center">
                    <div className="exclusive-deal-contain">
                        <div className="section-head deal-sec-head">
                            <div className="item-head">exclusive</div>
                            <div className="item-span-head">
                                <img src="/images/deals-sec-head-img.png" alt="Deal Section Heading Image" className="left-img" />
                                mcdonald's deals
                                <img src="/images/deals-sec-head-img.png" alt="Deal Section Heading Image" className="right-img" />
                            </div>
                            <div className="line"></div>
                            <div className="head-des">Don't miss out on our exclusive offers and special deals!</div>
                        </div>

                        <div className="deal-cntnt-contain">
                            <div className="deal-cntnt">
                                <div className="deal-cntnt-head">Free Large Fries w/ $1 minimum Purchase</div>
                                <div className="deal-cntnt-des">Free large Fries to keep you company. Download the app and get 'em with your first purchase of $1+.* Every $1 you spend earns 100 points, redeemable for free food.</div>
                            </div>
                            <div className="deal-sec-img">
                                <img src="/images/Exclusive-Deal-image.png" alt="Deal Section Image" />
                            </div>
                            <div className="deal-btn cntnt-btn">
                                get free large fries
                                <div className="icon">
                                    <img src="/images/up-right-arrow-black.png" alt="Arrow Icon" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Exclusive;
