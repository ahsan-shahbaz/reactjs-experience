# React State Management Example with TypeScript and Tailwind CSS

This project demonstrates a **React** application with **TypeScript**, **Context API**, **useReducer**, and **Tailwind CSS** for managing global state in a scalable manner. The app allows users to add and remove items from a shopping cart.

## Key Features

- **React**: v18
- **TypeScript**: Ensures type safety across components and context management.
- **Context API and useReducer**: Manages the global state of the cart.
- **Tailwind CSS**: Adds modern and responsive UI styling.

## Project Structure

- **src/context/CartContext.tsx**: Contains state management for the cart with `Context API` and `useReducer`.
- **src/components/ProductList.tsx**: Lists products available to add to the cart.
- **src/components/Cart.tsx**: Shows items in the cart with remove functionality.
- **src/App.tsx**: Combines the components and uses `CartProvider` for state management.

## How It Works

1. **State Management**: `useReducer` manages cart actions (`ADD_ITEM` and `REMOVE_ITEM`) with a reducer function, while `Context API` provides global state access.
2. **TypeScript**: Ensures that components and context are strongly typed for reliability.
3. **Tailwind CSS**: Provides responsive and reusable styles for a consistent UI.

## Setup and Running the Project

1. Clone the repository.
2. Install dependencies: `npm install`.
3. Run the app: `npm start`.

## Usage

- **Product List**: View and add products to the cart.
- **Cart**: View cart items and remove items as needed.

## Preview

![Shopping Cart](https://yourimageurl.com)

## Future Enhancements

- Adding additional product information and styling.
- Implementing additional actions, such as updating item quantities.
- Enhancing the UI with animations for add/remove actions.

---
This example illustrates a clean and scalable approach to managing global state in React using TypeScript, Context API, and Tailwind CSS.
