import React, { createContext, useState } from 'react';

export const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [isCartOpen, setIsCartOpen] = useState(false);

    const openCart = () => {
        setIsCartOpen(true);
      
    };

    const closeCart = () => {
        setIsCartOpen(false);
    };

    const clearCart = () => {
        setCart([]);
    };
    const deleteItem = (indexToDelete) => {
        setCart((prevCart) => prevCart.filter((item, index) => index !== indexToDelete));
    };

    return (
        <CartContext.Provider value={{ cart, setCart, deleteItem, openCart, clearCart, closeCart, isCartOpen }}>
            {children}
        </CartContext.Provider>
    );
};
