import React, { createContext, useState, useEffect } from "react";

// Definimos el shape del contexto con valores por defecto:
export const CartContext = createContext({
  cartItems: [],
  addToCart:() => {},
  cartCount: 0,
});

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  // Leer carrito de localStorage al cargar
  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    }
  }, []);

  // Guardar carrito en localStorage al cambiar
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  // Agregar item al carrito
  const addToCart = (item) => {
    console.log(item);
    setCartItems((prev) => [...prev, item]);
  };

  // Obtener cantidad total de productos
  const cartCount = cartItems.length;

  return (
    <CartContext.Provider value={{ cartItems, addToCart, cartCount }}>
      {children}
    </CartContext.Provider>
  );
}
