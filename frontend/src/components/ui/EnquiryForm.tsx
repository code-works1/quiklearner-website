'use client'

import { Loader2, Send } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'

type FormData = {
  name: string
  email: string
  phone: string
  course: string
  message: string
}

const courseOptions = [
  'Python Full Stack',
  'MERN Stack',
  'Data Science',
  'AI & Machine Learning',
  'Cybersecurity',
  'Data Analytics',
  'Java Full Stack',
  'Cloud Computing',
  'Digital Marketing',
  'Other',
]

export default function EnquiryForm({ preselect = '' }: { preselect?: string }) {
  const [loading, setLoading] = useState(false)

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      course: preselect || '',
      message: '',
    },
  })

  useEffect(() => {
    if (preselect) {
      setValue('course', preselect)
    }
  }, [preselect, setValue])

  const onSubmit = async (data: FormData) => {
    setLoading(true)

    try {
      const apiBaseUrl =
        process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000'

      const res = await fetch(`${apiBaseUrl}/api/enquiries`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      const result = await res.json().catch(() => null)

      if (!res.ok) {
        throw new Error(result?.message || 'Failed to submit enquiry')
      }

      toast.success("Enquiry sent! We'll contact you within 24 hours. 🎉")

      reset({
        name: '',
        email: '',
        phone: '',
        course: preselect || '',
        message: '',
      })
    } catch (error) {
      console.error('Enquiry submit error:', error)
      toast.error('Something went wrong. Please call us directly.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label
            className="mb-1.5 block text-sm font-semibold text-brand-navy"
            style={{ fontFamily: 'var(--font-sora)' }}
          >
            Full Name *
          </label>

          <input
            {...register('name', {
              required: 'Name is required',
              minLength: {
                value: 2,
                message: 'Minimum 2 characters required',
              },
            })}
            placeholder="Your full name"
            className={`input-field ${errors.name ? 'border-red-400' : ''}`}
          />

          {errors.name && (
            <p className="mt-1 text-xs text-red-500">
              {errors.name.message}
            </p>
          )}
        </div>

        <div>
          <label
            className="mb-1.5 block text-sm font-semibold text-brand-navy"
            style={{ fontFamily: 'var(--font-sora)' }}
          >
            Email *
          </label>

          <input
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^\S+@\S+\.\S+$/,
                message: 'Enter a valid email address',
              },
            })}
            type="email"
            placeholder="your@email.com"
            className={`input-field ${errors.email ? 'border-red-400' : ''}`}
          />

          {errors.email && (
            <p className="mt-1 text-xs text-red-500">
              {errors.email.message}
            </p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label
            className="mb-1.5 block text-sm font-semibold text-brand-navy"
            style={{ fontFamily: 'var(--font-sora)' }}
          >
            Phone *
          </label>

          <input
            {...register('phone', {
              required: 'Phone number is required',
              pattern: {
                value: /^[6-9]\d{9}$/,
                message: 'Enter a valid 10-digit mobile number',
              },
            })}
            type="tel"
            placeholder="9876543210"
            className={`input-field ${errors.phone ? 'border-red-400' : ''}`}
          />

          {errors.phone && (
            <p className="mt-1 text-xs text-red-500">
              {errors.phone.message}
            </p>
          )}
        </div>

        <div>
          <label
            className="mb-1.5 block text-sm font-semibold text-brand-navy"
            style={{ fontFamily: 'var(--font-sora)' }}
          >
            Interested Course *
          </label>

          <select
            {...register('course', {
              required: 'Please select a course',
            })}
            className={`input-field ${errors.course ? 'border-red-400' : ''}`}
          >
            <option value="">Select a course</option>
            {courseOptions.map((course) => (
              <option key={course} value={course}>
                {course}
              </option>
            ))}
          </select>

          {errors.course && (
            <p className="mt-1 text-xs text-red-500">
              {errors.course.message}
            </p>
          )}
        </div>
      </div>

      <div>
        <label
          className="mb-1.5 block text-sm font-semibold text-brand-navy"
          style={{ fontFamily: 'var(--font-sora)' }}
        >
          Message optional
        </label>

        <textarea
          {...register('message')}
          rows={4}
          placeholder="Any specific questions or requirements..."
          className="input-field resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="btn-primary w-full justify-center disabled:cursor-not-allowed disabled:opacity-70"
      >
        {loading ? (
          <>
            <Loader2 size={16} className="animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send size={16} />
            Send Enquiry
          </>
        )}
      </button>

      <p className="text-center text-xs text-brand-gray">
        We respect your privacy. No spam, ever.
      </p>
    </form>
  )
}
