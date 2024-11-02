// src/components/ProjectDetails.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const ProjectDetails: React.FC = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">React State Management Example with TypeScript and Tailwind CSS</h1>
      <p className="mb-6">
        This project is a React application built with <strong>TypeScript</strong>, <strong>Context API</strong>, and <strong>useReducer</strong> for state management. It demonstrates adding and removing items from a shopping cart while calculating the total, and uses <strong>Tailwind CSS</strong> for responsive and modern styling.
      </p>

      <h2 className="text-2xl font-semibold mt-6">Overview</h2>
      <ul className="list-disc ml-6 mt-2">
        <li><strong>Efficient global state management</strong> using Context API and <code>useReducer</code></li>
        <li><strong>Typed code</strong> with TypeScript for better maintainability</li>
        <li><strong>Reusable and responsive UI</strong> with Tailwind CSS</li>
        <li><strong>Component structure</strong> that’s scalable for larger applications</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6">Technologies</h2>
      <ul className="list-disc ml-6 mt-2">
        <li><strong>React</strong>: v18, a popular JavaScript library for building user interfaces</li>
        <li><strong>TypeScript</strong>: Adds static typing to JavaScript for improved readability and debugging</li>
        <li><strong>Context API & useReducer</strong>: Manages global state in a clean, predictable way, useful for complex state logic in React apps</li>
        <li><strong>Tailwind CSS</strong>: A utility-first CSS framework for building custom designs quickly and responsively</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6">Project Structure</h2>
      <p className="mt-2">The project is structured as follows:</p>
      <pre className="bg-gray-100 p-4 rounded-lg mt-2">
        <code>
{`src/
├── components/
│   ├── Cart.tsx              # Cart component displays cart items and total
│   ├── ProductList.tsx       # ProductList component displays products for adding to cart
├── context/
│   └── CartContext.tsx       # CartContext to manage cart state globally
├── App.tsx                   # Main app component
└── index.tsx                 # Entry point`}
        </code>
      </pre>

      <h3 className="text-xl font-semibold mt-6">Components</h3>
      <ul className="list-disc ml-6 mt-2">
        <li><strong>ProductList.tsx</strong>: Displays a list of products with an "Add to Cart" button. Each button triggers an action to add the product to the global cart.</li>
        <li><strong>Cart.tsx</strong>: Displays items in the cart in a scrollable box, with a "Remove" button for each item. It also displays the total price of the cart items.</li>
      </ul>

      <h3 className="text-xl font-semibold mt-6">Context</h3>
      <p className="mt-2"><strong>CartContext.tsx</strong>: The main state management file, where we define the cart’s structure, actions (add and remove), and a derived cart total.</p>

      <h2 className="text-2xl font-semibold mt-6">State Management with Context API and useReducer</h2>
      <p className="mt-2">
        The project uses <strong>Context API</strong> combined with <strong>useReducer</strong> to manage the cart’s state. Here’s how each part works:
      </p>
      <ul className="list-disc ml-6 mt-2">
        <li><strong>Context API</strong>: Creates a global store (context) that can be accessed by any component within the provider, avoiding the need to pass props down manually.</li>
        <li><strong>useReducer</strong>: Manages state transitions through a reducer function. Actions like "ADD_ITEM" and "REMOVE_ITEM" dictate how the state changes.</li>
        <li><strong>cartTotal</strong>: A derived state using <code>useMemo</code> to calculate the total price of the items in the cart whenever the cart changes.</li>
      </ul>
      <p className="mt-2">Here’s a quick summary of how these elements work together:</p>
      <ul className="list-disc ml-6 mt-2">
        <li><strong>CartContext.tsx</strong>: Defines a reducer function and provides context to <code>ProductList</code> and <code>Cart</code> components.
          <ul className="list-disc ml-6 mt-2">
            <li><code>ADD_ITEM</code>: Adds a unique <code>uuid</code> to each item for precise tracking.</li>
            <li><code>REMOVE_ITEM</code>: Removes an item by its <code>uuid</code>, leaving other items unaffected.</li>
          </ul>
        </li>
        <li><strong>Custom Hook (`useCart`)</strong>: Exposes cart state and actions (add and remove) to be used by any component in the app.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6">UI Styling with Tailwind CSS</h2>
      <p className="mt-2">The app uses <strong>Tailwind CSS</strong> for styling, which provides pre-defined utility classes for easy responsive and consistent styling across components.</p>
      <ul className="list-disc ml-6 mt-2">
        <li><strong>ProductList Component</strong>: Each product card has Tailwind classes for padding, margins, and background styling.</li>
        <li><strong>Cart Component</strong>: The cart items are displayed in a scrollable container with <code>max-h-60</code> and <code>overflow-y-auto</code> to keep the total visible.</li>
        <li><strong>Overall Layout</strong>: Tailwind’s utility classes help make the layout responsive and visually appealing.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6">Getting Started</h2>
      <ol className="list-decimal ml-6 mt-2">
        <li>Clone the Repository:
          <pre className="bg-gray-100 p-2 rounded mt-2"><code>git clone https://github.com/ahsan-shahbaz/reactjs-experience.git</code></pre>
        </li>
        <li className="mt-4">Navigate into the Project:
          <pre className="bg-gray-100 p-2 rounded mt-2"><code>cd reactjs-experience/react-state-management-example</code></pre>
        </li>
        <li className="mt-4">Install Dependencies:
          <pre className="bg-gray-100 p-2 rounded mt-2"><code>npm install</code></pre>
        </li>
        <li className="mt-4">Start the Development Server:
          <pre className="bg-gray-100 p-2 rounded mt-2"><code>npm start</code></pre>
          <p>The app should be running on <code>http://localhost:3000</code>.</p>
        </li>
      </ol>

      <h2 className="text-2xl font-semibold mt-6">Usage</h2>
      <p>The app has two main sections:</p>
      <ul className="list-disc ml-6 mt-2">
        <li><strong>Product List</strong>: Contains a list of items with an "Add to Cart" button for each product.</li>
        <li><strong>Cart</strong>: Displays added items with a remove option and shows the total price outside the scrollable area.</li>
      </ul>

      <h3 className="text-xl font-semibold mt-6">Adding Items</h3>
      <p>Each click on the "Add to Cart" button adds a new instance of the selected item to the cart. Every item instance is given a unique identifier to keep each entry distinct, even if it’s the same product.</p>

      <h3 className="text-xl font-semibold mt-6">Removing Items</h3>
      <p>The "Remove" button removes the specific instance of an item from the cart, using its unique identifier (`uuid`). This way, only the selected instance is removed without affecting other identical items in the cart.</p>

      <h3 className="text-xl font-semibold mt-6">Cart Total</h3>
      <p>The total price of all items in the cart is calculated dynamically. As items are added or removed, the total updates in real-time to reflect the current cart content.</p>

      <h2 className="text-2xl font-semibold mt-6">Future Improvements</h2>
      <ul className="list-disc ml-6 mt-2">
        <li>Product Quantities: Add functionality to adjust item quantities, allowing users to increase or decrease quantities instead of adding multiple instances.</li>
        <li>Persistent State: Store cart items in local storage or a database to maintain cart contents between user sessions.</li>
        <li>Enhanced UI: Add animations for adding and removing items, creating a more interactive user experience.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6">Demo</h2>
      <p className="mt-2">You can view the cart functionality here:</p>
      <Link to="/cart" className="text-blue-600 underline">Go to Cart Page</Link>
    </div>
  );
};

export default ProjectDetails;
