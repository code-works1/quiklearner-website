const nodemailer = require('nodemailer')

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
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    requireTLS: true,
    auth: {
      user,
      pass,
    },
    connectionTimeout: 15000,
    greetingTimeout: 15000,
    socketTimeout: 20000,
  })

  await transporter.sendMail({
    from: `"Quik Learner Website" <${user}>`,
    to: adminEmail,
    subject: `New Enquiry from ${enquiry.name} - ${enquiry.course}`,
    html: `
      <div style="font-family: Arial, sans-serif; padding: 20px;">
        <h2 style="color:#e50914;">New Enquiry Received - Quik Learner</h2>

        <p><strong>Name:</strong> ${enquiry.name}</p>
        <p><strong>Email:</strong> ${enquiry.email}</p>
        <p><strong>Phone:</strong> ${enquiry.phone}</p>
        <p><strong>Course:</strong> ${enquiry.course}</p>
        <p><strong>Message:</strong> ${enquiry.message || 'No message provided'}</p>

        <p>Updated enquiry Excel sheet is attached.</p>
      </div>
    `,
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
