import React, { useState, useEffect } from 'react';
import "./popup.css";

function Popup() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 9000); 
        return () => clearTimeout(timer);
    }, []);

    const handleClose = () => {
        setIsVisible(false);
    };

    return (
        <>
            {isVisible && (
                <div id="popup_container">
                    <div id="popup_box">
                        <div className="image">
                            <img src="/images/popup.jpg" alt="" loading="lazy" />
                        </div>
                        <div className="content">
                            <div className="menu" onClick={handleClose}>
                                <i className="fa-solid fa-xmark"></i>
                            </div>
                            <h1>Ankush Rajput</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi temporibus quo dolor ipsam quidem facere optio doloremque, consectetur, esse, placeat architecto mollitia ut veritatis nostrum eum eveniet harum itaque. Eos.</p>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default Popup;
