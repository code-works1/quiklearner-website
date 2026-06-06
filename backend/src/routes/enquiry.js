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

    let excelSaved = false
    let excelError = null

    try {
      await saveEnquiriesExcelFile(excelBuffer)
      excelSaved = true
    } catch (error) {
      excelError = error.message
      console.error('Excel file save failed:', error.message)
    }

    let emailSent = false
    let emailError = null

    try {
      await sendEnquiryEmail(enquiry, excelBuffer)
      emailSent = true
    } catch (error) {
      emailError = error.message
      console.error('Admin email failed:', error.message)
    }

    return res.status(201).json({
      success: true,
      message: 'Enquiry submitted successfully',
      data: enquiry,
      excelSaved,
      excelFile: excelPath,
      excelError,
      emailSent,
      emailError,
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

router.get('/', async (req, res) => {
  try {
    const enquiries = await Enquiry.find().sort({ createdAt: -1 }).lean()

    return res.status(200).json({
      success: true,
      count: enquiries.length,
      data: enquiries,
    })
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Failed to fetch enquiries',
      error: error.message,
    })
  }
})

module.exports = router
