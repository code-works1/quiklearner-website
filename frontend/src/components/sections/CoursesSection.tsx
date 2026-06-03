import { courses } from '@/lib/courses'
import { ArrowRight, BookOpen, Clock, Star, Users } from 'lucide-react'
import Link from 'next/link'

export { courses }

export default function CoursesSection() {
  return (
    <section className="py-20 bg-white" id="courses">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="badge mb-4 inline-block">Our Programs</span>
          <h2 className="section-title mb-4">Courses Built for the Industry</h2>
          <p className="section-subtitle mx-auto">
            Every curriculum is designed with practical projects, internship readiness, and placement-focused interview preparation.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <article key={course.id} className="card p-6 group flex flex-col">
              <Link href={`/courses/${course.id}`} className="block flex-1">
                {/* Category + emoji */}
                <div className="flex items-start justify-between mb-4">
                  <span
                    className="text-3xl p-3 rounded-2xl border border-red-100"
                    style={{ background: course.color + '12' }}
                  >
                    {course.emoji}
                  </span>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full"
                    style={{ background: course.color + '12', color: course.color }}>
                    {course.category}
                  </span>
                </div>

                {/* Title & description */}
                <h3 className="font-bold text-brand-navy text-lg mb-2 group-hover:text-brand-gold transition-colors"
                  style={{ fontFamily: 'var(--font-sora)' }}>
                  {course.title}
                </h3>
                <p className="text-brand-gray text-sm leading-relaxed mb-4">{course.description}</p>

                {/* Meta row */}
                <div className="flex flex-wrap items-center gap-4 text-xs text-brand-gray">
                  <span className="flex items-center gap-1"><Clock size={12} /> {course.duration}</span>
                  <span className="flex items-center gap-1"><Users size={12} /> {course.students}+ enrolled</span>
                  <span className="flex items-center gap-1"><Star size={12} className="fill-brand-gold text-brand-gold" /> {course.rating}</span>
                </div>
              </Link>

              {/* CTA */}
              <div className="mt-5 pt-4 border-t border-red-100 flex items-center justify-between gap-3">
                <Link
                  href={`/courses/${course.id}#curriculum`}
                  className="inline-flex items-center gap-2 rounded-full bg-red-50 px-4 py-2 text-sm font-semibold text-red-700 transition-all hover:bg-red-600 hover:text-white"
                  style={{ fontFamily: 'var(--font-sora)' }}
                >
                  <BookOpen size={15} /> Curriculum
                </Link>
                <Link href={`/courses/${course.id}`} aria-label={`View ${course.title}`}>
                  <ArrowRight size={18} className="text-brand-gold transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <Link href="/courses" className="btn-primary">
            View All Courses <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  )
}
