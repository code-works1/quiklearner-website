const express = require('express')
const Enquiry = require('../models/Enquiry')
const {
  buildEnquiriesExcelBuffer,
  saveEnquiriesExcelFile,
  excelPath,
} = require('../utils/excelService')
const { sendEnquiryEmail } = require('../utils/sendMail')

const router = express.Router()

router.post('/', async (req, res) => {
  try {
    const { name, email, phone, course, message } = req.body

    if (!name || !email || !phone || !course) {
      return res.status(400).json({
        success: false,
        message: 'Name, email, phone and course are required',
      })
    }

    const enquiry = await Enquiry.create({
      name: String(name).trim(),
      email: String(email).toLowerCase().trim(),
      phone: String(phone).trim(),
      course,
      message,
      status: 'new',
      source: 'website',
      ip:
        req.headers['x-forwarded-for']?.split(',')[0]?.trim() ||
        req.socket.remoteAddress ||
        '',
    })

    const enquiries = await Enquiry.find().sort({ createdAt: 1 }).lean()
    const excelBuffer = await buildEnquiriesExcelBuffer(enquiries)

    try {
      await saveEnquiriesExcelFile(excelBuffer)
    } catch (error) {
      console.error('Excel save failed:', error.message)
    }

    // Send success response first
    res.status(201).json({
      success: true,
      message: 'Enquiry submitted successfully',
      data: enquiry,
      excelSaved: true,
    })

    // Send email in background
    setImmediate(async () => {
      try {
        await sendEnquiryEmail(enquiry, excelBuffer)
        console.log('Admin email sent successfully')
      } catch (error) {
        console.error('Admin email failed:', error.message)
      }
    })
  } catch (error) {
    console.error('Enquiry submit error:', error)

    return res.status(500).json({
      success: false,
      message: 'Failed to submit enquiry',
      error: error.message,
    })
  }
})
module.exports = router
