# E-Commerce Frontend Project

## Team Members

* Dale Mellem
* Thami Jasop
* Natalie Vinyu

## Project Overview
This project is a pixel-perfect e-commerce frontend built from a Figma design. It showcases a complete shopping experience including browsing products, viewing details, adding items to a cart, and completing a checkout flow.

All data is handled client-side (no backend), focusing on UI/UX fidelity, component architecture, and state management.

## Tech Stack

* React
* Tailwind
* React Router Dom
* Redux Toolkit

## Features

* Responsive Home Page with product listings
* Sidebar navigation (toggleable)
* Search functionality (local filtering)
* Product Detail Page
* Cart Overview (mini + full cart page)
* Checkout 

## Core Components
* App — Main router and layout
* Navbar — Search bar + cart icon
* Sidebar — Navigation menu
* ProductCard — Product preview
* ProductList — Displays product grid
* ProductDetail — Detailed product view
* CartSummary — Mini cart preview
* CartPage — Full cart view
* CheckoutForm — Shipping & payment

## Data & Storage
* Product data stored locally (/src/data/products.js)
* Cart state managed with Redux
* Cart persisted using localStorage

# Summary

### This project demonstrates:

* Strong React fundamentals
* Effective state management with Redux
* Clean UI implementation using Tailwind
* Real-world e-commerce flow without a backend

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
