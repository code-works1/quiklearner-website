require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const helmet = require('helmet')
const morgan = require('morgan')
const compression = require('compression')
const rateLimit = require('express-rate-limit')

const enquiryRoutes = require('./routes/enquiry')
const healthRoutes = require('./routes/health')

const app = express()
const PORT = process.env.PORT || 5000

// Railway / reverse proxy support
app.set('trust proxy', 1)

// ── Security middleware ──────────────────────────────────────────────────────
app.use(helmet())
app.use(compression())
app.use(morgan('combined'))

// ── CORS setup ───────────────────────────────────────────────────────────────
// Add frontend URL later in Railway as FRONTEND_URL=https://your-vercel-url.vercel.app
const allowedOrigins = [
  'http://localhost:3000',
  'http://127.0.0.1:3000',
  'https://saraviinfotech.com',
  'https://www.saraviinfotech.com',
  'https://quicklearner.com',
  'https://www.quicklearner.com',
  process.env.FRONTEND_URL,
  process.env.CLIENT_URL,
].filter(Boolean)

app.use(
  cors({
    origin: (origin, callback) => {
      // Allow Postman, curl, Railway health checks, server-to-server calls
      if (!origin) {
        return callback(null, true)
      }

      // Allow exact configured frontend domains
      if (allowedOrigins.includes(origin)) {
        return callback(null, true)
      }

      // Temporarily allow Vercel preview URLs until final frontend URL is added
      if (origin.endsWith('.vercel.app')) {
        return callback(null, true)
      }

      return callback(new Error(`CORS blocked for origin: ${origin}`))
    },
    credentials: true,
  })
)

// ── Body parsers ─────────────────────────────────────────────────────────────
app.use(express.json({ limit: '10kb' }))
app.use(express.urlencoded({ extended: true, limit: '10kb' }))

// ── Rate limiting ────────────────────────────────────────────────────────────
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: { error: 'Too many requests. Please try again later.' },
  standardHeaders: true,
  legacyHeaders: false,
})

app.use('/api/', limiter)

const enquiryLimiter = rateLimit({
  windowMs: 60 * 60 * 1000,
  max: 5,
  message: { error: 'Too many enquiries submitted. Please try again in an hour.' },
  standardHeaders: true,
  legacyHeaders: false,
})

// ── Root route for Railway/public testing ────────────────────────────────────
app.get('/', (req, res) => {
  res.status(200).json({
    status: 'ok',
    service: 'quicklearner-backend',
    message: 'QuickLearner backend is running',
  })
})

// Simple health route directly inside index.js
app.get('/api/health', (req, res) => {
  res.status(200).json({
    status: 'ok',
    service: 'quicklearner-backend',
    database:
      mongoose.connection.readyState === 1
        ? 'connected'
        : 'not_connected',
  })
})

// Existing health route file, keep this if you already have routes/health.js
app.use('/api/health', healthRoutes)

// Enquiry routes
app.use('/api/enquiry', enquiryLimiter, enquiryRoutes)

// ── 404 handler ──────────────────────────────────────────────────────────────
app.use((req, res) => {
  res.status(404).json({
    error: 'Route not found',
    path: req.originalUrl,
  })
})

// ── Global error handler ─────────────────────────────────────────────────────
app.use((err, req, res, next) => {
  console.error(err.stack)

  res.status(err.status || 500).json({
    error:
      process.env.NODE_ENV === 'production'
        ? 'Internal server error'
        : err.message,
  })
})

// ── Start server immediately ─────────────────────────────────────────────────
// Important for Railway: bind to 0.0.0.0 and use process.env.PORT
const server = app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 Server running on port ${PORT}`)
})

// ── MongoDB connection ───────────────────────────────────────────────────────
// Do not block server startup while MongoDB connects
mongoose
  .connect(process.env.MONGODB_URI, {
    serverSelectionTimeoutMS: 10000,
    socketTimeoutMS: 45000,
  })
  .then(() => {
    console.log('✅ MongoDB connected')
  })
  .catch((err) => {
    console.error('❌ MongoDB connection failed:', err.message)
  })

// ── Graceful shutdown ────────────────────────────────────────────────────────
process.on('SIGTERM', async () => {
  console.log('SIGTERM received, closing server...')

  server.close(async () => {
    await mongoose.disconnect()
    console.log('MongoDB disconnected')
    process.exit(0)
  })
})

process.on('SIGINT', async () => {
  console.log('SIGINT received, closing server...')

  server.close(async () => {
    await mongoose.disconnect()
    console.log('MongoDB disconnected')
    process.exit(0)
  })
})
