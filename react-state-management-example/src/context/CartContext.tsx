// src/context/CartContext.tsx
import React, { createContext, useReducer, useContext, ReactNode, useMemo } from 'react';

// Define types for our cart items and actions
interface CartItem {
  id: number;
  name: string;
  price: number;
  uuid: string; // Unique identifier for each cart item instance
}

type CartAction =
  | { type: 'ADD_ITEM'; payload: Omit<CartItem, 'uuid'> } // Exclude uuid from payload
  | { type: 'REMOVE_ITEM'; payload: string }; // uuid will be used to identify specific item

interface CartContextType {
  cart: CartItem[];
  cartTotal: number;
  addItem: (item: Omit<CartItem, 'uuid'>) => void;
  removeItem: (uuid: string) => void;
}

// Create the context
const CartContext = createContext<CartContextType | undefined>(undefined);

// Reducer function
const cartReducer = (state: CartItem[], action: CartAction): CartItem[] => {
  switch (action.type) {
    case 'ADD_ITEM':
      // Add a unique identifier to each new item
      return [...state, { ...action.payload, uuid: Date.now().toString() }];
    case 'REMOVE_ITEM':
      // Remove item based on its unique uuid
      return state.filter(item => item.uuid !== action.payload);
    default:
      return state;
  }
};

// Provider component
export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, []);

  const addItem = (item: Omit<CartItem, 'uuid'>) => dispatch({ type: 'ADD_ITEM', payload: item });
  const removeItem = (uuid: string) => dispatch({ type: 'REMOVE_ITEM', payload: uuid });

  // Calculate cart total using useMemo for performance optimization
  const cartTotal = useMemo(() => cart.reduce((total, item) => total + item.price, 0), [cart]);

  return (
    <CartContext.Provider value={{ cart, cartTotal, addItem, removeItem }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use the CartContext
export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart must be used within a CartProvider');
  return context;
};
