// src/components/ProductList.tsx
import React from 'react';
import { useCart } from '../context/CartContext';

const products = [
  { id: 1, name: 'Laptop', price: 999 },
  { id: 2, name: 'Phone', price: 499 },
];

const ProductList: React.FC = () => {
  const { addItem } = useCart();

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Products</h2>
      {products.map(product => (
        <div key={product.id} className="border p-4 rounded-lg mb-4 shadow">
          <h3 className="text-xl font-semibold">{product.name}</h3>
          <p className="text-gray-600 mb-2">${product.price}</p>
          <button
            className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            onClick={() => addItem(product)}
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
