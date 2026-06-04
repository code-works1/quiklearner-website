import EnquiryForm from '@/components/ui/EnquiryForm'
import { Clock, Mail, MapPin, Phone } from 'lucide-react'

const branches = [
  'Visakhapatnam',
  'Rajahmundry',
  'Vijayawada',
  'Tirupati',
  'Guntur',
  'Dilsukhnagar',
  'Ameerpet',
]

export default function ContactCTASection() {
  return (
    <section className="py-20 bg-brand-light dot-bg" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left */}
          <div>
            <span className="badge mb-4 inline-block">Get Started</span>

            <h2 className="section-title mb-4">
              Ready to Transform Your Career?
            </h2>

            <p className="text-brand-gray leading-relaxed mb-8">
              Fill in the form and our team will reach out within 24 hours to guide you to the right course, batch, and delivery mode.
            </p>

            <div className="space-y-4">
              {[
                { icon: Phone, text: '+91 8143105167' },
                { icon: Mail, text: 'support@quiklearner.com' },
                { icon: MapPin, text: 'Krishna residency, Dilsukhnagar, Hyderabad 500060' },
                { icon: Clock, text: 'Mon–Sat: 9AM – 7PM IST' },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-3 text-brand-gray">
                  <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center flex-shrink-0">
                    <Icon size={18} className="text-red-600" />
                  </div>
                  <span>{text}</span>
                </div>
              ))}
            </div>

            {/* Branch locations */}
            <div className="mt-8 rounded-2xl border border-red-100 bg-white p-6 shadow-sm">
              <h4
                className="mb-4 text-lg font-bold text-brand-navy"
                style={{ fontFamily: 'var(--font-sora)' }}
              >
                Branches in AP & Telangana
              </h4>

              <div className="flex flex-wrap gap-2">
                {branches.map((branch) => (
                  <span
                    key={branch}
                    className="rounded-full border border-red-100 bg-red-50 px-4 py-2 text-sm font-medium text-brand-navy"
                    style={{ fontFamily: 'var(--font-sora)' }}
                  >
                    {branch}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="bg-white rounded-3xl shadow-brand p-8">
            <h3
              className="font-bold text-brand-navy text-xl mb-2"
              style={{ fontFamily: 'var(--font-sora)' }}
            >
              Send Us an Enquiry
            </h3>

            <p className="text-brand-gray text-sm mb-6">
              We&apos;ll get back to you within 24 hours.
            </p>

            <EnquiryForm />
          </div>
        </div>
      </div>
    </section>
  )
}
