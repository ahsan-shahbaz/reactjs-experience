// src/pages/CategoryPage.tsx
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Sidebar from '../components/SideBar';
import { products } from '../data/data';
import { Product } from '../types';
import { useAppDispatch } from '../redux/store';
import { addItem } from '../redux/slices/cartSlice';
import { FaCartPlus } from 'react-icons/fa';

const CategoryPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useAppDispatch();

  // Filter products by category
  const categoryProducts = products.filter((product) => product.category === id);

  const handleAddToCart = (product: Product) => {
    dispatch(addItem({
      id: product.id,
      name: product.name,
      price: product.salePrice || product.price, // Use sale price if available
      quantity: 1,
    }));
  };

  return (
    <div className="container mx-auto flex">
      <Sidebar />
      <div className="flex-1 p-4">
        <h2 className="text-2xl font-bold mb-4">{id} Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categoryProducts.map((product) => (
            <div key={product.id} className="border p-4 rounded-lg shadow-md flex flex-col items-start">
              <Link to={`/product/${product.id}`} className="text-xl font-semibold text-blue-600 mb-2">
                {product.name}
              </Link>
              <p className="text-gray-700">
                ${product.salePrice ? product.salePrice.toFixed(2) : product.price.toFixed(2)}
              </p>
              {product.salePrice && (
                <p className="text-sm text-red-500 line-through">
                  ${product.price.toFixed(2)} <span className="text-green-500">Sale!</span>
                </p>
              )}
              {product.stock === 0 ? (
                <p className="text-sm text-gray-500">Out of Stock</p>
              ) : (
                <p className="text-sm text-gray-700">Stock: {product.stock}</p>
              )}

              {/* Product badges with Tailwind utilities */}
              <div className="mt-2 flex gap-2">
                {product.hotItem && (
                  <span className="inline-block bg-yellow-200 text-yellow-800 text-xs font-semibold py-1 px-2 rounded-full">
                    🔥 Hot Item
                  </span>
                )}
                {product.mostSelling && (
                  <span className="inline-block bg-blue-200 text-blue-800 text-xs font-semibold py-1 px-2 rounded-full">
                    Best Seller
                  </span>
                )}
              </div>

              <div className="mt-4 flex gap-2">
                <Link
                  to={`/product/${product.id}`}
                  className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 flex items-center gap-2"
                >
                  <small>View Product</small>
                </Link>
                <button
                  onClick={() => handleAddToCart(product)}
                  className="bg-green-600 text-white py-2 px-4 rounded-lg flex items-center gap-2 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
                >
                  <FaCartPlus className="text-white" /> {/* Cart Icon */}
                  <small>Add to Cart</small>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
