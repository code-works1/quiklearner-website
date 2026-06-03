import type { Metadata } from 'next'
import EnquiryForm from '@/components/ui/EnquiryForm'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contact Us | Enquire About Courses',
}

export default function ContactPage() {
  return (
    <div className="pt-24 min-h-screen bg-brand-light dot-bg">
      <div className="max-w-5xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <span className="badge mb-4 inline-block">Contact Us</span>
          <h1 className="section-title mb-3">Let's Get in Touch</h1>
          <p className="section-subtitle mx-auto">
            Have a question about a course or batch? Fill the form and we'll respond in 24 hours.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          <div className="bg-white rounded-3xl shadow-brand p-8">
            <h2 className="font-bold text-brand-navy text-xl mb-6" style={{ fontFamily: 'var(--font-sora)' }}>
              Send an Enquiry
            </h2>
            <EnquiryForm />
          </div>

          <div className="space-y-6">
            {[
              { icon: Phone,   title: 'Call Us',    text: '+91 8143105167' },
              { icon: Mail,    title: 'Email Us',   text: 'support@quiklearner.com' },
              { icon: MapPin,  title: 'Visit Us',   text: 'Hyderabad, Telangana, India' },
              { icon: Clock,   title: 'Working Hours', text: 'Mon – Sat: 9AM to 7PM IST' },
            ].map(({ icon: Icon, title, text }) => (
              <div key={title} className="card p-5 flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-brand-gold/10 flex items-center justify-center flex-shrink-0">
                  <Icon size={20} className="text-brand-gold" />
                </div>
                <div>
                  <p className="font-bold text-brand-navy text-sm mb-1" style={{ fontFamily: 'var(--font-sora)' }}>{title}</p>
                  <p className="text-brand-gray text-sm whitespace-pre-line">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
