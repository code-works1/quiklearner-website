const express  = require('express')
const mongoose = require('mongoose')
const router   = express.Router()

// GET /api/health
router.get('/', (req, res) => {
  const dbState = mongoose.connection.readyState
  const dbStatus = { 0: 'disconnected', 1: 'connected', 2: 'connecting', 3: 'disconnecting' }

  res.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    uptime: `${Math.floor(process.uptime())}s`,
    database: dbStatus[dbState] || 'unknown',
    version: process.env.npm_package_version || '1.0.0',
    env: process.env.NODE_ENV || 'development',
  })
})

module.exports = router
