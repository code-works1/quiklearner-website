'use client'

import { Menu, Phone, X } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useState } from 'react'

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Courses', href: '/courses' },
  { label: 'College Partnerships', href: '/college-partnerships' },
  { label: 'Internships', href: '/internships' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed left-0 right-0 top-0 z-50 border-b border-red-100 transition-all duration-300 ${scrolled ? 'bg-white/95 shadow-brand backdrop-blur-md' : 'bg-white/90 backdrop-blur-md'
        }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-4 md:h-20">
          <Link
            href="/"
            className="flex min-w-0 items-center gap-3"
            aria-label="Quik Learner home"
            onClick={() => setOpen(false)}
          >
            <img
              src="/brand/quik-learner-logo.png"
              alt="Quik Learner logo"
              className="h-11 w-auto max-w-[178px] object-contain sm:h-12 md:h-14 md:max-w-[220px]"
            />
          </Link>

          <div className="hidden items-center gap-4 lg:flex xl:gap-6">
            {navItems.map(item => (
              <Link key={item.href} href={item.href} className="nav-link whitespace-nowrap">
                {item.label}
              </Link>
            ))}
          </div>

          <div className="hidden flex-shrink-0 items-center gap-3 lg:flex">
            <a
              href="tel:+918143105167"
              className="hidden items-center gap-1.5 text-sm text-brand-gray transition-colors hover:text-red-700 xl:flex"
            >
              <Phone size={14} />
              <span style={{ fontFamily: 'var(--font-sora)' }}>+91 81431 05167</span>
            </a>
            <Link href="/contact" className="btn-red px-4 py-2 text-sm">
              Enroll Now
            </Link>
          </div>

          <button
            className="rounded-lg p-2 text-red-700 transition-colors hover:bg-red-50 lg:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={23} /> : <Menu size={23} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-red-100 bg-white shadow-lg lg:hidden">
          <div className="space-y-1 px-4 py-4">
            {navItems.map(item => (
              <Link
                key={item.href}
                href={item.href}
                className="block rounded-xl bg-white px-4 py-3 font-semibold text-brand-navy transition-colors hover:bg-red-50 hover:text-red-700"
                onClick={() => setOpen(false)}
                style={{ fontFamily: 'var(--font-sora)', fontSize: 14 }}
              >
                {item.label}
              </Link>
            ))}
            <div className="border-t border-red-100 pt-3">
              <a
                href="tel:+918143105167"
                className="mb-3 flex items-center justify-center gap-2 rounded-xl bg-red-50 px-4 py-3 text-sm font-semibold text-red-700"
              >
                <Phone size={15} /> +91 81431 05167
              </a>
              <Link href="/contact" className="btn-red w-full justify-center text-sm"
                onClick={() => setOpen(false)}
              >
                Enroll Now
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
