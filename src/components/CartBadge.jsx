import React, { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

export default function CartBadge() {
  const { cartCount } = useContext(CartContext);

  return (
    <div className="relative ml-4">
      <a href="/carrito" aria-label="Ver carrito">
        <svg className="w-8 h-8 text-white hover:text-yellow-400 transition-colors" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4"></path>
          <circle cx="9" cy="19" r="2"></circle>
          <circle cx="17" cy="19" r="2"></circle>
        </svg>
      </a>
      {cartCount > 0 && (
        <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
          {cartCount}
        </span>
      )}
    </div>
  );
}
