// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import ProjectDetails from './components/ProjectDetails';
import ProductList from './components/ProductList';
import Cart from './components/Cart';

const App: React.FC = () => {
  return (
    <CartProvider>
      <Router>
        <div className="container mx-auto p-4">
          <Routes>
            {/* Default route showing project details */}
            <Route path="/" element={<ProjectDetails />} />
            
            {/* Cart page route */}
            <Route path="/cart" element={
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <ProductList />
                <Cart />
              </div>
            } />
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
};

export default App;
