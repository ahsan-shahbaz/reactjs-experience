// src/components/Header.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../redux/store';

const Header: React.FC = () => {
  const cartItems = useAppSelector((state) => state.cart.items);

  return (
    <header className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex justify-between items-center px-6">
        <Link to="/" className="text-2xl font-bold">Shop</Link>
        <nav className="space-x-4">
          <Link to="/" className="hover:text-gray-300">Home</Link>
          <Link to="/cart" className="hover:text-gray-300">
            Cart ({cartItems.length})
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
