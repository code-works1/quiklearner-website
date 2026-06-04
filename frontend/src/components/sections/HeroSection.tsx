'use client'

import { ArrowRight, Award, BookOpen, Building2, Handshake, Play, ShieldCheck, TrendingUp, Users } from 'lucide-react'
import Link from 'next/link'

const stats = [
  { icon: Users, value: '1000+', label: 'Students Trained' },
  { icon: BookOpen, value: '15+', label: 'Courses Offered' },
  { icon: ShieldCheck, value: 'ISO', label: 'Certified Institute' },
  { icon: TrendingUp, value: '50+', label: 'MNC & Hiring Partners' },
]

const tags = ['Python', 'MERN Stack', 'AI/ML', 'Data Science', 'Cybersecurity', 'Java', 'Cloud', 'DevOps']
const trustBadges = [
  { icon: ShieldCheck, text: 'ISO Certified Institute' },
  { icon: Building2, text: 'Affiliated with Multiple MNCs' },
  { icon: Handshake, text: 'College Partnerships' },
]

export default function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-white via-red-50 to-white pt-28">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(220,38,38,0.16),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(185,28,28,0.12),transparent_35%)]" />

      {/* Dotted layer */}
      <div className="absolute inset-0 opacity-40 dot-bg" />

      {/* Decorative accents */}
      <div className="absolute top-28 left-10 w-0 h-0 border-l-[34px] border-r-[34px] border-b-[58px] border-l-transparent border-r-transparent border-b-red-200/70 animate-float" />
      <div className="absolute bottom-28 right-16 h-16 w-16 rotate-45 bg-red-500/10 animate-float delay-300" />
      <div className="absolute top-1/2 right-8 h-8 w-8 rotate-45 bg-red-700/10 animate-float delay-200" />

      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-7rem)] w-full max-w-7xl items-center px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid w-full items-center gap-12 lg:grid-cols-2">
          {/* Left content */}
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-red-200 bg-white px-4 py-2 text-sm font-semibold text-red-700 shadow-sm animate-fade-up">
              <Award size={16} />
              Industry-focused learning platform
            </div>

            <h1
              className="mb-6 text-4xl font-extrabold leading-tight text-slate-950 sm:text-5xl lg:text-6xl animate-fade-up"
              style={{ fontFamily: 'var(--font-sora)' }}
            >
              Learn Skills.
              <br />
              Get Certified.
              <br />
              <span className="text-red-600">Build Your Career.</span>
            </h1>

            <p className="mb-6 max-w-2xl text-left text-lg leading-8 text-slate-600 animate-fade-up delay-100">
              Quik Learner offers dynamic, industry-focused training in tech and business skills.
              <span className="font-semibold text-red-600"> Get certified, get internship-ready, and get placed </span>
              with hands-on, expert-crafted courses.
            </p>

            <div className="mb-8 flex flex-wrap gap-3 animate-fade-up delay-150">
              {trustBadges.map(({ icon: Icon, text }) => (
                <span key={text} className="inline-flex items-center gap-2 rounded-full border border-red-100 bg-white px-3 py-2 text-xs font-bold text-red-700 shadow-sm">
                  <Icon size={14} /> {text}
                </span>
              ))}
            </div>

            {/* Tags */}
            <div className="mb-8 flex flex-wrap gap-2 animate-fade-up delay-200">
              {tags.map(tag => (
                <span
                  key={tag}
                  className="rounded-full border border-red-100 bg-white px-3 py-1 text-xs font-semibold text-slate-700 shadow-sm transition-colors hover:border-red-500 hover:bg-red-600 hover:text-white"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col gap-4 sm:flex-row animate-fade-up delay-300">
              <Link
                href="/courses"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-red-600 px-7 py-3 font-semibold text-white shadow-lg shadow-red-600/25 transition-colors hover:bg-red-700"
              >
                Explore Courses
                <ArrowRight size={18} />
              </Link>

              <Link
                href="/contact"
                className="group relative z-10 inline-flex items-center justify-center gap-2 rounded-full border border-red-300 bg-white px-7 py-3 font-semibold text-red-700 shadow-sm transition-all duration-200 hover:bg-red-600 hover:text-white hover:shadow-lg hover:shadow-red-600/25"
              >
                <Play size={16} className="fill-current transition-transform duration-200 group-hover:scale-110" />
                Free Demo
              </Link>
            </div>
          </div>

          {/* Right stats card */}
          <div className="animate-fade-up delay-400">
            <div className="rounded-3xl border border-red-100 bg-white/90 p-6 shadow-2xl shadow-red-950/10 backdrop-blur-xl sm:p-8">
              <div className="mb-6 rounded-3xl border border-red-100 bg-white p-4 shadow-sm">
                <img
                  src="/brand/quik-learner-logo.png"
                  alt="Quik Learner logo"
                  className="mx-auto h-20 w-auto object-contain sm:h-24"
                />
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-2xl bg-red-50 px-4 py-3 text-center text-xs font-bold text-red-700">ISO Certified Institute</div>
                  <div className="rounded-2xl bg-red-50 px-4 py-3 text-center text-xs font-bold text-red-700">MNC Affiliation Focus</div>
                </div>
              </div>

              <p
                className="mb-6 text-sm font-semibold uppercase tracking-wider text-red-600"
                style={{ fontFamily: 'var(--font-sora)' }}
              >
                Our Impact
              </p>

              <div className="grid grid-cols-2 gap-6">
                {stats.map(({ icon: Icon, value, label }) => (
                  <div
                    key={label}
                    className="rounded-2xl border border-red-100 bg-red-50/70 p-5 shadow-sm transition-all hover:-translate-y-1 hover:border-red-200 hover:bg-white"
                  >
                    <Icon size={24} className="mb-3 text-red-600" />

                    <p
                      className="mb-1 text-3xl font-bold text-slate-950"
                      style={{ fontFamily: 'var(--font-sora)' }}
                    >
                      {value}
                    </p>

                    <p className="text-sm text-slate-600">{label}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex items-center gap-3 border-t border-red-100 pt-6">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map(i => (
                    <div
                      key={i}
                      className="flex h-8 w-8 items-center justify-center rounded-full border border-white bg-red-600 text-xs font-bold text-white shadow-md"
                    >
                      {String.fromCharCode(64 + i)}
                    </div>
                  ))}
                </div>

                <p className="text-sm text-slate-600">
                  <strong className="text-slate-950">200+ alumni</strong> placed this year
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
