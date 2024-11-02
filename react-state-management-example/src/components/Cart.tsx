// src/components/Cart.tsx
import React from 'react';
import { useCart } from '../context/CartContext';

const Cart: React.FC = () => {
  const { cart, cartTotal, removeItem } = useCart();

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Cart</h2>
      <div className="max-h-60 overflow-y-auto border p-4 rounded-lg shadow mb-4">
        {cart.length === 0 ? (
          <p className="text-gray-600">Your cart is empty.</p>
        ) : (
          cart.map((item) => (
            <div key={item.uuid} className="border-b p-4 last:border-b-0">
              <h3 className="text-lg font-semibold">{item.name}</h3>
              <p className="text-gray-600">${item.price}</p>
              <button
                className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                onClick={() => removeItem(item.uuid)}
              >
                Remove
              </button>
            </div>
          ))
        )}
      </div>
      <div className="mt-4">
        <h3 className="text-xl font-bold">Total: ${cartTotal.toFixed(2)}</h3>
      </div>
    </div>
  );
};

export default Cart;
