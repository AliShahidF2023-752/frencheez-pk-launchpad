# Deployment Guide

This guide provides step-by-step instructions for deploying the Frencheez PK Launchpad e-commerce application to production.

## Overview

The application consists of three components that need to be deployed:
1. **Backend API** - Node.js/Express server with PostgreSQL database
2. **Admin Dashboard** - React/Vite frontend for administrators
3. **Customer Frontend** - React/Vite frontend for customers

## Recommended Platforms

- **Backend**: Render, Railway, or Heroku
- **Frontend**: Vercel or Netlify
- **Database**: Render PostgreSQL, Railway PostgreSQL, or Supabase

---

## Option 1: Deploying to Render + Vercel

### Step 1: Deploy PostgreSQL Database on Render

1. Go to [Render Dashboard](https://dashboard.render.com)
2. Click "New +" → "PostgreSQL"
3. Configure:
   - **Name**: frencheez-db
   - **Database**: frencheez_db
   - **User**: (auto-generated)
   - **Region**: Choose nearest to your users
   - **Plan**: Free tier for testing
4. Click "Create Database"
5. Copy the "Internal Database URL" (for backend)

### Step 2: Deploy Backend on Render

1. In Render Dashboard, click "New +" → "Web Service"
2. Connect your GitHub repository
3. Configure:
   - **Name**: frencheez-api
   - **Region**: Same as database
   - **Root Directory**: `backend`
   - **Environment**: Node
   - **Build Command**: `npm install && npx prisma generate && npm run build`
   - **Start Command**: `npm start`
   - **Plan**: Free tier for testing
4. Add environment variables:
   ```
   PORT=5000
   NODE_ENV=production
   DATABASE_URL=[paste Internal Database URL from Step 1]
   JWT_SECRET=[generate strong secret]
   JWT_REFRESH_SECRET=[generate strong secret]
   JWT_EXPIRE=1h
   JWT_REFRESH_EXPIRE=7d
   CORS_ORIGIN=https://your-admin-domain.vercel.app,https://your-customer-domain.vercel.app
   EMAIL_HOST=smtp.gmail.com
   EMAIL_PORT=587
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASSWORD=your-app-password
   EMAIL_FROM=noreply@frencheez.com
   UPLOAD_DIR=uploads
   MAX_FILE_SIZE=5242880
   RATE_LIMIT_WINDOW_MS=900000
   RATE_LIMIT_MAX_REQUESTS=100
   ```
5. Click "Create Web Service"
6. Wait for deployment to complete
7. Copy your backend URL (e.g., `https://frencheez-api.onrender.com`)

### Step 3: Deploy Admin Dashboard on Vercel

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click "Add New" → "Project"
3. Import your GitHub repository
4. Configure:
   - **Framework Preset**: Vite
   - **Root Directory**: `admin-dashboard`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
5. Add environment variable:
   ```
   VITE_API_URL=https://frencheez-api.onrender.com
   ```
6. Click "Deploy"
7. Copy your admin URL (e.g., `https://frencheez-admin.vercel.app`)

### Step 4: Deploy Customer Frontend on Vercel

1. In Vercel Dashboard, click "Add New" → "Project"
2. Import the same repository again
3. Configure:
   - **Framework Preset**: Vite
   - **Root Directory**: `customer-frontend`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
4. Add environment variable:
   ```
   VITE_API_URL=https://frencheez-api.onrender.com
   ```
5. Click "Deploy"
6. Copy your customer URL (e.g., `https://frencheez-store.vercel.app`)

### Step 5: Update CORS in Backend

1. Go back to Render Dashboard → Backend service
2. Update the `CORS_ORIGIN` environment variable with your actual Vercel URLs:
   ```
   CORS_ORIGIN=https://frencheez-admin.vercel.app,https://frencheez-store.vercel.app
   ```
3. Save and redeploy

### Step 6: Run Database Migrations

1. In Render Dashboard, go to your backend service
2. Click "Shell" tab
3. Run migrations:
   ```bash
   npx prisma migrate deploy
   ```

### Step 7: Create Admin User

1. Register a user via the API or customer frontend
2. In Render Dashboard, go to your PostgreSQL database
3. Click "Connect" → "External Connection"
4. Use psql or a GUI tool to connect
5. Run SQL:
   ```sql
   UPDATE "User" SET role = 'ADMIN' WHERE email = 'admin@example.com';
   ```

---

## Option 2: Deploying to Railway + Vercel

### Step 1: Deploy to Railway

1. Go to [Railway](https://railway.app)
2. Click "New Project" → "Deploy from GitHub repo"
3. Select your repository
4. Railway will auto-detect the services

### Add PostgreSQL:
1. Click "New" → "Database" → "PostgreSQL"
2. Railway will automatically set DATABASE_URL

### Configure Backend:
1. Click on backend service
2. Set root directory: `backend`
3. Add build command: `npm install && npx prisma generate && npm run build`
4. Add start command: `npm start`
5. Add environment variables (same as Render option)
6. Deploy

### Step 2-4: Deploy Frontends on Vercel
(Same as Option 1, Steps 3-4)

---

## Option 3: Docker Deployment

### Step 1: Create Dockerfiles

**Backend Dockerfile** (create in `backend/Dockerfile`):
```dockerfile
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npx prisma generate
RUN npm run build

FROM node:18-alpine
WORKDIR /app
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/prisma ./prisma
EXPOSE 5000
CMD ["npm", "start"]
```

**Frontend Dockerfile** (create in `admin-dashboard/Dockerfile` and `customer-frontend/Dockerfile`):
```dockerfile
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

**nginx.conf** (create in both frontend directories):
```nginx
server {
    listen 80;
    server_name localhost;
    root /usr/share/nginx/html;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

### Step 2: Create docker-compose.yml

```yaml
version: '3.8'

services:
  postgres:
    image: postgres:15-alpine
    environment:
      POSTGRES_USER: postgres
      POSTGRES_PASSWORD: password
      POSTGRES_DB: frencheez_db
    volumes:
      - postgres_data:/var/lib/postgresql/data
    ports:
      - "5432:5432"

  backend:
    build: ./backend
    environment:
      DATABASE_URL: postgresql://postgres:password@postgres:5432/frencheez_db
      JWT_SECRET: your-secret-key
      JWT_REFRESH_SECRET: your-refresh-secret
      PORT: 5000
      NODE_ENV: production
      CORS_ORIGIN: http://localhost:3000,http://localhost:8080
    ports:
      - "5000:5000"
    depends_on:
      - postgres
    command: sh -c "npx prisma migrate deploy && npm start"

  admin:
    build: ./admin-dashboard
    environment:
      VITE_API_URL: http://localhost:5000
    ports:
      - "3000:80"
    depends_on:
      - backend

  customer:
    build: ./customer-frontend
    environment:
      VITE_API_URL: http://localhost:5000
    ports:
      - "8080:80"
    depends_on:
      - backend

volumes:
  postgres_data:
```

### Step 3: Deploy with Docker Compose

```bash
docker-compose up -d
```

---

## Post-Deployment Checklist

After deployment, verify:

- [ ] Backend API is accessible (check health endpoint)
- [ ] API documentation is available at `/api-docs`
- [ ] Database migrations have run successfully
- [ ] Admin dashboard loads and can connect to API
- [ ] Customer frontend loads and can connect to API
- [ ] CORS is configured correctly (no CORS errors in browser console)
- [ ] Environment variables are set correctly
- [ ] SSL/HTTPS is enabled (especially for production)
- [ ] Admin user has been created
- [ ] File uploads work correctly
- [ ] Authentication works (login/register)
- [ ] All API endpoints respond correctly

---

## Monitoring and Maintenance

### Logs

**Render:**
- Go to your service → "Logs" tab

**Vercel:**
- Go to your deployment → "Functions" → View logs

**Railway:**
- Click on service → "Deployments" → View logs

### Database Backups

**Render:**
- Automatic backups on paid plans
- Manual backup: Use pg_dump

**Railway:**
- Automatic backups
- Access via database dashboard

### Updating Code

1. Push changes to GitHub
2. Automatic deployment will trigger (if enabled)
3. Or manually redeploy from platform dashboard

### Environment Variables

To update environment variables:
1. Go to service settings on your platform
2. Update variables
3. Redeploy the service

---

## Troubleshooting Deployment Issues

### Backend won't start
- Check logs for error messages
- Verify DATABASE_URL is correct
- Ensure all required environment variables are set
- Check if Prisma migrations have run

### CORS errors
- Verify CORS_ORIGIN in backend includes frontend URLs
- Check that URLs don't have trailing slashes
- Redeploy backend after updating CORS_ORIGIN

### Database connection failed
- Verify DATABASE_URL format is correct
- Check if database is running
- Ensure backend and database are in same region (for Render)
- For Railway, ensure database is linked to backend service

### Build fails
- Check build logs for specific errors
- Verify package.json scripts are correct
- Ensure all dependencies are in package.json
- Check Node.js version compatibility

### 404 errors on frontend routes
- Ensure vercel.json or nginx.conf is configured for SPA routing
- Check that rewrites/redirects are set up correctly

---

## Security Considerations for Production

1. **Environment Variables**
   - Use strong, unique secrets for JWT tokens
   - Never commit .env files
   - Rotate secrets regularly

2. **Database**
   - Use strong passwords
   - Enable SSL connections
   - Restrict access to trusted IPs

3. **API**
   - Enable rate limiting
   - Use HTTPS only
   - Keep dependencies updated
   - Monitor for security vulnerabilities

4. **Monitoring**
   - Set up error tracking (e.g., Sentry)
   - Monitor API response times
   - Set up uptime monitoring
   - Configure alerts for errors

---

## Cost Estimates (Monthly)

### Free Tier (Development/Testing)
- Render: Free tier (with limitations)
- Vercel: Free tier (with bandwidth limits)
- Railway: $5 credit monthly
- **Total**: $0-5/month

### Production (Small Business)
- Render Web Service: $7/month
- Render PostgreSQL: $7/month
- Vercel Pro: $20/month (for 2 projects)
- **Total**: ~$34/month

### Scaling Up
- Increase as traffic grows
- Add CDN for static assets
- Consider Redis for caching
- Use dedicated database instances

---

## Support

For deployment issues:
- Check platform-specific documentation
- Review deployment logs
- Open an issue on GitHub
- Contact platform support

---

**Last Updated**: November 2024
