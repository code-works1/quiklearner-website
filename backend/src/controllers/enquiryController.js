const Enquiry    = require('../models/Enquiry')
const nodemailer = require('nodemailer')

// ── Email transporter ────────────────────────────────────────────────────────
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS, // use App Password, not account password
  },
})

// ── Send confirmation email to student ──────────────────────────────────────
async function sendStudentEmail(enquiry) {
  const html = `
    <div style="font-family: 'DM Sans', sans-serif; max-width: 600px; margin: 0 auto; background: #f8f9fc; padding: 32px;">
      <div style="background: linear-gradient(135deg,#1a2355,#2d3a7c); border-radius: 16px; padding: 32px; text-align: center; margin-bottom: 24px;">
        <h1 style="color: white; margin: 0; font-size: 24px;">SARAVIINFOTECH</h1>
        <p style="color: rgba(255,255,255,0.7); margin: 4px 0 0; font-size: 12px; letter-spacing: 2px;">SOFTWARE TRAINING & DEVELOPMENT</p>
      </div>
      <div style="background: white; border-radius: 16px; padding: 32px;">
        <h2 style="color: #1a2355; margin-top: 0;">Hi ${enquiry.name}! 👋</h2>
        <p style="color: #6b7280; line-height: 1.6;">
          Thank you for your interest in <strong style="color: #1a2355;">${enquiry.course}</strong> at Saraviinfotech. We've received your enquiry and our team will contact you within <strong>24 hours</strong>.
        </p>
        <div style="background: #f8f9fc; border-radius: 12px; padding: 20px; margin: 20px 0;">
          <p style="margin: 0; font-size: 14px; color: #6b7280;"><strong>Course:</strong> ${enquiry.course}</p>
          <p style="margin: 8px 0 0; font-size: 14px; color: #6b7280;"><strong>Phone:</strong> ${enquiry.phone}</p>
        </div>
        <p style="color: #6b7280; font-size: 14px;">In the meantime, you can reach us at:</p>
        <p style="color: #1a2355; font-weight: bold;">📞 +91 8143105167 / +91 7675854003</p>
        <div style="margin-top: 24px; text-align: center;">
          <a href="https://saraviinfotech.com/courses" style="display: inline-block; background: linear-gradient(135deg,#f5a623,#f97316); color: white; padding: 12px 28px; border-radius: 10px; text-decoration: none; font-weight: bold;">
            Explore All Courses →
          </a>
        </div>
      </div>
      <p style="text-align: center; color: #9ca3af; font-size: 12px; margin-top: 20px;">
        © ${new Date().getFullYear()} Saraviinfotech, Hyderabad
      </p>
    </div>
  `
  await transporter.sendMail({
    from: `"Saraviinfotech" <${process.env.EMAIL_USER}>`,
    to: enquiry.email,
    subject: `Your enquiry for ${enquiry.course} — Saraviinfotech`,
    html,
  })
}

// ── Send notification to admin ───────────────────────────────────────────────
async function sendAdminEmail(enquiry) {
  await transporter.sendMail({
    from: `"Website Enquiry" <${process.env.EMAIL_USER}>`,
    to: process.env.ADMIN_EMAIL || 'support@saraviinfotech.com',
    subject: `🔔 New Enquiry: ${enquiry.name} — ${enquiry.course}`,
    html: `
      <h2>New Enquiry Received</h2>
      <table border="1" cellpadding="8" cellspacing="0" style="border-collapse: collapse; width: 100%;">
        <tr><td><b>Name</b></td><td>${enquiry.name}</td></tr>
        <tr><td><b>Email</b></td><td>${enquiry.email}</td></tr>
        <tr><td><b>Phone</b></td><td>${enquiry.phone}</td></tr>
        <tr><td><b>Course</b></td><td>${enquiry.course}</td></tr>
        <tr><td><b>Message</b></td><td>${enquiry.message || 'N/A'}</td></tr>
        <tr><td><b>Time</b></td><td>${new Date().toLocaleString('en-IN')}</td></tr>
      </table>
    `,
  })
}

// ── Controller: Create enquiry ───────────────────────────────────────────────
exports.createEnquiry = async (req, res) => {
  try {
    const { name, email, phone, course, message } = req.body

    // Check for duplicate within 24h
    const recentDuplicate = await Enquiry.findOne({
      email,
      course,
      createdAt: { $gte: new Date(Date.now() - 24 * 60 * 60 * 1000) },
    })
    if (recentDuplicate) {
      return res.status(409).json({ error: 'You have already submitted an enquiry for this course today.' })
    }

    const enquiry = await Enquiry.create({
      name, email, phone, course, message,
      ip: req.ip,
      source: 'website',
    })

    // Send emails (non-blocking — don't fail the request if email fails)
    Promise.all([
      sendStudentEmail(enquiry).catch(e => console.error('Student email failed:', e.message)),
      sendAdminEmail(enquiry).catch(e => console.error('Admin email failed:', e.message)),
    ])

    res.status(201).json({
      success: true,
      message: 'Enquiry submitted successfully! We will contact you within 24 hours.',
      id: enquiry._id,
    })
  } catch (err) {
    if (err.name === 'ValidationError') {
      const errors = Object.values(err.errors).map(e => e.message)
      return res.status(400).json({ error: errors.join(', ') })
    }
    console.error('Enquiry creation error:', err)
    res.status(500).json({ error: 'Internal server error' })
  }
}

// ── Controller: Get all enquiries (admin) ────────────────────────────────────
exports.getEnquiries = async (req, res) => {
  try {
    const page  = parseInt(req.query.page)  || 1
    const limit = parseInt(req.query.limit) || 20
    const skip  = (page - 1) * limit

    const [enquiries, total] = await Promise.all([
      Enquiry.find().sort({ createdAt: -1 }).skip(skip).limit(limit).lean(),
      Enquiry.countDocuments(),
    ])

    res.json({
      enquiries,
      pagination: { page, limit, total, pages: Math.ceil(total / limit) },
    })
  } catch (err) {
    res.status(500).json({ error: 'Internal server error' })
  }
}
