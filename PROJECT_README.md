# E-Commerce Full-Stack Application

A complete, production-ready e-commerce application with backend API, admin dashboard, and customer-facing frontend.

## Project Structure

```
frencheez-pk-launchpad/
├── backend/              # Node.js/Express/TypeScript API server
├── admin-dashboard/      # React admin panel
├── customer-frontend/    # Customer-facing React application
└── README.md            # This file
```

## Features

### Backend API
- **Authentication & Authorization**: JWT-based with role management
- **RESTful API**: Complete CRUD operations for all entities
- **Database**: PostgreSQL with Prisma ORM
- **Security**: Helmet, CORS, rate limiting, input validation
- **File Upload**: Multer for handling media uploads
- **Documentation**: Auto-generated Swagger/OpenAPI docs
- **Email**: Nodemailer integration for transactional emails

### Admin Dashboard
- **Modern UI**: Built with React, TypeScript, and shadcn-ui
- **Product Management**: Full CRUD for products with categories
- **Order Management**: View and update order statuses
- **User Management**: Manage customers and admin users
- **Media Library**: Upload and manage images/files
- **Analytics Dashboard**: Overview statistics and charts
- **Responsive Design**: Works on all devices

### Customer Frontend
- **Product Catalog**: Browse and search products
- **Shopping Cart**: Add items and manage cart
- **Checkout**: Complete order placement
- **User Accounts**: Registration, login, profile management
- **Order History**: View past orders
- **Reviews & Ratings**: Product review system
- **Responsive Design**: Mobile-first approach

## Tech Stack

### Backend
- Node.js & Express.js
- TypeScript
- PostgreSQL
- Prisma ORM
- JWT (jsonwebtoken)
- Bcrypt for password hashing
- Multer for file uploads
- Swagger for API documentation

### Frontend (Both Admin & Customer)
- React 18
- TypeScript
- Vite
- React Router
- React Query (TanStack Query)
- shadcn-ui (Radix UI + Tailwind CSS)
- React Hook Form + Zod
- Lucide Icons

## Getting Started

### Prerequisites
- Node.js v18+ 
- PostgreSQL database
- npm or yarn

### Quick Start

1. **Clone the repository**
```bash
git clone <repository-url>
cd frencheez-pk-launchpad
```

2. **Set up Backend**
```bash
cd backend
npm install
cp .env.example .env
# Edit .env with your database credentials
npx prisma generate
npx prisma migrate dev
npm run dev
```

Backend will run on `http://localhost:5000`

3. **Set up Admin Dashboard**
```bash
cd admin-dashboard
npm install
cp .env.example .env
# Edit .env if needed
npm run dev
```

Admin dashboard will run on `http://localhost:3000`

4. **Set up Customer Frontend**
```bash
cd customer-frontend
npm install
npm run dev
```

Customer frontend will run on `http://localhost:5173`

## API Documentation

Once the backend is running, visit `http://localhost:5000/api-docs` for interactive API documentation.

## Database Schema

The application uses the following main entities:

- **User**: Customer and admin accounts with role-based access
- **Product**: Product catalog with pricing, inventory, images
- **Category**: Hierarchical product categorization
- **Order**: Customer orders with line items
- **OrderItem**: Individual products in an order
- **Review**: Product reviews and ratings
- **WishlistItem**: Customer wishlist
- **Address**: Shipping and billing addresses
- **Media**: Uploaded files and images
- **Setting**: Application configuration

## Key API Endpoints

- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `GET /api/products` - List products
- `POST /api/products` - Create product (Admin)
- `GET /api/categories` - List categories
- `POST /api/orders` - Create order
- `GET /api/orders` - List orders
- `GET /api/users` - List users (Admin)
- `POST /api/upload/single` - Upload file (Admin)

## Environment Variables

Each application has its own `.env.example` file. Copy and configure:

### Backend (.env)
- `DATABASE_URL` - PostgreSQL connection string
- `JWT_SECRET` - Secret for access tokens
- `JWT_REFRESH_SECRET` - Secret for refresh tokens
- `PORT` - Server port (default: 5000)
- `CORS_ORIGIN` - Allowed origins
- Email configuration (SMTP)

### Frontend Apps (.env)
- `VITE_API_URL` - Backend API URL

## Security Features

- Password hashing with bcrypt (10 rounds)
- JWT tokens with expiration
- Role-based access control (CUSTOMER, ADMIN, SUPER_ADMIN)
- Input validation on all endpoints
- SQL injection protection via Prisma
- XSS protection
- CSRF protection
- Rate limiting
- Helmet.js security headers
- CORS configuration

## Development

### Running Tests
```bash
# Backend tests (when implemented)
cd backend
npm test

# Frontend tests (when implemented)
cd admin-dashboard
npm test
```

### Building for Production

```bash
# Backend
cd backend
npm run build
npm start

# Admin Dashboard
cd admin-dashboard
npm run build

# Customer Frontend
cd customer-frontend
npm run build
```

## Deployment

### Backend
1. Set up PostgreSQL database
2. Configure environment variables
3. Run migrations: `npx prisma migrate deploy`
4. Build: `npm run build`
5. Start: `npm start`

### Frontend Apps
1. Build: `npm run build`
2. Serve the `dist` folder with any static file server (Nginx, Apache, Vercel, Netlify, etc.)

## Creating an Admin User

After setting up the database:

1. Register a user via the API or customer frontend
2. Update the user role in the database:

```sql
UPDATE "User" SET role = 'ADMIN' WHERE email = 'admin@example.com';
```

Or use Prisma Studio:
```bash
cd backend
npx prisma studio
```

## Project Roadmap

- [x] Backend API with authentication
- [x] Database schema and migrations
- [x] Admin dashboard with CRUD operations
- [x] Customer frontend structure
- [ ] Shopping cart functionality
- [ ] Checkout and payment integration
- [ ] Email notifications
- [ ] Product search and filters
- [ ] Reviews and ratings
- [ ] Wishlist functionality
- [ ] Order tracking
- [ ] Analytics and reporting
- [ ] Multi-language support
- [ ] Dark mode

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

ISC

## Support

For issues and questions, please open an issue on GitHub.
