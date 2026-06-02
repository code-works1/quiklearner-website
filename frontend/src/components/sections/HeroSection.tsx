'use client'

import { ArrowRight, Award, BookOpen, Play, TrendingUp, Users } from 'lucide-react'
import Link from 'next/link'

const stats = [
  { icon: Users, value: '1000+', label: 'Students Trained' },
  { icon: BookOpen, value: '15+', label: 'Courses Offered' },
  { icon: Award, value: '95%', label: 'Placement Rate' },
  { icon: TrendingUp, value: '50+', label: 'Hiring Partners' },
]

const tags = ['Python', 'MERN Stack', 'AI/ML', 'Data Science', 'Cybersecurity', 'Java', 'Cloud', 'DevOps']

export default function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 pt-28">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(249,115,22,0.16),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.18),transparent_35%)]" />

      {/* Dotted layer */}
      <div className="absolute inset-0 opacity-20 dot-bg" />

      {/* Decorative accents */}
      <div className="absolute top-28 left-10 w-0 h-0 border-l-[34px] border-r-[34px] border-b-[58px] border-l-transparent border-r-transparent border-b-orange-300/40 animate-float" />
      <div className="absolute bottom-28 right-16 h-16 w-16 rotate-45 bg-orange-400/15 animate-float delay-300" />
      <div className="absolute top-1/2 right-8 h-8 w-8 rotate-45 bg-white/10 animate-float delay-200" />

      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-7rem)] w-full max-w-7xl items-center px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid w-full items-center gap-12 lg:grid-cols-2">
          {/* Left content */}
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-orange-300/30 bg-orange-400/10 px-4 py-2 text-sm font-semibold text-orange-200 animate-fade-up">
              <Award size={16} />
              Industry-focused learning platform
            </div>

            <h1
              className="mb-6 text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl animate-fade-up"
              style={{ fontFamily: 'var(--font-sora)' }}
            >
              Learn Skills.
              <br />
              Get Certified.
              <br />
              <span className="text-orange-300">Build Your Career.</span>
            </h1>

            <p className="mb-8 max-w-2xl text-left text-lg leading-8 text-slate-300 animate-fade-up delay-100">
              QuickLearner offers dynamic, industry-focused training in tech and business skills.
              <span className="font-semibold text-orange-300"> Get certified, get placed </span>
              — with hands-on, expert-crafted courses.
            </p>

            {/* Tags */}
            <div className="mb-8 flex flex-wrap gap-2 animate-fade-up delay-200">
              {tags.map(tag => (
                <span
                  key={tag}
                  className="rounded-full border border-slate-600 bg-slate-800/90 px-3 py-1 text-xs font-semibold text-white transition-colors hover:border-orange-400 hover:bg-orange-500 hover:text-white"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col gap-4 sm:flex-row animate-fade-up delay-300">
              <Link
                href="/courses"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-orange-500 px-7 py-3 font-semibold text-white shadow-lg shadow-orange-500/25 transition-colors hover:bg-orange-600"
              >
                Explore Courses
                <ArrowRight size={18} />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 bg-white/10 px-7 py-3 font-semibold text-white transition-colors hover:bg-white hover:text-slate-950"
              >
                <Play size={16} className="fill-current" />
                Free Demo
              </Link>
            </div>
          </div>

          {/* Right stats card */}
          <div className="animate-fade-up delay-400">
            <div className="rounded-3xl border border-white/15 bg-white/10 p-8 shadow-2xl shadow-black/30 backdrop-blur-xl">
              <p
                className="mb-6 text-sm font-semibold uppercase tracking-wider text-orange-300"
                style={{ fontFamily: 'var(--font-sora)' }}
              >
                Our Impact
              </p>

              <div className="grid grid-cols-2 gap-6">
                {stats.map(({ icon: Icon, value, label }) => (
                  <div
                    key={label}
                    className="rounded-2xl border border-white/10 bg-slate-900/70 p-5 shadow-lg shadow-black/20 transition-all hover:-translate-y-1 hover:border-orange-300/40 hover:bg-slate-800/90"
                  >
                    <Icon size={24} className="mb-3 text-orange-300" />

                    <p
                      className="mb-1 text-3xl font-bold text-white"
                      style={{ fontFamily: 'var(--font-sora)' }}
                    >
                      {value}
                    </p>

                    <p className="text-sm text-slate-300">{label}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex items-center gap-3 border-t border-white/15 pt-6">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map(i => (
                    <div
                      key={i}
                      className="flex h-8 w-8 items-center justify-center rounded-full border border-white/30 bg-orange-500 text-xs font-bold text-white shadow-md"
                    >
                      {String.fromCharCode(64 + i)}
                    </div>
                  ))}
                </div>

                <p className="text-sm text-slate-300">
                  <strong className="text-white">200+ alumni</strong> placed this year
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
