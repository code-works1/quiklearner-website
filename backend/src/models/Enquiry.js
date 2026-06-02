const mongoose = require('mongoose')

const enquirySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
      trim: true,
      minlength: 2,
      maxlength: 100,
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      trim: true,
      lowercase: true,
      match: [/^\S+@\S+\.\S+$/, 'Invalid email'],
    },
    phone: {
      type: String,
      required: [true, 'Phone is required'],
      match: [/^[6-9]\d{9}$/, 'Invalid Indian mobile number'],
    },
    course: {
      type: String,
      required: [true, 'Course selection is required'],
      enum: [
        'Python Full Stack', 'MERN Stack', 'Data Science',
        'AI & Machine Learning', 'Cybersecurity', 'Data Analytics',
        'Java Full Stack', 'Cloud Computing', 'Digital Marketing', 'Other',
      ],
    },
    message: { type: String, trim: true, maxlength: 1000 },
    status: {
      type: String,
      enum: ['new', 'contacted', 'enrolled', 'closed'],
      default: 'new',
    },
    source: { type: String, default: 'website' },
    ip:     { type: String },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
  }
)

// Index for fast lookup
enquirySchema.index({ email: 1 })
enquirySchema.index({ createdAt: -1 })
enquirySchema.index({ status: 1 })

module.exports = mongoose.model('Enquiry', enquirySchema)
