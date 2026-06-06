const ExcelJS = require('exceljs')
const path = require('path')
const fs = require('fs')

const excelDir = path.join(process.cwd(), 'exports')
const excelPath = path.join(excelDir, 'enquiries.xlsx')

function formatDate(value) {
  if (!value) return new Date().toLocaleString('en-IN')
  return new Date(value).toLocaleString('en-IN')
}

async function buildEnquiriesExcelBuffer(enquiries = []) {
  const workbook = new ExcelJS.Workbook()
  const worksheet = workbook.addWorksheet('Enquiries')

  worksheet.columns = [
    { header: 'S.No', key: 'sno', width: 8 },
    { header: 'Name', key: 'name', width: 25 },
    { header: 'Email', key: 'email', width: 32 },
    { header: 'Phone', key: 'phone', width: 18 },
    { header: 'Course', key: 'course', width: 25 },
    { header: 'Message', key: 'message', width: 45 },
    { header: 'Status', key: 'status', width: 15 },
    { header: 'Source', key: 'source', width: 15 },
    { header: 'IP Address', key: 'ip', width: 24 },
    { header: 'Created At', key: 'createdAt', width: 25 },
  ]

  worksheet.getRow(1).font = {
    bold: true,
    color: { argb: 'FFFFFFFF' },
  }

  worksheet.getRow(1).fill = {
    type: 'pattern',
    pattern: 'solid',
    fgColor: { argb: 'FFE50914' },
  }

  worksheet.views = [{ state: 'frozen', ySplit: 1 }]

  enquiries.forEach((enquiry, index) => {
    worksheet.addRow({
      sno: index + 1,
      name: enquiry.name || '',
      email: enquiry.email || '',
      phone: enquiry.phone || '',
      course: enquiry.course || '',
      message: enquiry.message || '',
      status: enquiry.status || 'new',
      source: enquiry.source || 'website',
      ip: enquiry.ip || '',
      createdAt: formatDate(enquiry.createdAt),
    })
  })

  return workbook.xlsx.writeBuffer()
}

async function saveEnquiriesExcelFile(excelBuffer) {
  if (!fs.existsSync(excelDir)) {
    fs.mkdirSync(excelDir, { recursive: true })
  }

  fs.writeFileSync(excelPath, Buffer.from(excelBuffer))
  return excelPath
}

module.exports = {
  buildEnquiriesExcelBuffer,
  saveEnquiriesExcelFile,
  excelPath,
}
