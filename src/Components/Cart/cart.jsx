import React, { useContext, useEffect } from 'react';
import { CartContext } from '../../Context/CartContext';
import { FaRegTrashAlt, FaStar } from 'react-icons/fa';
import { MdOutlineKeyboardBackspace } from 'react-icons/md';
import { RiRefreshFill } from 'react-icons/ri';
import gsap from 'gsap';
import "./cart.css";
import { FaRegStarHalfStroke } from 'react-icons/fa6';

function Cart() {
    const { cart, deleteItem, clearCart, closeCart, isCartOpen } = useContext(CartContext);
    const subTotal = cart.reduce((total, item) => total + item.price, 0);
    const delivery = 2.5;
    const total = subTotal + delivery;

    useEffect(() => {
        if (isCartOpen) {
            document.body.classList.add('no-scroll');

            const headerSecTl = gsap.timeline();
            headerSecTl.to('.overlay', {
                opacity: 1,
                y: 0,
                duration: 0.2,
                ease: "power1.out",
            })

            headerSecTl.to(".cart_container", {
                right: 0,
                duration: 0.1,
            });
            if (cart.length === 0) {
                headerSecTl.from(".empty-cart-container img", {
                    y: 50,
                    opacity: 0,
                    duration: 0.5,
                    ease: "bounce.out",
                });
                headerSecTl.from(".empty-cart-container p", {
                    y: 50,
                    opacity: 0,
                    delay:0.1,
                    duration:0.1
                });
            }
        } else {
            document.body.classList.remove('no-scroll');
        }

        return () => document.body.classList.remove('no-scroll');
    }, [isCartOpen]);

    if (!isCartOpen) return null;

    return (
        <>
            <div className="overlay" onClick={closeCart}></div>
            <div className="cart_container">
                <div className="cart-header">
                    <div className="icon" onClick={closeCart}>
                        <MdOutlineKeyboardBackspace className='back' />
                    </div>
                    <h2>Your Cart</h2>
                    <div className="clear" onClick={clearCart}>
                        <p>Clear <RiRefreshFill /></p>
                    </div>
                </div>

                {cart.length === 0 ? (
                    <div className="empty-cart-container">
                        <img src="../images/emptyCart.svg" className="empty-cart-image" alt="Empty Cart" />
                        <p className="empty-cart-message">Add some items to your cart</p>
                    </div>
                ) : (
                    <>
                        <div className="cart_box">
                            {cart.map((item, index) => (
                                <div className="cart" key={index}>
                                    <div className="img">
                                        <img src={item.img} alt={item.title} />
                                    </div>
                                    <div className="content">
                                        <h1>{item.title}</h1>
                                        <div className="cart-deatils">
                                            <p>${item.price}</p>

                                            <div className="rating">
                                                {[...Array(Math.floor(item.rating))].map((_, i) => (
                                                    <FaStar key={i} className='star' />
                                                ))}
                                                {item.rating % 1 !== 0 && <FaStar className='star' />}
                                                <FaRegStarHalfStroke className='star' />
                                                </div>
                                        </div>
                                    </div>
                                    <div className="delete" onClick={() => deleteItem(index)}>
                                        <FaRegTrashAlt className='deleteIcon' />
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="cart-total-section">
                            <div className="cart-total-content">
                                <div className="cart-total-row">
                                    <p className="cart-total-label">Sub Total</p>
                                    <p className="cart-total-value">${subTotal.toFixed(2)}</p>
                                </div>
                                <div className="cart-total-row">
                                    <p className="cart-total-label">Delivery</p>
                                    <p className="cart-total-value">${delivery.toFixed(2)}</p>
                                </div>

                                <div className="divider"></div>

                                <div className="cart-total-row">
                                    <p className="cart-total-label total-label">Total</p>
                                    <p className="cart-total-value total-value">${total.toFixed(2)}</p>
                                </div>

                                <button className="checkout-button">
                                    Login to check out
                                </button>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </>
    );
}

export default Cart;
