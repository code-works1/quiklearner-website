'use client'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { Send, Loader2 } from 'lucide-react'

type FormData = {
  name: string
  email: string
  phone: string
  course: string
  message: string
}

const courseOptions = [
  'Python Full Stack', 'MERN Stack', 'Data Science', 'AI & Machine Learning',
  'Cybersecurity', 'Data Analytics', 'Java Full Stack', 'Cloud Computing',
  'Digital Marketing', 'Other',
]

export default function EnquiryForm({ preselect = '' }: { preselect?: string }) {
  const [loading, setLoading] = useState(false)
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>({
    defaultValues: { course: preselect }
  })

  const onSubmit = async (data: FormData) => {
    setLoading(true)
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/enquiry`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (!res.ok) throw new Error('Failed')
      toast.success('Enquiry sent! We\'ll contact you within 24 hours. 🎉')
      reset()
    } catch {
      toast.error('Something went wrong. Please call us directly.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
      {/* Name + Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-semibold text-brand-navy mb-1.5" style={{ fontFamily: 'var(--font-sora)' }}>
            Full Name *
          </label>
          <input
            {...register('name', { required: 'Name is required', minLength: { value: 2, message: 'Min 2 chars' } })}
            placeholder="Your full name"
            className={`input-field ${errors.name ? 'border-red-400' : ''}`}
          />
          {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
        </div>
        <div>
          <label className="block text-sm font-semibold text-brand-navy mb-1.5" style={{ fontFamily: 'var(--font-sora)' }}>
            Email *
          </label>
          <input
            {...register('email', { required: 'Email required', pattern: { value: /^\S+@\S+\.\S+$/, message: 'Invalid email' } })}
            type="email" placeholder="your@email.com"
            className={`input-field ${errors.email ? 'border-red-400' : ''}`}
          />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
        </div>
      </div>

      {/* Phone + Course */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-semibold text-brand-navy mb-1.5" style={{ fontFamily: 'var(--font-sora)' }}>
            Phone *
          </label>
          <input
            {...register('phone', { required: 'Phone required', pattern: { value: /^[6-9]\d{9}$/, message: 'Valid 10-digit mobile' } })}
            type="tel" placeholder="9876543210"
            className={`input-field ${errors.phone ? 'border-red-400' : ''}`}
          />
          {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
        </div>
        <div>
          <label className="block text-sm font-semibold text-brand-navy mb-1.5" style={{ fontFamily: 'var(--font-sora)' }}>
            Interested Course *
          </label>
          <select
            {...register('course', { required: 'Please select a course' })}
            className={`input-field ${errors.course ? 'border-red-400' : ''}`}
          >
            <option value="">Select a course</option>
            {courseOptions.map(c => <option key={c} value={c}>{c}</option>)}
          </select>
          {errors.course && <p className="text-red-500 text-xs mt-1">{errors.course.message}</p>}
        </div>
      </div>

      {/* Message */}
      <div>
        <label className="block text-sm font-semibold text-brand-navy mb-1.5" style={{ fontFamily: 'var(--font-sora)' }}>
          Message (optional)
        </label>
        <textarea
          {...register('message')}
          rows={4}
          placeholder="Any specific questions or requirements..."
          className="input-field resize-none"
        />
      </div>

      <button type="submit" disabled={loading} className="btn-gold w-full justify-center">
        {loading ? (
          <><Loader2 size={16} className="animate-spin" /> Sending...</>
        ) : (
          <><Send size={16} /> Send Enquiry</>
        )}
      </button>

      <p className="text-xs text-center text-brand-gray">
        We respect your privacy. No spam, ever.
      </p>
    </form>
  )
}
