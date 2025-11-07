# Admin Dashboard

Modern admin dashboard for managing the e-commerce application. Built with React, TypeScript, Vite, and shadcn-ui.

## Features

- **Authentication**
  - Secure admin login
  - JWT token-based authentication
  - Role-based access control (Admin, Super Admin only)

- **Dashboard**
  - Overview statistics
  - Recent orders
  - Top products

- **Product Management**
  - View all products
  - Create, edit, delete products
  - Pagination and search

- **Category Management**
  - View all categories
  - Create, edit, delete categories
  - Hierarchical categories

- **Order Management**
  - View all orders
  - Update order status
  - Order details

- **User Management**
  - View all users
  - Edit user roles
  - Delete users

- **Media Library**
  - Upload and manage files
  - Image gallery

- **Settings**
  - Application configuration
  - Email templates

## Tech Stack

- **Framework**: React 18
- **Build Tool**: Vite
- **Language**: TypeScript
- **UI Library**: shadcn-ui (Radix UI + Tailwind CSS)
- **State Management**: React Query
- **Routing**: React Router
- **Form Handling**: React Hook Form + Zod
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Running backend API server

### Installation

1. Install dependencies:
```bash
npm install
```

2. Set up environment variables:
```bash
cp .env.example .env
```

Edit `.env` and configure your API URL.

3. Start development server:
```bash
npm run dev
```

The admin dashboard will be available at `http://localhost:3000`

### Building for Production

```bash
npm run build
```

The build output will be in the `dist` directory.

## Default Admin Credentials

After setting up the backend and running migrations, you'll need to create an admin user. You can do this by:

1. Registering a regular user via the API
2. Manually updating the user role in the database to `ADMIN` or `SUPER_ADMIN`

Example SQL:
```sql
UPDATE "User" SET role = 'ADMIN' WHERE email = 'admin@example.com';
```

## Available Routes

- `/login` - Admin login page
- `/dashboard` - Dashboard overview
- `/products` - Product management
- `/categories` - Category management
- `/orders` - Order management
- `/users` - User management
- `/media` - Media library
- `/settings` - Application settings

## Environment Variables

- `VITE_API_URL` - Backend API URL (default: http://localhost:5000)

## Features to be Added

- Advanced product filtering and search
- Bulk operations for products
- Order invoice generation
- Email template editor
- Analytics and reports
- Real-time notifications
- Product image upload
- Category hierarchy visualization
- Export data to CSV/Excel

## License

ISC
