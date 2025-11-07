# Architecture Overview

```
┌─────────────────────────────────────────────────────────────────┐
│                    E-Commerce Application                        │
└─────────────────────────────────────────────────────────────────┘

┌──────────────────┐         ┌──────────────────┐         ┌──────────────────┐
│  Customer        │         │  Admin           │         │  Backend API     │
│  Frontend        │         │  Dashboard       │         │  Server          │
│                  │         │                  │         │                  │
│  React/TS/Vite   │         │  React/TS/Vite   │         │  Node/Express/TS │
│  Port: 5173      │         │  Port: 3000      │         │  Port: 5000      │
│                  │         │                  │         │                  │
│  • Marketplace   │         │  • Login         │         │  • REST API      │
│  • Products      │         │  • Dashboard     │         │  • JWT Auth      │
│  • Search        │         │  • Products      │         │  • Swagger       │
│  • Categories    │         │  • Categories    │         │  • Validation    │
│  • [Cart]        │         │  • Orders        │         │  • Security      │
│  • [Checkout]    │         │  • Users         │         │  • File Upload   │
│  • [Auth]        │         │  • Media         │         │                  │
│  • [Profile]     │         │  • Settings      │         │                  │
└────────┬─────────┘         └────────┬─────────┘         └────────┬─────────┘
         │                            │                            │
         │                            │                            │
         └────────────────────────────┴────────────────────────────┘
                                      │
                        API Calls (JWT in Headers)
                                      │
                                      ▼
         ┌────────────────────────────────────────────────────────┐
         │                    Security Layer                       │
         ├────────────────────────────────────────────────────────┤
         │  • Helmet (Security Headers)                           │
         │  • CORS (Origin Whitelist)                             │
         │  • Rate Limiting (100 req/15min)                       │
         │  • Input Validation (express-validator)                │
         │  • JWT Verification                                    │
         └────────────────┬───────────────────────────────────────┘
                          │
                          ▼
         ┌────────────────────────────────────────────────────────┐
         │                   API Routes                           │
         ├────────────────────────────────────────────────────────┤
         │  /api/auth/*        - Authentication                   │
         │  /api/products      - Product CRUD                     │
         │  /api/categories    - Category CRUD                    │
         │  /api/orders        - Order Management                 │
         │  /api/users         - User Management (Admin)          │
         │  /api/upload        - File Upload (Admin)              │
         │  /api-docs          - Swagger Documentation            │
         └────────────────┬───────────────────────────────────────┘
                          │
                          ▼
         ┌────────────────────────────────────────────────────────┐
         │                   Controllers                          │
         ├────────────────────────────────────────────────────────┤
         │  • AuthController      - Register, Login, Logout       │
         │  • ProductController   - Product CRUD                  │
         │  • CategoryController  - Category CRUD                 │
         │  • OrderController     - Order Management              │
         │  • UserController      - User Management               │
         │  • UploadController    - File Handling                 │
         └────────────────┬───────────────────────────────────────┘
                          │
                          ▼
         ┌────────────────────────────────────────────────────────┐
         │                   Prisma ORM                           │
         ├────────────────────────────────────────────────────────┤
         │  • Type-safe database client                           │
         │  • SQL injection protection                            │
         │  • Migration management                                │
         │  • Query optimization                                  │
         └────────────────┬───────────────────────────────────────┘
                          │
                          ▼
         ┌────────────────────────────────────────────────────────┐
         │                  PostgreSQL                            │
         ├────────────────────────────────────────────────────────┤
         │  Database Models:                                      │
         │  ├─ User            (auth, roles, profile)             │
         │  ├─ Product         (catalog, pricing, inventory)      │
         │  ├─ Category        (hierarchical)                     │
         │  ├─ Order           (order tracking)                   │
         │  ├─ OrderItem       (line items)                       │
         │  ├─ Review          (ratings, comments)                │
         │  ├─ WishlistItem    (favorites)                        │
         │  ├─ Address         (shipping/billing)                 │
         │  ├─ Media           (file uploads)                     │
         │  └─ Setting         (configuration)                    │
         └────────────────────────────────────────────────────────┘


Authentication Flow:
═══════════════════

┌─────────┐      register/login      ┌──────────┐
│ Client  │ ────────────────────────▶ │ Backend  │
└─────────┘                           └──────────┘
     │                                     │
     │                                     ├─ Validate credentials
     │                                     ├─ Hash password (bcrypt)
     │                                     ├─ Generate JWT tokens
     │                                     └─ Store refresh token
     │                                     │
     │      Access Token + Refresh Token   │
     │ ◀────────────────────────────────────┘
     │
     ├─ Store tokens locally
     │
     │      API Request + Authorization: Bearer {token}
     ├─────────────────────────────────────▶
     │                                     │
     │                                     ├─ Verify JWT
     │                                     ├─ Check role
     │                                     ├─ Process request
     │                                     │
     │              Response               │
     │ ◀───────────────────────────────────┘


Data Flow Example (Product Management):
═══════════════════════════════════════

Admin Dashboard                Backend API              Database
───────────────               ───────────               ─────────
1. Admin logs in      ──────▶ Verify credentials ────▶ User table
                              Generate JWT         ◀──── Return user
                     ◀────── Return tokens
                     
2. View products      ──────▶ Verify JWT token
   GET /api/products          Check admin role
                              Fetch products      ────▶ Product table
                              Apply pagination    ◀──── Return products
                     ◀────── Return product list

3. Create product     ──────▶ Verify JWT token
   POST /api/products         Check admin role
   {name, price, ...}         Validate input
                              Create product      ────▶ Product table
                              Upload images       ────▶ Media table
                     ◀────── Return created product    ◀──── Confirm creation

4. Update product     ──────▶ Verify JWT token
   PUT /api/products/:id      Check admin role
   {name, price, ...}         Validate input
                              Update product      ────▶ Product table
                     ◀────── Return updated product   ◀──── Confirm update


Security Layers:
════════════════

Layer 1: Network
├─ CORS (origin whitelist)
├─ Rate Limiting (100 req/15min)
└─ Helmet.js (security headers)

Layer 2: Authentication
├─ JWT tokens in Authorization headers
├─ Token expiration (1h access, 7d refresh)
├─ Password hashing (bcrypt, 10 rounds)
└─ CSRF protection (header-based tokens)

Layer 3: Authorization
├─ Role-based access control
├─ CUSTOMER - basic access
├─ ADMIN - management access
└─ SUPER_ADMIN - full access

Layer 4: Input Validation
├─ express-validator
├─ Type checking (TypeScript)
├─ Sanitization
└─ SQL injection protection (Prisma)

Layer 5: Data Protection
├─ Password hashing
├─ Sensitive data filtering
├─ Secure file upload
└─ Database constraints


Technology Stack:
═════════════════

Frontend:
├─ React 18
├─ TypeScript
├─ Vite
├─ React Router
├─ React Query (TanStack)
├─ shadcn-ui (Radix + Tailwind)
├─ React Hook Form + Zod
└─ Lucide Icons

Backend:
├─ Node.js
├─ Express.js
├─ TypeScript
├─ Prisma ORM
├─ PostgreSQL
├─ JWT (jsonwebtoken)
├─ Bcrypt
├─ Multer
├─ Express-validator
└─ Swagger (swagger-jsdoc)

DevOps:
├─ npm scripts
├─ Environment variables
├─ TypeScript compilation
└─ Monorepo structure
```
