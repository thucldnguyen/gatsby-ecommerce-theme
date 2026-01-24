import React, { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    // Load cart from localStorage on mount
    useEffect(() => {
        const savedCart = localStorage.getItem('rio_macca_cart');
        if (savedCart) {
            try {
                setCart(JSON.parse(savedCart));
            } catch (e) {
                console.error('Error parsing cart from localStorage', e);
            }
        }
    }, []);

    // Save cart to localStorage whenever it changes
    useEffect(() => {
        localStorage.setItem('rio_macca_cart', JSON.stringify(cart));
    }, [cart]);

    const addToCart = (product, quantity = 1) => {
        setCart((prevCart) => {
            const existingProductIndex = prevCart.findIndex(
                (item) => item.productCode === product.productCode
            );

            if (existingProductIndex > -1) {
                const newCart = [...prevCart];
                newCart[existingProductIndex].quantity += quantity;
                return newCart;
            }

            return [...prevCart, { ...product, quantity }];
        });
    };

    const removeFromCart = (productCode) => {
        setCart((prevCart) => prevCart.filter((item) => item.productCode !== productCode));
    };

    const updateQuantity = (productCode, quantity) => {
        setCart((prevCart) =>
            prevCart.map((item) =>
                item.productCode === productCode ? { ...item, quantity } : item
            )
        );
    };

    const clearCart = () => {
        setCart([]);
    };

    const cartTotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);
    const cartCount = cart.reduce((count, item) => count + item.quantity, 0);

    return (
        <CartContext.Provider
            value={{
                cart,
                addToCart,
                removeFromCart,
                updateQuantity,
                clearCart,
                cartTotal,
                cartCount,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

export default CartContext;
