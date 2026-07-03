import { createContext, useState } from "react";

export const CartContext = createContext();

function CartProvider({ children }) {

    const [cart, setCart] = useState([]);

    function addToCart(product) {

        const exists = cart.find(
            item => item.id === product.id
        );

        if (exists) {

            alert("Product already in cart");

            return;

        }

        setCart(prev => [...prev, product]);

    }

    function removeFromCart(id) {

        setCart(prev =>
            prev.filter(item => item.id !== id)
        );

    }

    function clearCart() {

        setCart([]);

    }

    return (

        <CartContext.Provider
            value={{
                cart,
                addToCart,
                removeFromCart,
                clearCart
            }}
        >

            {children}

        </CartContext.Provider>

    );

}

export default CartProvider;