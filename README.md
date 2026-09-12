# Advanced Shopping Cart

A responsive, modern shopping cart web application built with **React 19** and **Vite**. Browse a curated clothing catalogue, add items to your cart, adjust quantities, and review your order summary � all with a clean, mobile-first UI.

---

## Features

- ?? **Product Catalogue** � 12 clothing items with real images, titles, and prices
- ??? **Add / Remove from Cart** � toggle products in and out of the cart from the product grid
- ?? **Quantity Selector** � adjust quantity per cart item (1�9 via dropdown, 10+ via custom input)
- ?? **Live Order Summary** � subtotal, total quantity, and grand total update in real time
- ?? **Fully Responsive** � optimised for Desktop, Tablet (= 768 px), and Mobile (= 480 px)
- ?? **Client-side Routing** � `/` for the home/shop page and `/cart` for the cart page
- ?? **Sticky Header** � navigation stays visible while scrolling
- ?? **Pill-style Navigation** � nav links grouped in a styled, rounded container

---

## Tech Stack

| Technology | Purpose |
|---|---|
| [React 19](https://react.dev/) | UI library |
| [Vite 8](https://vite.dev/) | Build tool and dev server |
| [React Router DOM v7](https://reactrouter.com/) | Client-side routing |
| [React Context API](https://react.dev/reference/react/createContext) | Global state management (cart, totals) |
| Vanilla CSS | Styling and responsive layout |
| [Oxlint](https://oxc.rs/docs/guide/usage/linter.html) | Fast JavaScript linter |

---

## Project Structure

```
advanced-shopping-cart/
+-- public/
+-- src/
�   +-- assets/               # Static assets (images, SVGs)
�   +-- components/
�   �   +-- Banner.jsx        # Promotional banner at top of home page
�   �   +-- Card.jsx          # Individual product card (add/remove button)
�   �   +-- CardForCart.jsx   # Cart item card (quantity selector, line total)
�   �   +-- Cart.jsx          # Cart page (list of cart items + bill footer)
�   �   +-- Header.jsx        # Sticky top navigation bar with cart badge
�   �   +-- Home.jsx          # Home page (Header + Banner + ProductContainer)
�   �   +-- MyContext.jsx     # React Context definition
�   �   +-- ProductContainer.jsx  # Renders the product grid
�   +-- data/
�   �   +-- productsData.json # Product catalogue (12 items)
�   +-- App.css               # Global styles + responsive media queries
�   +-- App.jsx               # Root component, router setup, context provider
�   +-- index.css             # Base reset styles
�   +-- main.jsx              # React DOM entry point
+-- index.html
+-- package.json
+-- vite.config.js
```

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or higher
- npm v9 or higher

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/Tamilmani027/advanced-shopping-cart.git

# 2. Move into the project directory
cd advanced-shopping-cart

# 3. Install dependencies
npm install
```

### Running Locally

```bash
npm run dev
```

The app will be available at **http://localhost:5173** (or the next available port).

### Other Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the Vite development server with HMR |
| `npm run build` | Build the production bundle to `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run Oxlint on the source files |

---

## Responsive Breakpoints

| Breakpoint | Target | Key Behaviour |
|---|---|---|
| Above 768px | Desktop | Default multi-column product grid, full header |
| 768px and below | Tablet | Compact header, smaller cards, cart items side-by-side |
| 480px and below | Mobile | Single-column product grid, full-width cards, cart items stacked vertically |

---

## State Management

Global state is managed via **React Context API** (MyContext). The following values are shared across the app:

| State | Description |
|---|---|
| `addedCart` | Array of products currently in the cart |
| `cartTotal` | Number of distinct items in the cart |
| `totalAmnt` | Running grand total (price � quantity) |
| `totalQnty` | Total number of units across all cart items |
| `addtoCart(prod)` | Adds a product to the cart |
| `removefromCart(id)` | Removes a product from the cart by ID |

---

## ?? License

This project is open source and available under the [MIT License](LICENSE).
