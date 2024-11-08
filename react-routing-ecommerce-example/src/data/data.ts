// src/data/data.ts
import { Product, Category } from '../types';

// Define the categories
export const categories: Category[] = [
  { id: 'electronics', name: 'Electronics' },
  { id: 'fashion', name: 'Fashion' },
  { id: 'books', name: 'Books' },
  { id: 'home-appliances', name: 'Home Appliances' },
];

// Define the products with associated categories
export const products: Product[] = [
  // Electronics
  { id: '1', name: 'iPhone 13', price: 999, salePrice: 899, stock: 20, hotItem: true, mostSelling: true, description: 'Latest model iPhone with improved camera.', category: 'electronics' },
  { id: '2', name: 'Samsung Galaxy S21', price: 799, stock: 50, description: 'Samsung smartphone with high-res camera and fast processor.', category: 'electronics' },
  { id: '3', name: 'MacBook Pro 13"', price: 1299, salePrice: 1199, stock: 10, description: 'Apple’s latest M1 chip laptop with Retina display.', category: 'electronics' },
  { id: '4', name: 'Sony WH-1000XM4 Headphones', price: 349, stock: 30, hotItem: true, description: 'Noise-canceling headphones with superior sound quality.', category: 'electronics' },
  { id: '5', name: 'Dell XPS 13', price: 999, stock: 15, description: 'Compact and powerful laptop from Dell with stunning display.', category: 'electronics' },

  // Fashion
  { id: '6', name: 'Levi’s Jeans', price: 59, stock: 60, mostSelling: true, description: 'Classic fit jeans from Levi’s for casual wear.', category: 'fashion' },
  { id: '7', name: 'Nike Running Shoes', price: 89, stock: 100, hotItem: true, description: 'Comfortable and durable running shoes from Nike.', category: 'fashion' },
  { id: '8', name: 'Adidas Sweatshirt', price: 49, stock: 40, description: 'Soft and warm sweatshirt, perfect for workouts.', category: 'fashion' },
  { id: '9', name: 'Ray-Ban Sunglasses', price: 150, stock: 25, description: 'Stylish sunglasses with UV protection.', category: 'fashion' },
  { id: '10', name: 'Calvin Klein Jacket', price: 120, stock: 30, description: 'Trendy jacket suitable for all weather.', category: 'fashion' },

  // Books
  { id: '11', name: 'The Great Gatsby', price: 10, stock: 150, description: 'A classic novel by F. Scott Fitzgerald.', category: 'books' },
  { id: '12', name: '1984 by George Orwell', price: 15, stock: 200, mostSelling: true, description: 'Dystopian novel set in a totalitarian society.', category: 'books' },
  { id: '13', name: 'To Kill a Mockingbird', price: 12, stock: 120, description: 'A gripping novel on racial inequality.', category: 'books' },
  { id: '14', name: 'Harry Potter and the Philosopher’s Stone', price: 20, stock: 80, description: 'The first book in the Harry Potter series.', category: 'books' },
  { id: '15', name: 'The Catcher in the Rye', price: 10, stock: 90, description: 'A novel about teenage rebellion and angst.', category: 'books' },

  // Home Appliances
  { id: '16', name: 'Dyson Vacuum Cleaner', price: 399, stock: 20, hotItem: true, description: 'High-efficiency vacuum cleaner from Dyson.', category: 'home-appliances' },
  { id: '17', name: 'Instant Pot', price: 89, stock: 40, description: 'Multi-function pressure cooker and steamer.', category: 'home-appliances' },
  { id: '18', name: 'Philips Air Fryer', price: 199, stock: 15, description: 'Air fryer with rapid air technology.', category: 'home-appliances' },
  { id: '19', name: 'Samsung Refrigerator', price: 1099, stock: 10, description: 'Large capacity refrigerator with freezer.', category: 'home-appliances' },
  { id: '20', name: 'LG Washing Machine', price: 799, stock: 25, description: 'Efficient washing machine with multiple modes.', category: 'home-appliances' },
];
