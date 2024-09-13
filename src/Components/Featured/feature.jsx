import React, { useContext } from 'react';
import './feature.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { CartContext } from '../../Context/CartContext';
import toast from 'react-hot-toast';

function Feature() {
    const { setCart } = useContext(CartContext);



    const product1 = [
        {
            id: 1,
            title: "Quarter pounder With Cheese",
            price: 4.99,
            imgSrc: "/images/featured-card-img-1.png",
            rating: 3
        }
    ];

    const product2 = [
        {
            id: 2,
            title: "Sausage Burrito",
            price: 4.99,
            imgSrc: "/images/featured-card-img-2.png",
            rating: 4

        }
    ];

    const product3 = [
        {
            id: 3,
            title: "Sausage Burrito",
            price: 4.99,
            imgSrc: "/images/featured-card-img-3.png",
            rating: 2

        }
    ];

    const product4 = [
        {
            id: 4,
            title: "Quarter pounder With Cheese",
            price: 4.99,
            imgSrc: "/images/featured-card-img-4.png",
            rating: 3

        }
    ];

    const products = [...product1, ...product2, ...product3, ...product4];

    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.from(".hghlt-text", {
            y: '100%',
            opacity: 0,
            duration: 0.5,
            ease: 'power1.out',
            stagger: 0.1,
            scrollTrigger: {
                trigger: ".hghlt-text",
                scroller: 'body',
                start: "top 100%",
            }
        });

    }, []);
    const openToast = () => {
        toast.success('Sucessfully Add To Cart !', {
            style: {
                borderLeft: '5px solid green',
                padding: '16px',
                color: 'green',
                fontFamily: "Syne",
                width: "280px",
                fontWeight: 600
            },
        });

    }


    return (
        <>
            <div className="featured-item-section-main cntnt-section">
                <img src="/images/des-elem-img-1.png" alt="Sketch Burger" className="abs-img abs-img-right" />
                <div className="page-center">
                    <div className="feature-item-sec">
                        <div className="section-head feature-item-head">
                            <div className="item-head">the best of</div>
                            <div className="item-span-head">
                                <img src="/images/featured-sec-head-img.png" alt="Featured Section Heading Image" className="left-img" />
                                mcdonald's
                                <img src="/images/featured-sec-head-img.png" alt="Featured Section Heading Image" className="right-img" />
                            </div>
                            <div className="line"></div>
                            <div className="head-des">Discover the most-loved burgers and meals handpicked just for you!</div>
                        </div>

                        <div className="featured-itemCard-sec">
                            <div className="item-card-contain">
                                <img src="/images/arrow-elem-img.png" alt="Arrow Element Image" className="abs-img" />

                                {products.slice(0, 1).map((item) => (
                                    <div key={item.id} className={`featured-card featured-card${item.id}`}>
                                        <div className="featured-card-img">
                                            <img src={item.imgSrc} alt="Feature Card Image" />
                                        </div>
                                        <div className="featured-card-cntnt">
                                            <div className="card-cntnt">
                                                <div className="featured-card-title">{item.title}</div>
                                                <div className="featured-card-price">Price : ${item.price}</div>
                                            </div>
                                            <button className="featured-card-button cntnt-btn" id={`btn-featured${item.id}`} onClick={() => {
                                                setCart(prevCart => [

                                                    { title: item.title, price: item.price, img: item.imgSrc, rating: item.rating }, ...prevCart
                                                ]);
                                                openToast()
                                            }}
                                            >
                                                add to cart
                                                <div className="icon"><img src="/images/shopping-cart.png" alt="Shopping Cart Icon" /></div>
                                            </button>
                                        </div>
                                    </div>
                                ))}

                                <div className="item-dblCard-contain">
                                    {products.slice(1, 3).map((item) => (
                                        <div key={item.id} className={`featured-card featured-card${item.id}`}>
                                            <div className="featured-card-img">
                                                <img src={item.imgSrc} alt="Feature Card Image" />
                                            </div>
                                            <div className="featured-card-cntnt">
                                                <div className="card-cntnt">
                                                    <div className="featured-card-title">{item.title}</div>
                                                    <div className="featured-card-price">Price : ${item.price}</div>
                                                </div>
                                                <button className="featured-card-button cntnt-btn" id={`btn-featured${item.id}`} onClick={() => {
                                                    setCart(prevCart => [

                                                        { title: item.title, price: item.price, img: item.imgSrc, rating: item.rating }, ...prevCart
                                                    ]);
                                                    openToast()
                                                }}
                                                >
                                                    add to cart
                                                    <div className="icon"><img src="/images/shopping-cart.png" alt="Shopping Cart Icon" /></div>
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="item-card-contain item-contain-mt-30 item-card-contain2">
                                <div className="hghlt-text-contain">
                                    <img src="/images/featured-highlight-img.png" alt="Tomato Image" className="abs-img" />
                                    <div className="hghlt-text">Explore More</div>
                                    <div className="hghlt-text grdnt-text">Delicious</div>
                                    <div className="more-option-cntnt">
                                        <div className="hghlt-text">options</div>
                                        <div className="option-btn">
                                            <img src="/images/up-right-arrow.png" alt="Up Right Arrow" />
                                        </div>
                                    </div>
                                    <img src="/images/hghlt-text-blob.png" className="hghlt-text-blob" alt="Blob Image" />
                                </div>

                                {products.slice(3).map((item) => (
                                    <div key={item.id} className={`featured-card featured-card${item.id}`}>
                                        <div className="featured-card-img">
                                            <img src={item.imgSrc} alt="Feature Card Image" />
                                        </div>
                                        <div className="featured-card-cntnt">
                                            <div className="card-cntnt">
                                                <div className="featured-card-title">{item.title}</div>
                                                <div className="featured-card-price">Price : ${item.price}</div>
                                            </div>
                                            <button className="featured-card-button cntnt-btn" id={`btn-featured${item.id}`} onClick={() => {
                                                setCart(prevCart => [

                                                    { title: item.title, price: item.price, img: item.imgSrc, rating: item.rating }, ...prevCart
                                                ]);
                                                openToast()
                                            }}
                                            >
                                                add to cart
                                                <div className="icon"><img src="/images/shopping-cart.png" alt="Shopping Cart Icon" /></div>
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Feature;
