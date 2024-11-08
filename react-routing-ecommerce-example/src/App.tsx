// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import CategoryPage from './pages/CategoryPage';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';
import NotFoundPage from './pages/NotFoundPage'; // Import NotFoundPage
import { Provider } from 'react-redux';
import { store } from './redux/store';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <Layout>
          <Routes>
            {/* Home Page Route */}
            <Route path="/" element={<HomePage />} />

            {/* Category Page Route with dynamic category ID */}
            <Route path="/category/:id" element={<CategoryPage />} />

            {/* Product Page Route with dynamic product ID */}
            <Route path="/product/:id" element={<ProductPage />} />

            {/* Cart Page Route */}
            <Route path="/cart" element={<CartPage />} />

            {/* Fallback Route for 404 - Page Not Found */}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Layout>
      </Router>
    </Provider>
  );
};

export default App;
