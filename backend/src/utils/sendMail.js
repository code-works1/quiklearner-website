const { Resend } = require('resend')

function escapeHtml(value = '') {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}

async function sendEnquiryEmail(enquiry, excelBuffer) {
  if (!process.env.RESEND_API_KEY) {
    throw new Error('RESEND_API_KEY missing in Railway variables')
  }

  if (!process.env.ADMIN_EMAIL) {
    throw new Error('ADMIN_EMAIL missing in Railway variables')
  }

  const resend = new Resend(process.env.RESEND_API_KEY)

  const fromEmail = process.env.FROM_EMAIL || 'onboarding@resend.dev'
  const adminEmail = process.env.ADMIN_EMAIL

  await resend.emails.send({
    from: `Quik Learner Website <${fromEmail}>`,
    to: adminEmail,
    subject: `New Enquiry from ${enquiry.name} - ${enquiry.course}`,
    html: `
      <div style="font-family: Arial, sans-serif; padding: 20px;">
        <h2 style="color:#e50914;">New Enquiry Received - Quik Learner</h2>

        <p><strong>Name:</strong> ${escapeHtml(enquiry.name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(enquiry.email)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(enquiry.phone)}</p>
        <p><strong>Course:</strong> ${escapeHtml(enquiry.course)}</p>
        <p><strong>Message:</strong> ${escapeHtml(enquiry.message || 'No message provided')}</p>

        <p>Updated enquiry Excel sheet is attached.</p>
      </div>
    `,
    attachments: [
      {
        filename: 'enquiries.xlsx',
        content: Buffer.from(excelBuffer).toString('base64'),
      },
    ],
  })
}

module.exports = { sendEnquiryEmail }
