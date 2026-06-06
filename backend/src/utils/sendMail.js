const nodemailer = require('nodemailer')

function escapeHtml(value = '') {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}

function getMailConfig() {
  const user = process.env.SMTP_USER || process.env.EMAIL_USER
  const pass = process.env.SMTP_PASS || process.env.EMAIL_PASS
  const adminEmail = process.env.ADMIN_EMAIL

  if (!user || !pass) {
    throw new Error('SMTP_USER/SMTP_PASS missing in .env')
  }

  if (!adminEmail) {
    throw new Error('ADMIN_EMAIL missing in .env')
  }

  return { user, pass, adminEmail }
}

async function sendEnquiryEmail(enquiry, excelBuffer) {
  const { user, pass, adminEmail } = getMailConfig()

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user,
      pass,
    },
  })

  const createdAt = enquiry.createdAt
    ? new Date(enquiry.createdAt).toLocaleString('en-IN')
    : new Date().toLocaleString('en-IN')

  const htmlContent = `
    <div style="font-family: Arial, sans-serif; padding: 20px; color: #111827;">
      <h2 style="color:#e50914;">New Enquiry Received - Quik Learner</h2>

      <table cellpadding="10" cellspacing="0" border="1" style="border-collapse: collapse; width: 100%; border-color: #fecaca;">
        <tr><td><strong>Name</strong></td><td>${escapeHtml(enquiry.name)}</td></tr>
        <tr><td><strong>Email</strong></td><td>${escapeHtml(enquiry.email)}</td></tr>
        <tr><td><strong>Phone</strong></td><td>${escapeHtml(enquiry.phone)}</td></tr>
        <tr><td><strong>Course</strong></td><td>${escapeHtml(enquiry.course)}</td></tr>
        <tr><td><strong>Message</strong></td><td>${escapeHtml(enquiry.message || 'No message provided')}</td></tr>
        <tr><td><strong>Source</strong></td><td>${escapeHtml(enquiry.source || 'website')}</td></tr>
        <tr><td><strong>Created At</strong></td><td>${createdAt}</td></tr>
      </table>

      <p style="margin-top:20px;">Updated enquiry Excel sheet is attached.</p>
    </div>
  `

  await transporter.sendMail({
    from: `"Quik Learner Website" <${user}>`,
    to: adminEmail,
    subject: `New Enquiry from ${enquiry.name} - ${enquiry.course}`,
    html: htmlContent,
    attachments: [
      {
        filename: 'enquiries.xlsx',
        content: Buffer.from(excelBuffer),
        contentType:
          'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      },
    ],
  })
}

module.exports = { sendEnquiryEmail }
