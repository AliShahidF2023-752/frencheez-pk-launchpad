# E-Commerce Full-Stack Application

A complete, production-ready e-commerce platform with backend API, admin dashboard, and customer-facing frontend.

## 🚀 Project Structure

```
frencheez-pk-launchpad/
├── backend/              # Node.js/Express/TypeScript REST API
├── admin-dashboard/      # React admin management panel
├── customer-frontend/    # Customer-facing React application
├── package.json          # Monorepo scripts
└── README.md            # This file
```

## ✨ Features

### Backend API
- ✅ JWT Authentication & Authorization
- ✅ PostgreSQL + Prisma ORM
- ✅ RESTful API with Swagger docs
- ✅ File upload handling
- ✅ Security (Helmet, CORS, rate limiting)
- ✅ Email service integration
- ✅ Role-based access control

### Admin Dashboard
- ✅ Modern React + TypeScript UI
- ✅ Product management (CRUD)
- ✅ Category management
- ✅ Order management & status updates
- ✅ User management
- ✅ Media library
- ✅ Dashboard analytics
- ✅ Responsive design

### Customer Frontend
- ✅ Product catalog & search
- ✅ Product detail pages
- ✅ Shopping cart
- ✅ User authentication
- ✅ Order placement
- ✅ Order history
- ✅ Responsive design

## 🛠️ Tech Stack

- **Backend**: Node.js, Express, TypeScript, Prisma, PostgreSQL
- **Frontend**: React 18, TypeScript, Vite, shadcn-ui, Tailwind CSS
- **Auth**: JWT
- **Database**: PostgreSQL
- **ORM**: Prisma

## 🚦 Quick Start

### Prerequisites
- Node.js v18+
- PostgreSQL
- npm or yarn

### Installation

1. **Install all dependencies**
```bash
npm run install:all
```

2. **Set up Backend**
```bash
cd backend
cp .env.example .env
# Edit .env with your database credentials
npx prisma generate
npx prisma migrate dev
```

3. **Set up environment files**
```bash
# Admin dashboard
cd admin-dashboard
cp .env.example .env

# Customer frontend
cd customer-frontend
cp .env.example .env
```

### Running Development Servers

Run all applications in separate terminals:

```bash
# Terminal 1 - Backend (port 5000)
npm run dev:backend

# Terminal 2 - Admin Dashboard (port 3000)
npm run dev:admin

# Terminal 3 - Customer Frontend (port 5173)
npm run dev:customer
```

### Creating an Admin User

After setting up the database:

```sql
-- Register via API first, then run:
UPDATE "User" SET role = 'ADMIN' WHERE email = 'admin@example.com';
```

Or use Prisma Studio:
```bash
npm run prisma:studio
```

## 📚 Documentation

- **Backend API**: http://localhost:5000/api-docs (Swagger)
- **Backend README**: [backend/README.md](backend/README.md)
- **Admin Dashboard README**: [admin-dashboard/README.md](admin-dashboard/README.md)
- **Customer Frontend README**: [customer-frontend/README.md](customer-frontend/README.md)

## 🏗️ Building for Production

```bash
# Build all applications
npm run build:all

# Or build individually
npm run build:backend
npm run build:admin
npm run build:customer
```

## 📡 API Endpoints

Main endpoints available:

- **Auth**: `/api/auth/register`, `/api/auth/login`, `/api/auth/logout`
- **Products**: `/api/products` (GET, POST, PUT, DELETE)
- **Categories**: `/api/categories` (GET, POST, PUT, DELETE)
- **Orders**: `/api/orders` (GET, POST, PUT)
- **Users**: `/api/users` (GET, PUT, DELETE)
- **Upload**: `/api/upload/single`, `/api/upload/multiple`

## 🔒 Security

- Password hashing (bcrypt)
- JWT token authentication
- Role-based authorization
- Input validation
- Rate limiting
- CORS protection
- SQL injection prevention (Prisma)
- XSS protection
- Helmet.js security headers

## 📝 License

ISC

## 🤝 Original Lovable Project

This project was bootstrapped with Lovable.

**Project URL**: https://lovable.dev/projects/e8ba2c55-c432-4c0e-a3c6-8557aae34f7f

The original frontend has been preserved in the `customer-frontend` directory and enhanced with additional features.

