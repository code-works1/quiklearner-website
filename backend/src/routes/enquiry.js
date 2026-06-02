const express = require('express')
const { body, validationResult } = require('express-validator')
const { createEnquiry, getEnquiries } = require('../controllers/enquiryController')

const router = express.Router()

// Validation rules
const validateEnquiry = [
  body('name').trim().isLength({ min: 2, max: 100 }).withMessage('Name must be 2–100 characters'),
  body('email').isEmail().normalizeEmail().withMessage('Invalid email'),
  body('phone').matches(/^[6-9]\d{9}$/).withMessage('Invalid Indian mobile number'),
  body('course').notEmpty().withMessage('Course is required'),
  body('message').optional().isLength({ max: 1000 }).withMessage('Message too long'),
]

// Middleware to check validation
const checkValidation = (req, res, next) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400).json({ error: errors.array()[0].msg })
  }
  next()
}

// POST /api/enquiry
router.post('/', validateEnquiry, checkValidation, createEnquiry)

// GET /api/enquiry (protected — add auth middleware in production)
router.get('/', getEnquiries)

module.exports = router
