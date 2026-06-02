require('dotenv').config()
const express    = require('express')
const mongoose   = require('mongoose')
const cors       = require('cors')
const helmet     = require('helmet')
const morgan     = require('morgan')
const compression = require('compression')
const rateLimit  = require('express-rate-limit')

const enquiryRoutes = require('./routes/enquiry')
const healthRoutes  = require('./routes/health')

const app  = express()
const PORT = process.env.PORT || 5000

// ── Security middleware ──────────────────────────────────────────────────────
app.use(helmet())
app.use(compression())
app.use(morgan('combined'))

// CORS — allow frontend only
app.use(cors({
  origin: [
    process.env.FRONTEND_URL || 'http://localhost:3000',
    'https://saraviinfotech.com',
    'https://www.saraviinfotech.com',
  ],
  credentials: true,
}))

// Rate limiting — 100 requests per 15 minutes per IP
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: { error: 'Too many requests. Please try again later.' },
  standardHeaders: true,
  legacyHeaders: false,
})
app.use('/api/', limiter)

// Stricter limit for enquiry form
const enquiryLimiter = rateLimit({
  windowMs: 60 * 60 * 1000,  // 1 hour
  max: 5,
  message: { error: 'Too many enquiries submitted. Please try again in an hour.' },
})

app.use(express.json({ limit: '10kb' }))
app.use(express.urlencoded({ extended: true, limit: '10kb' }))

// ── Routes ───────────────────────────────────────────────────────────────────
app.use('/api/health', healthRoutes)
app.use('/api/enquiry', enquiryLimiter, enquiryRoutes)

// 404
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' })
})

// Global error handler
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(err.status || 500).json({
    error: process.env.NODE_ENV === 'production' ? 'Internal server error' : err.message,
  })
})

// ── Database + Start ─────────────────────────────────────────────────────────
mongoose
  .connect(process.env.MONGODB_URI, {
    serverSelectionTimeoutMS: 5000,
    socketTimeoutMS: 45000,
  })
  .then(() => {
    console.log('✅ MongoDB connected')
    app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`))
  })
  .catch(err => {
    console.error('❌ MongoDB connection failed:', err.message)
    process.exit(1)
  })

// Graceful shutdown
process.on('SIGTERM', async () => {
  console.log('SIGTERM received, closing server...')
  await mongoose.disconnect()
  process.exit(0)
})
