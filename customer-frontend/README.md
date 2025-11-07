# Customer Frontend

Modern, responsive customer-facing e-commerce application built with React, TypeScript, Vite, and shadcn-ui.

## Features

- **Product Catalog**: Browse products with search and filters
- **Product Details**: Detailed product pages with images and reviews
- **Shopping Cart**: Add/remove items, update quantities
- **User Authentication**: Register, login, profile management
- **Checkout**: Complete order placement
- **Order History**: View past orders and status
- **Responsive Design**: Mobile-first, works on all devices
- **SEO Optimized**: Server-side rendering ready
- **Performance**: Lazy loading, code splitting

## Tech Stack

- React 18
- TypeScript
- Vite
- React Router
- React Query (TanStack Query)
- shadcn-ui (Radix UI + Tailwind CSS)
- Lucide Icons

## Getting Started

### Prerequisites

- Node.js v18+
- npm or yarn
- Running backend API

### Installation

1. Install dependencies:
```bash
npm install
```

2. Set up environment variables:
```bash
cp .env.example .env
```

3. Start development server:
```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### Building for Production

```bash
npm run build
```

## Environment Variables

- `VITE_API_URL` - Backend API URL (default: http://localhost:5000)

## Available Routes

- `/` - Home page with featured products
- `/products` - Product catalog
- `/products/:id` - Product detail page
- `/cart` - Shopping cart
- `/checkout` - Checkout page
- `/login` - User login
- `/register` - User registration
- `/profile` - User profile
- `/orders` - Order history
- `/orders/:id` - Order details

## License

ISC
