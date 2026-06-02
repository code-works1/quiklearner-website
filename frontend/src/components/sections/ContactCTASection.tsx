import EnquiryForm from '@/components/ui/EnquiryForm'
import { Clock, Mail, MapPin, Phone } from 'lucide-react'

export default function ContactCTASection() {
  return (
    <section className="py-20 bg-brand-light dot-bg" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left */}
          <div>
            <span className="badge mb-4 inline-block">Get Started</span>
            <h2 className="section-title mb-4">Ready to Transform Your Career?</h2>
            <p className="text-brand-gray leading-relaxed mb-8">
              Fill in the form and our team will reach out within 24 hours to guide you to the right course, batch, and delivery mode.
            </p>

            <div className="space-y-4">
              {[
                { icon: Phone, text: '+91 8143105167' },
                { icon: Mail, text: 'support@quiklearner.com' },
                { icon: MapPin, text: 'Hyderabad, Telangana, India' },
                { icon: Clock, text: 'Mon–Sat: 9AM – 7PM IST' },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-3 text-brand-gray">
                  <div className="w-10 h-10 rounded-xl bg-brand-gold/10 flex items-center justify-center flex-shrink-0">
                    <Icon size={18} className="text-brand-gold" />
                  </div>
                  <span>{text}</span>
                </div>
              ))}
            </div>

            {/* Mini map placeholder */}
            <div className="mt-8 h-48 rounded-2xl bg-gradient-brand flex items-center justify-center overflow-hidden">
              <p className="text-white/60 text-sm" style={{ fontFamily: 'var(--font-sora)' }}>📍 Hyderabad, Telangana</p>
            </div>
          </div>

          {/* Right: Form */}
          <div className="bg-white rounded-3xl shadow-brand p-8">
            <h3 className="font-bold text-brand-navy text-xl mb-2" style={{ fontFamily: 'var(--font-sora)' }}>
              Send Us an Enquiry
            </h3>
            <p className="text-brand-gray text-sm mb-6">We'll get back to you within 24 hours.</p>
            <EnquiryForm />
          </div>
        </div>
      </div>
    </section>
  )
}
