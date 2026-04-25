import { createContext, useState } from "react";
import type { CartItem, CartContextType } from "./types";
import { useContext } from "react";

export const CartContext = createContext<CartContextType | null>(null);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (item: CartItem) => setCart([...cart, item]);
  const clearCart = () => setCart([]);

  return (
    <CartContext.Provider value={{ cart, addToCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  
  if (!context) {
    throw new Error("useCart must be used inside a CartProvider! You forgot to wrap your app.");
  }
  
  return context;
};