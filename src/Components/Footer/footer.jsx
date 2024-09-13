import React from 'react';
import "./footer.css"
import { useGSAP } from '@gsap/react';
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
function Footer() {
    gsap.registerPlugin(ScrollTrigger);

    useGSAP(() => {

        gsap.from(".footer-cntnt-contain", {
            scale: 1.1,
            duration: 1,
            ease: 'power1.inOut',
            scrollTrigger: {
                trigger: ".footer-cntnt-contain",
                scroller: "body",
                start: 'top 90%',
                end: "top 40%",
                scrub: 2,
            }
        })
    })
    return (
        <footer>
            <div className="footer-cntnt-contain">
                <div className="page-center">
                    <div className="footer-link-newsletter-contain">
                        <div className="newsletter-contain">
                            <div className="newsletter-head">subscribe to our newsletter.</div>
                            <div className="newsletter-input-contain">
                                <div className="newsletter-input-field">
                                    <input type="email" name="email" id="emailInput" placeholder="type your email here." />
                                </div>
                                <div className="subscribe-btn">
                                    <a href="#">subscribe</a>
                                    <div className="btn-icon">
                                        <img src="/images/up-right-arrow-black.png" alt="Arrow Icon" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="footer-link-contain">
                            <div className="footer-link-grp">
                                <div className="footer-link-head">quick links.</div>
                                <div className="link-grp">
                                    <a href="#" className="footerLink">home <img src="/images/up-right-arrow-white.png" alt="Arrow Icon" /></a>
                                    <a href="#" className="footerLink">about us <img src="/images/up-right-arrow-white.png" alt="Arrow Icon" /></a>
                                    <a href="#" className="footerLink">location <img src="/images/up-right-arrow-white.png" alt="Arrow Icon" /></a>
                                    <a href="#" className="footerLink">faqs <img src="/images/up-right-arrow-white.png" alt="Arrow Icon" /></a>
                                    <a href="#" className="footerLink">contact us <img src="/images/up-right-arrow-white.png" alt="Arrow Icon" /></a>
                                </div>
                            </div>
                            <div className="footer-link-grp">
                                <div className="footer-link-head">connect.</div>
                                <div className="link-grp">
                                    <a href="#" className="footerLink">instagram <img src="/images/up-right-arrow-white.png" alt="Arrow Icon" /></a>
                                    <a href="#" className="footerLink">twitter(X) <img src="/images/up-right-arrow-white.png" alt="Arrow Icon" /></a>
                                    <a href="#" className="footerLink">facebook <img src="/images/up-right-arrow-white.png" alt="Arrow Icon" /></a>
                                    <a href="#" className="footerLink">youtube <img src="/images/up-right-arrow-white.png" alt="Arrow Icon" /></a>
                                    <a href="#" className="footerLink">tumblr <img src="/images/up-right-arrow-white.png" alt="Arrow Icon" /></a>
                                    <a href="#" className="footerLink">spotify <img src="/images/up-right-arrow-white.png" alt="Arrow Icon" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-head-contain">
                        <div className="footer-head">McDonald's</div>
                    </div>
                    <div className="footer-bottom-link-contain">
                        <div className="footer-bottom-text">© 2017 - 2024 McDonald's. All Rights Reserved</div>
                        <div className="footer-bottom-link">
                            <a className="bottom-link footerLink" href="#">privacy policy</a>
                            <a className="bottom-link footerLink" href="#">terms & conditions</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
