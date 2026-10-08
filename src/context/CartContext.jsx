import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  function addToCart(burger, qty) {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === burger.id);
      if (existing) {
        return prev.map((item) =>
          item.id === burger.id ? { ...item, qty: item.qty + qty } : item,
        );
      }
      return [...prev, { ...burger, qty }];
    });
  }

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
