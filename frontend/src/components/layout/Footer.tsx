import { courses } from '@/lib/courses'
import { Globe, Instagram, Linkedin, Mail, MapPin, Phone, ShieldCheck, Youtube } from 'lucide-react'
import Link from 'next/link'

const company = [
  { label: 'About Us', href: '/about' },
  { label: 'College Partnerships', href: '/college-partnerships' },
  { label: 'Internships', href: '/internships' },
  { label: 'Contact', href: '/contact' },
]

export default function Footer() {
  return (
    <footer className="bg-brand-navyD text-white">
      <div className="bg-gradient-gold px-4 py-5">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 md:flex-row">
          <div>
            <p className="text-lg font-bold text-white" style={{ fontFamily: 'var(--font-sora)' }}>
              Ready to upskill? Start your journey today.
            </p>
            <p className="text-sm text-white/80">ISO certified institute • MNC affiliation focus • internship support</p>
          </div>
          <Link href="/contact" className="btn-primary whitespace-nowrap border-0 bg-white text-brand-navy shadow-none hover:bg-gray-100">
            Enroll for Free Demo →
          </Link>
        </div>
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link href="/" aria-label="Quik Learner home" className="mb-5 inline-flex rounded-2xl bg-white p-2 shadow-lg shadow-red-950/20">
            <img
              src="/brand/quik-learner-logo.png"
              alt="Quik Learner logo"
              className="h-14 w-auto max-w-[210px] object-contain"
            />
          </Link>

          <p className="mb-5 text-sm leading-relaxed text-white/70">
            Empowering individuals with industry-focused technical training, ISO-certified learning processes, internship support, and college partnership programs.
          </p>

          <div className="mb-5 flex flex-wrap gap-2">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-2 text-xs font-semibold text-white/80">
              <ShieldCheck size={14} /> ISO Certified Institute
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-2 text-xs font-semibold text-white/80">
              <ShieldCheck size={14} /> MNC Affiliation Focus
            </span>
          </div>

          <div className="flex gap-3">
            {[
              { icon: Linkedin, href: '#', label: 'LinkedIn' },
              { icon: Instagram, href: '#', label: 'Instagram' },
              { icon: Youtube, href: '#', label: 'YouTube' },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 transition-colors hover:bg-red-600"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white" style={{ fontFamily: 'var(--font-sora)' }}>Courses</h4>
          <ul className="space-y-2">
            {courses.slice(0, 8).map(c => (
              <li key={c.id}>
                <Link href={`/courses/${c.id}`} className="text-sm text-white/60 transition-colors hover:text-red-200">
                  {c.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white" style={{ fontFamily: 'var(--font-sora)' }}>Company</h4>
          <ul className="space-y-2">
            {company.map(c => (
              <li key={c.href}>
                <Link href={c.href} className="text-sm text-white/60 transition-colors hover:text-red-200">{c.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white" style={{ fontFamily: 'var(--font-sora)' }}>Contact Us</h4>
          <ul className="space-y-3">
            {[
              { icon: Phone, text: '+91 8143105167', href: 'tel:+918143105167' },
              { icon: Mail, text: 'support@quiklearner.com', href: 'mailto:support@quiklearner.com' },
              { icon: Globe, text: 'www.quiklearner.com', href: 'https://www.quiklearner.com' },
              { icon: MapPin, text: 'Krishna residency, Dilsukhnagar, Hyderabad 500060', href: '#' },
            ].map(({ icon: Icon, text, href }) => (
              <li key={text} className="flex items-start gap-2.5 text-sm text-white/60">
                <Icon size={14} className="mt-0.5 flex-shrink-0 text-red-200" />
                <a href={href} className="transition-colors hover:text-white">{text}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 px-4 py-5">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 text-xs text-white/40 md:flex-row">
          <p>© {new Date().getFullYear()} Quik Learner. All rights reserved.</p>
          <p>Built with ❤️ in Hyderabad, India</p>
        </div>
      </div>
    </footer>
  )
}
