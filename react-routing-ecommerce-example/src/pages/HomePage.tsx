// src/pages/HomePage.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  const categories = [
    { id: 'electronics', name: 'Electronics' },
    { id: 'fashion', name: 'Fashion' },
    { id: 'books', name: 'Books' },
    { id: 'home-appliances', name: 'Home Appliances' },
  ];

  return (
    <div className="flex justify-center items-center w-full bg-gray-100">
      <div className="p-6 max-w-6xl w-full">
        <h1 className="text-3xl font-bold text-center mb-8">Shop Categories</h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map(category => (
            <div key={category.id} className="relative group">
              <div className="rounded-lg border border-gray-300 p-6 bg-white shadow-lg transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl text-center">
                <h2 className="text-xl font-semibold text-gray-800">{category.name}</h2>
                <div className="mt-4">
                  <Link to={`/category/${category.id}`} className="text-blue-600 font-medium hover:underline">
                    Explore {category.name}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
