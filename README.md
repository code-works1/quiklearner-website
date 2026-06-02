# 🚀 Saraviinfotech Website — Complete Setup Guide

> **Stack:** Next.js 14 · Tailwind CSS · Node.js + Express · MongoDB Atlas  
> **Hosting:** Vercel (frontend) · Railway (backend)  
> **Cost:** ₹0/month to start

---

## 📁 Project Structure

```
saraviinfotech/
├── frontend/                   # Next.js 14 app
│   ├── src/
│   │   ├── app/                # App Router pages
│   │   │   ├── page.tsx        # Homepage
│   │   │   ├── courses/        # Courses listing + detail
│   │   │   ├── contact/        # Contact page
│   │   │   ├── about/          # About page
│   │   │   └── layout.tsx      # Root layout with Navbar/Footer
│   │   ├── components/
│   │   │   ├── layout/         # Navbar, Footer
│   │   │   ├── sections/       # Hero, Courses, WhyUs, Testimonials, CTA
│   │   │   └── ui/             # EnquiryForm, Button, Card
│   │   └── app/globals.css     # Tailwind + custom styles
│   ├── tailwind.config.js
│   ├── next.config.js
│   └── vercel.json             # Vercel deployment config
│
├── backend/                    # Node.js + Express API
│   ├── src/
│   │   ├── index.js            # Entry point with security middleware
│   │   ├── models/Enquiry.js   # MongoDB schema
│   │   ├── controllers/        # Business logic + email
│   │   └── routes/             # /api/enquiry, /api/health
│   └── railway.toml            # Railway deployment config
│
├── .github/workflows/
│   └── deploy.yml              # CI/CD — auto deploy on push to main
└── package.json                # Root scripts
```

---

## ⚡ Step 1 — Local Setup (5 minutes)

### Prerequisites
- Node.js 20+ → https://nodejs.org
- Git → https://git-scm.com

### Clone & install
```bash
git clone https://github.com/YOUR_USERNAME/saraviinfotech.git
cd saraviinfotech

# Install all dependencies at once
npm run install:all
```

### Configure environment variables

**Frontend** (`frontend/.env.local`):
```env
NEXT_PUBLIC_API_URL=http://localhost:5000
```

**Backend** (`backend/.env`):
```env
PORT=5000
NODE_ENV=development
MONGODB_URI=mongodb+srv://<user>:<pass>@cluster0.xxxxx.mongodb.net/saraviinfotech
FRONTEND_URL=http://localhost:3000
EMAIL_USER=your-gmail@gmail.com
EMAIL_PASS=your-16-char-app-password
ADMIN_EMAIL=support@saraviinfotech.com
```

### Start development servers
```bash
# Run both frontend + backend simultaneously
npm run dev

# Or separately:
npm run dev:frontend   # → http://localhost:3000
npm run dev:backend    # → http://localhost:5000
```

---

## 🗄️ Step 2 — MongoDB Atlas Setup (FREE)

1. Go to → https://www.mongodb.com/atlas
2. Create free account → **Build a Cluster** → **M0 Free Tier**
3. Choose region: **Mumbai (ap-south-1)**
4. Create database user: Security → Database Access → Add User
5. Whitelist IP: Security → Network Access → **Allow from Anywhere** (0.0.0.0/0)
6. Get connection string: Clusters → Connect → Drivers → copy URI
7. Replace `<username>` and `<password>` in your `.env`

---

## 🌐 Step 3 — Deploy Frontend to Vercel (FREE)

```bash
# Install Vercel CLI
npm install -g vercel

# From the frontend folder
cd frontend
vercel login
vercel

# For production
vercel --prod
```

**Or use GitHub integration (recommended):**
1. Push your code to GitHub
2. Go to https://vercel.com → Import Git Repository
3. Set root directory to `frontend`
4. Add environment variable: `NEXT_PUBLIC_API_URL=https://your-backend.railway.app`
5. Deploy → auto-deploys on every push to `main` ✅

---

## 🚂 Step 4 — Deploy Backend to Railway (FREE tier)

```bash
# Install Railway CLI
npm install -g @railway/cli

# From backend folder
cd backend
railway login
railway init
railway up
```

**Or use GitHub integration:**
1. Go to https://railway.app → New Project → Deploy from GitHub
2. Select `saraviinfotech/backend` folder
3. Add environment variables (all from `.env`)
4. Railway auto-detects Node.js and deploys ✅
5. Get your backend URL from Railway dashboard

---

## 📧 Step 5 — Gmail Email Setup

1. Go to Google Account → Security → Enable 2-Step Verification
2. Search "App passwords" → Create app password for "Mail"
3. Copy the 16-character password → use as `EMAIL_PASS` in `.env`

---

## 📊 Step 6 — Monitoring Setup (all FREE)

### UptimeRobot (uptime monitoring)
1. https://uptimerobot.com → Sign up free
2. Add Monitor → HTTP(s) → enter your Vercel URL
3. Set check interval: 5 minutes
4. Add email/WhatsApp alert → done ✅

### Google Analytics 4 (visitor tracking)
1. https://analytics.google.com → Create property
2. Get Measurement ID (G-XXXXXXXXXX)
3. Add to `frontend/.env.local`:
   ```env
   NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
   ```

### Sentry (error tracking)
1. https://sentry.io → Create free project → Next.js
2. Copy DSN → add to env
3. Run `npx @sentry/wizard@latest -i nextjs` in frontend folder

### BetterStack (status page)
1. https://betterstack.com → Create free account
2. Create status page at `status.saraviinfotech.com`
3. Add your monitors from UptimeRobot ✅

---

## 🔁 Step 7 — CI/CD Setup (GitHub Actions)

Add these secrets to your GitHub repo (Settings → Secrets):

| Secret | Where to get it |
|--------|----------------|
| `VERCEL_TOKEN` | Vercel dashboard → Settings → Tokens |
| `VERCEL_ORG_ID` | Vercel dashboard → Settings |
| `VERCEL_PROJECT_ID` | Vercel project settings |
| `RAILWAY_TOKEN` | Railway dashboard → Account → Tokens |
| `NEXT_PUBLIC_API_URL` | Your Railway backend URL |

After setup: **every push to `main` = auto deploy to production** 🚀

---

## 🌍 Step 8 — Custom Domain

**On Vercel:**
1. Vercel project → Settings → Domains → Add `saraviinfotech.com`
2. Add DNS records at your registrar (Namecheap, GoDaddy, etc.)
3. SSL is automatic ✅

**Cloudflare (FREE CDN + DDoS protection):**
1. Add site to Cloudflare → point nameservers
2. Enable "Proxy" on DNS records
3. SSL/TLS → Full (strict)
4. Speed → Optimization → Enable Auto Minify + Brotli ✅

---

## 📈 Scaling Guide

| Traffic Level | Action |
|--------------|--------|
| 0–1K/day | Free tiers — no action needed |
| 1K–10K/day | Upgrade Vercel to Pro ($20/mo) |
| 10K+/day | Add Redis caching (Upstash free) + Railway Pro |
| 100K+/day | Move backend to AWS ECS with auto-scaling |

---

## 🛠️ Common Commands

```bash
# Run locally
npm run dev

# Build frontend for production
npm run build:frontend

# Check backend health
curl http://localhost:5000/api/health

# View MongoDB data (use MongoDB Compass GUI)
# Connect with your MONGODB_URI string

# Deploy frontend manually
cd frontend && vercel --prod

# Deploy backend manually  
cd backend && railway up
```

---

## ✅ Checklist Before Going Live

- [ ] MongoDB Atlas cluster created, IP whitelisted
- [ ] All `.env` variables set on Vercel + Railway
- [ ] Gmail App Password configured
- [ ] Custom domain added to Vercel
- [ ] Cloudflare CDN enabled
- [ ] UptimeRobot monitor set up
- [ ] Google Analytics tracking confirmed
- [ ] Test enquiry form end-to-end
- [ ] Mobile responsiveness checked
- [ ] Lighthouse score > 90

---

## 📞 Support

Website: www.saraviinfotech.com  
Email: support@saraviinfotech.com  
Phone: +91 8143105167
