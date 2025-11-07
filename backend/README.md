# E-Commerce Backend API

A complete, production-ready backend API for an e-commerce application built with Node.js, Express, TypeScript, Prisma ORM, and PostgreSQL.

## Features

- **Authentication & Authorization**
  - JWT-based authentication
  - Role-based access control (Customer, Admin, Super Admin)
  - Password reset functionality
  - Secure password hashing with bcrypt

- **RESTful API**
  - Products management (CRUD)
  - Categories management (CRUD)
  - Orders management
  - User management
  - File upload handling
  - Media management

- **Security**
  - Helmet.js for security headers
  - CORS protection
  - Rate limiting
  - Input validation and sanitization
  - SQL injection protection via Prisma
  - XSS protection

- **Documentation**
  - Auto-generated Swagger/OpenAPI documentation
  - Available at `/api-docs` endpoint

## Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Language**: TypeScript
- **Database**: PostgreSQL
- **ORM**: Prisma
- **Authentication**: JWT (jsonwebtoken)
- **Validation**: express-validator
- **File Upload**: Multer
- **Documentation**: Swagger (swagger-jsdoc, swagger-ui-express)

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- PostgreSQL database
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Set up environment variables:
```bash
cp .env.example .env
```

Edit `.env` and configure your database connection and other settings.

3. Set up the database:
```bash
# Generate Prisma client
npm run prisma:generate

# Run database migrations
npm run prisma:migrate

# (Optional) Open Prisma Studio to manage data
npm run prisma:studio
```

### Running the Application

Development mode (with hot reload):
```bash
npm run dev
```

Build for production:
```bash
npm run build
```

Run production build:
```bash
npm start
```

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login user
- `POST /api/auth/logout` - Logout user
- `GET /api/auth/profile` - Get user profile
- `POST /api/auth/request-reset` - Request password reset
- `POST /api/auth/reset-password` - Reset password

### Products
- `GET /api/products` - Get all products (with pagination, search, filter)
- `GET /api/products/:id` - Get product by ID
- `POST /api/products` - Create product (Admin only)
- `PUT /api/products/:id` - Update product (Admin only)
- `DELETE /api/products/:id` - Delete product (Admin only)

### Categories
- `GET /api/categories` - Get all categories
- `GET /api/categories/:id` - Get category by ID
- `POST /api/categories` - Create category (Admin only)
- `PUT /api/categories/:id` - Update category (Admin only)
- `DELETE /api/categories/:id` - Delete category (Admin only)

### Orders
- `GET /api/orders` - Get all orders (Admin sees all, customers see their own)
- `GET /api/orders/:id` - Get order by ID
- `POST /api/orders` - Create order
- `PUT /api/orders/:id/status` - Update order status (Admin only)

### Users
- `GET /api/users` - Get all users (Admin only)
- `GET /api/users/:id` - Get user by ID (Admin only)
- `PUT /api/users/:id` - Update user (Admin only)
- `DELETE /api/users/:id` - Delete user (Super Admin only)
- `PUT /api/users/profile` - Update own profile
- `PUT /api/users/change-password` - Change password

### Upload
- `POST /api/upload/single` - Upload single file (Admin only)
- `POST /api/upload/multiple` - Upload multiple files (Admin only)
- `GET /api/upload` - Get all media (Admin only)
- `DELETE /api/upload/:id` - Delete media (Admin only)

### Other
- `GET /health` - Health check endpoint
- `GET /api-docs` - Swagger API documentation

## Database Schema

The application uses the following main entities:

- **User**: User accounts with roles and authentication
- **Product**: Product catalog with pricing and inventory
- **Category**: Product categorization with parent-child relationships
- **Order**: Customer orders with items
- **OrderItem**: Individual items in an order
- **Review**: Product reviews and ratings
- **WishlistItem**: User wishlist items
- **Address**: User shipping/billing addresses
- **Media**: Uploaded files and images
- **Setting**: Application settings

## Environment Variables

See `.env.example` for all required environment variables:

- `PORT` - Server port (default: 5000)
- `NODE_ENV` - Environment (development/production)
- `DATABASE_URL` - PostgreSQL connection string
- `JWT_SECRET` - Secret key for JWT access tokens
- `JWT_REFRESH_SECRET` - Secret key for JWT refresh tokens
- `CORS_ORIGIN` - Allowed CORS origins
- `EMAIL_*` - Email configuration for nodemailer
- `UPLOAD_DIR` - Directory for file uploads
- `RATE_LIMIT_*` - Rate limiting configuration

## Security Best Practices

- All passwords are hashed using bcrypt (10 rounds)
- JWT tokens with expiration (access & refresh tokens)
- Role-based access control (CUSTOMER, ADMIN, SUPER_ADMIN)
- Input validation on all endpoints (express-validator)
- Rate limiting to prevent abuse (100 requests per 15 minutes)
- CORS configuration with allowed origins
- Helmet.js security headers
- SQL injection protection via Prisma ORM
- XSS protection through input sanitization
- CSRF protection: JWT tokens in Authorization headers (not cookies) provide inherent CSRF protection as browsers don't automatically include these headers in cross-origin requests

## Development

### Database Migrations

Create a new migration:
```bash
npx prisma migrate dev --name migration_name
```

Reset database (WARNING: deletes all data):
```bash
npx prisma migrate reset
```

### Code Quality

The project uses:
- TypeScript for type safety
- ESLint for code linting
- Prettier for code formatting

## License

ISC
