import React from 'react';
import "./navbar.css";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useContext } from 'react';
import { CartContext } from '../../Context/CartContext';

function Navbar() {
    const { openCart } = useContext(CartContext);
   
    const openMenu = () => {
        gsap.set(".menu-ctgr-title .ctgr-title", { y: 100, opacity: 0 });

        const menuOpenTl = gsap.timeline();

        menuOpenTl.to(".hum-menu-container", {
            top: 0,
            duration: 1,
            ease: 'power3.inOut',
        })
            .to(".menu-ctgr-title .ctgr-title", {
                y: 0,
                stagger: 0.2,
                opacity: 1,
                delay: -0.4,
                duration: 0.5,
                ease: 'power1.inOut',
            });
    }

    const closemenu = () => {
        const menuCloseTl = gsap.timeline();

        menuCloseTl.to(".hum-menu-container", {
            top: "-150%",
            duration: 1,
            ease: 'power3.inOut',
        });
    }

    useGSAP(() => {
        var tl = gsap.timeline();
        tl.from('.navbar .logo, .navbar .navbar-right-cntnt', {
            opacity: 0,
            y: -100,
            duration: 1,
            stagger: 0.4,
        })
    })




    return (
        <>
            {/* ===================== MENUBAR ====================== */}
            {openMenu && (
                <div className="hum-menu-container">
                    <div className="menu-cntnt-wrapper">
                        <div className="menu-ctgr-wrapper">
                            <div className="menu-ctgr-item">
                                <div className="menu-ctgr-title">
                                    <img
                                        src="/images/up-right-arrow-black.png"
                                        alt="Arrow Icon"
                                        className="title-arrow title-default-arrow"
                                    />
                                    <div className="ctgr-title">home.</div>
                                </div>
                                <div
                                    className="humMenu-CloseBtn-contain"
                                    onClick={closemenu}
                                >
                                    <div className="menu-close-btn" id="humMenu_closeBtn"></div>
                                </div>
                            </div>
                            <div className="menu-ctgr-item">
                                <div className="menu-ctgr-title">
                                    <img
                                        src="/images/up-right-arrow-black.png"
                                        alt="Arrow Icon"
                                        className="title-arrow title-default-arrow"
                                    />
                                    <div className="ctgr-title">menu.</div>
                                </div>
                                <div className="menu-caret-icon">
                                    <i className="fa-solid fa-angle-right"></i>
                                </div>
                            </div>

                            <div className="menu-ctgr-item">
                                <div className="menu-ctgr-title">
                                    <img
                                        src="/images/up-right-arrow-black.png"
                                        alt="Arrow Icon"
                                        className="title-arrow title-default-arrow"
                                    />
                                    <div className="ctgr-title">deals.</div>
                                </div>
                                <div className="menu-caret-icon">
                                    <i className="fa-solid fa-angle-right"></i>
                                </div>
                            </div> <div className="menu-ctgr-item">
                                <div className="menu-ctgr-title">
                                    <img
                                        src="/images/up-right-arrow-black.png"
                                        alt="Arrow Icon"
                                        className="title-arrow title-default-arrow"
                                    />
                                    <div className="ctgr-title">locations.</div>
                                </div>
                                <div className="menu-caret-icon">
                                    <i className="fa-solid fa-angle-right"></i>
                                </div>
                            </div> <div className="menu-ctgr-item">
                                <div className="menu-ctgr-title">
                                    <img
                                        src="/images/up-right-arrow-black.png"
                                        alt="Arrow Icon"
                                        className="title-arrow title-default-arrow"
                                    />
                                    <div className="ctgr-title">more..</div>
                                </div>
                                <div className="menu-caret-icon">
                                    <i className="fa-solid fa-angle-right"></i>
                                </div>
                            </div>
                        </div>
                        <div className="menu-connect-link-wrapper">
                            <a href="#" className="menu-connect-link">facebook</a>
                            <a href="#" className="menu-connect-link">youtube</a>
                            <a href="#" className="menu-connect-link">instagram</a>
                            <a href="#" className="menu-connect-link">twitter(X)</a>
                            <a href="#" className="menu-connect-link">tumblr</a>
                            <a href="#" className="menu-connect-link">spotify</a>
                        </div>
                    </div>
                </div>
            )}

            {/* ===================== NAVBAR ====================== */}
            <div className="page-center">
                <header className="header">
                    <div className="navbar">
                        <div className="logo">
                            <a href="#"><img  src="/images/nav-logo.png" alt="McDonald Logo" /></a>
                        </div>
                        <div className="navbar-right-cntnt">
                            <div
                                className="navLink_barBtn"
                                id="humMenu_openBtn"
                                onClick={openMenu}
                            >
                                <div className="bar"></div>
                                <div className="bar"></div>
                                <div className="bar"></div>
                            </div>
                            <div className="cart-menu" onClick={openCart}>
                                <div className="cart-menu-icon">
                                    <img src="/images/shopping-cart.png" alt="Shopping cart icon" />
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
            </div>
        </>
    );
}

export default Navbar;
