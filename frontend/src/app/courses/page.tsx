import type { Metadata } from 'next'
import { courses } from '@/components/sections/CoursesSection'
import Link from 'next/link'
import { Clock, Users, Star, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Courses | All Software Training Programs',
  description: 'Browse all courses at Quicklearner — Python, MERN, Data Science, AI/ML, Cybersecurity, Cloud and more.',
}

export default function CoursesPage() {
  return (
    <div className="pt-24 min-h-screen">
      {/* Header */}
      <div className="bg-gradient-brand py-16 px-4 dot-bg">
        <div className="max-w-7xl mx-auto text-center">
          <span className="badge mb-4 inline-block">All Programs</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-sora)' }}>
            Our Course Catalog
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            12-week intensive programs built with industry experts — online, offline, or hybrid.
          </p>
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <Link key={course.id} href={`/courses/${course.id}`} className="card p-6 group block">
              <div className="flex items-start justify-between mb-4">
                <span className="text-3xl p-3 rounded-2xl" style={{ background: course.color + '15' }}>{course.emoji}</span>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full" style={{ background: course.color + '15', color: course.color }}>
                  {course.category}
                </span>
              </div>
              <h3 className="font-bold text-brand-navy text-lg mb-2 group-hover:text-brand-gold transition-colors" style={{ fontFamily: 'var(--font-sora)' }}>
                {course.title}
              </h3>
              <p className="text-brand-gray text-sm leading-relaxed mb-4">{course.description}</p>
              <div className="flex items-center gap-4 text-xs text-brand-gray mb-4">
                <span className="flex items-center gap-1"><Clock size={12} /> {course.duration}</span>
                <span className="flex items-center gap-1"><Users size={12} /> {course.students}+</span>
                <span className="flex items-center gap-1"><Star size={12} className="fill-brand-gold text-brand-gold" /> {course.rating}</span>
              </div>
              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <span className="text-sm font-semibold text-brand-navy" style={{ fontFamily: 'var(--font-sora)' }}>View Details</span>
                <ArrowRight size={16} className="text-brand-gold transform group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
