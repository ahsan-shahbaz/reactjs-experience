import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../data/data';
import { useAppDispatch } from '../redux/store';
import { addItem } from '../redux/slices/cartSlice';
import { FaCartPlus } from 'react-icons/fa'; // Cart icon

const ProductPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useAppDispatch();

  // Find the selected product by ID
  const product = products.find((p) => p.id === id);

  // Find similar products from the same category (excluding the current product)
  const similarProducts = products.filter(
    (p) => p.category === product?.category && p.id !== product?.id
  );

  if (!product) {
    return <p>Product not found</p>;
  }

  const handleAddToCart = () => {
    dispatch(addItem({
      id: product.id,
      name: product.name,
      price: product.salePrice || product.price, // Use sale price if available
      quantity: 1,
    }));
  };

  return (
    <div className="container mx-auto p-6">
      <div className="flex">
        <div className="flex-1">
          <h1 className="text-2xl font-bold">{product.name}</h1>
          <p className="mt-2 text-gray-700">{product.description}</p>

          {/* Display Sale Price if available */}
          <p className="mt-4 text-lg font-semibold">
            Price: ${product.salePrice ? product.salePrice.toFixed(2) : product.price.toFixed(2)}
          </p>

          {product.salePrice && (
            <p className="text-sm text-red-500 line-through">
              ${product.price.toFixed(2)} <span className="text-green-500">Sale!</span>
            </p>
          )}

          {/* Display Stock availability */}
          {product.stock === 0 ? (
            <p className="text-sm text-gray-500">Out of Stock</p>
          ) : (
            <p className="text-sm text-gray-700">Stock: {product.stock}</p>
          )}

          {/* Hot Item and Best Seller Labels with Tailwind Badges */}
          {product.hotItem && (
            <span className="inline-flex items-center px-3 py-1 text-sm font-medium text-yellow-800 bg-yellow-100 rounded-full">
              🔥 Hot Item!
            </span>
          )}
          {product.mostSelling && (
            <span className="inline-flex items-center px-3 py-1 text-sm font-medium text-blue-800 bg-blue-100 rounded-full">
              Best Seller
            </span>
          )}

          {/* Add to Cart Button with icon and updated color */}
          <button
            onClick={handleAddToCart}
            className="mt-6 bg-green-600 text-white py-2 px-4 rounded-lg flex items-center justify-center gap-2 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
          >
            <FaCartPlus className="text-white" /> {/* Cart Icon */}
            <small>Add to Cart</small>
          </button>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Similar Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {similarProducts.map((similarProduct) => (
            <div key={similarProduct.id} className="border p-4 rounded-lg shadow-md flex flex-col items-start">
              <Link to={`/product/${similarProduct.id}`} className="text-lg font-semibold text-blue-600">
                {similarProduct.name}
              </Link>
              <p className="text-gray-700">
                ${similarProduct.salePrice ? similarProduct.salePrice.toFixed(2) : similarProduct.price.toFixed(2)}
              </p>
              {similarProduct.salePrice && (
                <p className="text-sm text-red-500 line-through">
                  ${similarProduct.price.toFixed(2)} <span className="text-green-500">Sale!</span>
                </p>
              )}
              {similarProduct.stock === 0 ? (
                <p className="text-sm text-gray-500">Out of Stock</p>
              ) : (
                <p className="text-sm text-gray-700">Stock: {similarProduct.stock}</p>
              )}
              {/* Hot Item and Best Seller Labels for Similar Products */}
              {similarProduct.hotItem && (
                <span className="inline-flex items-center px-3 py-1 text-sm font-medium text-yellow-800 bg-yellow-100 rounded-full">
                  🔥 Hot Item!
                </span>
              )}
              {similarProduct.mostSelling && (
                <span className="inline-flex items-center px-3 py-1 text-sm font-medium text-blue-800 bg-blue-100 rounded-full">
                  Best Seller
                </span>
              )}
              {/* Add to Cart Button for Similar Products */}
              <button
                onClick={() => dispatch(addItem({
                  id: similarProduct.id,
                  name: similarProduct.name,
                  price: similarProduct.salePrice || similarProduct.price, // Use sale price if available
                  quantity: 1,
                }))}
                className="mt-4 bg-green-600 text-white py-2 px-4 rounded-lg flex items-center justify-center gap-2 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
              >
                <FaCartPlus className="text-white" /> {/* Cart Icon */}
                <small>Add to Cart</small>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
