import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {

  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem("cart");

    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product) => {

    const exists = cartItems.find(
      (item) => item.id === product.id
    );

    if (exists) return;

    setCartItems((prevItems) => [...prevItems, product]);
  };

  const removeFromCart = (id) => {

    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== id)
    );

  };

  const clearCart = () => {

    setCartItems([]);

  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);