import { Globe, Instagram, Linkedin, Mail, MapPin, Phone, Youtube } from 'lucide-react'
import Link from 'next/link'

const courses = ['Python Full Stack', 'MERN Stack', 'Data Science', 'AI & Machine Learning', 'Cybersecurity', 'Data Analytics', 'Java Full Stack', 'Cloud Computing']
const company = ['About Us', 'Careers', 'Blog', 'Partners', 'Privacy Policy', 'Terms of Service']

export default function Footer() {
  return (
    <footer className="bg-brand-navyD text-white">
      {/* Top CTA bar */}
      <div className="bg-gradient-gold py-5 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-bold text-lg text-white" style={{ fontFamily: 'var(--font-sora)' }}>
              Ready to upskill? Start your journey today.
            </p>
            <p className="text-white/80 text-sm">Join 1000+ students already enrolled</p>
          </div>
          <Link href="/contact" className="btn-primary bg-white text-brand-navy hover:bg-gray-100 shadow-none border-0 whitespace-nowrap">
            Enroll for Free Demo →
          </Link>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-9 h-9 rounded-xl bg-gradient-gold flex items-center justify-center">
              <span className="text-white font-bold text-lg" style={{ fontFamily: 'var(--font-sora)' }}>S</span>
            </div>
            <div>
              <p className="font-bold text-white leading-none text-sm" style={{ fontFamily: 'var(--font-sora)' }}>
                QUIK<span className="text-brand-gold">LEARNER</span>
              </p>
              <p className="text-[10px] text-white/50 tracking-widest">SOFTWARE TRAINING</p>
            </div>
          </div>
          <p className="text-white/60 text-sm leading-relaxed mb-5">
            Empowering individuals with industry-focused technical training to bridge the gap between academics and real-world demands.
          </p>
          <div className="flex gap-3">
            {[
              { icon: Linkedin, href: '#', label: 'LinkedIn' },
              { icon: Instagram, href: '#', label: 'Instagram' },
              { icon: Youtube, href: '#', label: 'YouTube' },
            ].map(({ icon: Icon, href, label }) => (
              <a key={label} href={href} aria-label={label}
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-brand-gold transition-colors flex items-center justify-center">
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        {/* Courses */}
        <div>
          <h4 className="font-semibold text-white mb-4 text-sm tracking-wider uppercase" style={{ fontFamily: 'var(--font-sora)' }}>Courses</h4>
          <ul className="space-y-2">
            {courses.map(c => (
              <li key={c}>
                <Link href={`/courses`} className="text-white/60 hover:text-brand-gold text-sm transition-colors">
                  {c}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="font-semibold text-white mb-4 text-sm tracking-wider uppercase" style={{ fontFamily: 'var(--font-sora)' }}>Company</h4>
          <ul className="space-y-2">
            {company.map(c => (
              <li key={c}>
                <Link href="#" className="text-white/60 hover:text-brand-gold text-sm transition-colors">{c}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold text-white mb-4 text-sm tracking-wider uppercase" style={{ fontFamily: 'var(--font-sora)' }}>Contact Us</h4>
          <ul className="space-y-3">
            {[
              { icon: Phone, text: '+91 8143105167' },
              // { icon: Phone, text: '+91 7675854003' },
              { icon: Mail, text: 'support@quicklearner.com' },
              { icon: Globe, text: 'www.quicklearner.com' },
              { icon: MapPin, text: 'Hyderabad, Telangana' },
            ].map(({ icon: Icon, text }) => (
              <li key={text} className="flex items-start gap-2.5 text-white/60 text-sm">
                <Icon size={14} className="mt-0.5 text-brand-gold flex-shrink-0" />
                <span>{text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 py-5 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2 text-white/40 text-xs">
          <p>© {new Date().getFullYear()} Quicklearner. All rights reserved.</p>
          <p>Built with ❤️ in Hyderabad, India</p>
        </div>
      </div>
    </footer>
  )
}
