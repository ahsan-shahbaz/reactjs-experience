# React State Management Example with TypeScript and Tailwind CSS

This project is a React application built with **TypeScript**, **Context API**, and **useReducer** for state management. It demonstrates adding and removing items from a shopping cart while calculating the total, and uses **Tailwind CSS** for responsive and modern styling.

## Overview

This example showcases:
- **Efficient global state management** using Context API and `useReducer`
- **Typed code** with TypeScript for better maintainability
- **Reusable and responsive UI** with Tailwind CSS
- **Component structure** that’s scalable for larger applications

---

### Table of Contents
- [Technologies](#technologies)
- [Project Structure](#project-structure)
- [State Management with Context API and useReducer](#state-management-with-context-api-and-usereducer)
- [UI Styling with Tailwind CSS](#ui-styling-with-tailwind-css)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Future Improvements](#future-improvements)
- [Demo](#demo)

---

## Technologies

This project leverages the following technologies:
- **React**: v18, a popular JavaScript library for building user interfaces
- **TypeScript**: Adds static typing to JavaScript for improved readability and debugging
- **Context API & useReducer**: Manages global state in a clean, predictable way, useful for complex state logic in React apps
- **Tailwind CSS**: A utility-first CSS framework for building custom designs quickly and responsively

---

## Project Structure

The project is structured as follows:

src/
├── components/
│   ├── Cart.tsx              # Cart component displays cart items and total
│   ├── ProductList.tsx       # ProductList component displays products for adding to cart
├── context/
│   └── CartContext.tsx       # CartContext to manage cart state globally
├── App.tsx                   # Main app component
└── index.tsx                 # Entry point


### Components
1. **ProductList.tsx**: Displays a list of products with an "Add to Cart" button. Each button triggers an action to add the product to the global cart.
2. **Cart.tsx**: Displays items in the cart in a scrollable box, with a "Remove" button for each item. It also displays the total price of the cart items.

### Context
- **CartContext.tsx**: The main state management file, where we define the cart’s structure, actions (add and remove), and a derived cart total.

---

## State Management with Context API and useReducer

The project uses Context API combined with useReducer to manage the cart’s state. Here’s how each part works:

- **Context API**: Creates a global store (context) that can be accessed by any component within the provider, avoiding the need to pass props down manually.
- **useReducer**: Manages state transitions through a reducer function. Actions like "ADD_ITEM" and "REMOVE_ITEM" dictate how the state changes.
- **cartTotal**: A derived state using `useMemo` to calculate the total price of the items in the cart whenever the cart changes.

Here’s a quick summary of how these elements work together:

1. **CartContext.tsx**: Defines a reducer function and provides context to `ProductList` and `Cart` components.
   - `ADD_ITEM`: Adds a unique `uuid` to each item for precise tracking.
   - `REMOVE_ITEM`: Removes an item by its `uuid`, leaving other items unaffected.
2. **Custom Hook (`useCart`)**: Exposes cart state and actions (add and remove) to be used by any component in the app.

---

## UI Styling with Tailwind CSS

The app uses **Tailwind CSS** for styling. Tailwind provides pre-defined utility classes that make it easy to apply responsive and consistent styles across components.

1. **ProductList Component**: Each product card has Tailwind classes for padding, margins, and background styling.
2. **Cart Component**: The cart items are displayed in a scrollable container with `max-h-60` and `overflow-y-auto` to keep the total visible.
3. **Overall Layout**: Tailwind’s utility classes help make the layout responsive and visually appealing.

Using Tailwind CSS in this way helps maintain a consistent design system while allowing rapid prototyping and styling updates.

---

## Getting Started

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/ahsan-shahbaz/reactjs-experience.git

Navigate into the Project:
cd reactjs-experience/react-state-management-example

Install Dependencies:
npm install


Start the Development Server:
npm start
The app should be running on http://localhost:3000


## Usage

The app has two main sections:

- **Product List**: Contains a list of items with an "Add to Cart" button for each product. When you add a product, it appears in the Cart section.
- **Cart**: Displays added items with a remove option. The cart uses a scrollable box if there are many items, and the total price is always visible outside the scrollable area.

### Adding Items

Each click on the "Add to Cart" button adds a new instance of the selected item to the cart. Every item instance is given a unique identifier to keep each entry distinct, even if it’s the same product.

### Removing Items

The "Remove" button removes the specific instance of an item from the cart, using its unique identifier (`uuid`). This way, only the selected instance is removed without affecting other identical items in the cart.

### Cart Total

The total price of all items in the cart is calculated dynamically. As items are added or removed, the total updates in real-time to reflect the current cart content.

---

## Future Improvements

1. **Product Quantities**: Add functionality to adjust item quantities, allowing users to increase or decrease quantities instead of adding multiple instances.
2. **Persistent State**: Store cart items in local storage or a database to maintain cart contents between user sessions.
3. **Enhanced UI**: Add animations for adding and removing items, creating a more interactive user experience.

---

## Demo

- **[Shopping Cart Demo](http://localhost:3000/cart)** - Replace this URL with the actual route if the application is hosted online.
