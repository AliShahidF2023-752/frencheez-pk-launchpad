# Quick Start Guide for Students

## 🎯 What You Have

This repository contains a **complete, production-ready e-commerce application** with:
- ✅ Backend API (Node.js/Express/TypeScript)
- ✅ Admin Dashboard (React/TypeScript/Vite)
- ✅ Customer Frontend (React/TypeScript/Vite)
- ✅ Complete documentation
- ✅ Deployment configurations

## 🚀 Getting Started Locally (3 Steps)

### Step 1: Install Dependencies
```bash
npm run install:all
```

### Step 2: Set Up Backend
```bash
cd backend
cp .env.example .env
# Edit .env with your PostgreSQL database URL
npx prisma generate
npx prisma migrate dev
npm run dev
```
Backend runs on: http://localhost:5000

### Step 3: Start Frontends (in separate terminals)
```bash
# Terminal 2
cd admin-dashboard
cp .env.example .env
npm run dev
# Admin runs on: http://localhost:3000

# Terminal 3
cd customer-frontend
cp .env.example .env
npm run dev
# Customer runs on: http://localhost:5173
```

### Step 4: Create Admin User
```bash
# In backend terminal
npx prisma studio
# Or use SQL: UPDATE "User" SET role = 'ADMIN' WHERE email = 'your@email.com';
```

## 📦 Deployment (Free Options)

### Option 1: Vercel + Render (Recommended)
1. **Database**: Create PostgreSQL on Render (Free)
2. **Backend**: Deploy to Render from `backend/` folder
3. **Admin**: Deploy to Vercel from `admin-dashboard/` folder
4. **Customer**: Deploy to Vercel from `customer-frontend/` folder

**See [DEPLOYMENT.md](DEPLOYMENT.md) for detailed step-by-step instructions!**

### Option 2: Railway (All-in-One)
1. Connect GitHub to Railway
2. Add PostgreSQL database
3. Deploy all three services
4. Configure environment variables

## 📝 For Your Assignment Submission

1. **README.md** - Already complete with:
   - Your student information (update if needed)
   - All required sections
   - Technology stack
   - Installation instructions
   - API documentation

2. **Update Deployment Links** - After deploying, update these in README.md:
   ```markdown
   - **Customer Frontend**: [Your Vercel URL]
   - **Admin Dashboard**: [Your Vercel URL]
   - **Backend API**: [Your Render/Railway URL]
   ```

3. **Screenshots** - Take screenshots of:
   - Admin dashboard
   - Customer homepage
   - Product pages
   - Add to README.md under Screenshots section

## 🎓 What Makes This Assignment-Ready

✅ All backend requirements (Node.js, Express, TypeScript, PostgreSQL, Prisma)
✅ All frontend requirements (React, TypeScript, Tailwind, shadcn/ui)
✅ Complete authentication and authorization
✅ CRUD operations for all entities
✅ Security measures (JWT, bcrypt, CORS, rate limiting)
✅ Comprehensive documentation
✅ Deployment configuration files
✅ Professional code quality

## 📚 Documentation Structure

- **README.md** - Main documentation (student info, features, setup)
- **DEPLOYMENT.md** - Deployment guide for multiple platforms
- **ARCHITECTURE.md** - System architecture overview
- **backend/README.md** - Backend API documentation
- **admin-dashboard/README.md** - Admin documentation
- **customer-frontend/README.md** - Customer frontend documentation

## 🆘 Need Help?

1. **Setup Issues**: Check [README.md](README.md) Troubleshooting section
2. **Deployment Issues**: Check [DEPLOYMENT.md](DEPLOYMENT.md)
3. **Backend Issues**: Check [backend/README.md](backend/README.md)
4. **API Documentation**: http://localhost:5000/api-docs (when running)

## ⚡ Quick Commands

```bash
# Install everything
npm run install:all

# Run backend
npm run dev:backend

# Run admin
npm run dev:admin

# Run customer
npm run dev:customer

# Build everything
npm run build:all

# Database tools
npm run prisma:studio
npm run prisma:generate
npm run prisma:migrate
```

## 🎯 Your Checklist

- [ ] Clone repository
- [ ] Install dependencies
- [ ] Set up PostgreSQL database
- [ ] Configure .env files
- [ ] Run migrations
- [ ] Test locally
- [ ] Deploy to production
- [ ] Update README with deployment URLs
- [ ] Take screenshots
- [ ] Verify all features work
- [ ] Submit assignment

## 🌟 Bonus Points

- Add more products via admin dashboard
- Customize branding (colors, logos)
- Add more features
- Write about challenges overcome
- Deploy to multiple platforms

---

**Good luck with your assignment! 🚀**
