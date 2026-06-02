'use client'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useState } from 'react'

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Courses', href: '/courses' },
  { label: 'About', href: '/about' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
        ? 'bg-white/95 backdrop-blur-md shadow-brand border-b border-gray-100'
        : 'bg-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            {/* <div className="w-9 h-9 rounded-xl bg-gradient-brand flex items-center justify-center shadow-brand">
              <span className="text-white font-bold text-lg" style={{ fontFamily: 'var(--font-sora)' }}>S</span>
            </div> */}
            <div className="hidden sm:block">
              <p className="font-bold text-brand-navy leading-none text-sm" style={{ fontFamily: 'var(--font-sora)' }}>
                QUIK<span className="text-brand-gold">LEARNER</span>
              </p>
              <p className="text-[10px] text-brand-gray tracking-widest">SOFTWARE TRAINING</p>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map(item => (
              <Link key={item.href} href={item.href} className="nav-link">
                {item.label}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            {/* <a href="tel:+918143105167" className="flex items-center gap-1.5 text-sm text-brand-gray hover:text-brand-navy transition-colors">
              <Phone size={14} />
              <span style={{ fontFamily: 'var(--font-sora)' }}>+91 81431 05167</span>
            </a> */}
            <Link href="/contact" className="btn-gold text-sm px-4 py-2">
              Enroll Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="px-4 py-4 space-y-1">
            {navItems.map(item => (
              <Link
                key={item.href}
                href={item.href}
                className="block px-4 py-2.5 rounded-lg text-brand-navy hover:bg-brand-light font-medium transition-colors"
                onClick={() => setOpen(false)}
                style={{ fontFamily: 'var(--font-sora)', fontSize: 14 }}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-3 border-t border-gray-100">
              <Link href="/contact" className="btn-gold w-full justify-center text-sm" onClick={() => setOpen(false)}>
                Enroll Now
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

