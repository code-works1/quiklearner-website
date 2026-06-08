import { courses, getCourseById } from '@/lib/courses'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, Clock, Star, Users } from 'lucide-react'

export function generateStaticParams() {
  return courses.map((course) => ({
    id: course.id,
  }))
}

export default function CourseDetailPage({
  params,
}: {
  params: { id: string }
}) {
  const course = getCourseById(params.id)

  if (!course) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-brand-light pt-24">
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <Link
          href="/courses"
          className="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-red-600 hover:text-red-700"
        >
          <ArrowLeft size={16} />
          Back to Courses
        </Link>

        <div className="rounded-3xl bg-white p-6 shadow-brand sm:p-8">
          <div className="mb-8 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-4">
              <div
                className="flex h-16 w-16 items-center justify-center rounded-2xl text-3xl"
                style={{ background: `${course.color}15` }}
              >
                {course.emoji}
              </div>

              <div>
                <p
                  className="mb-1 text-sm font-semibold"
                  style={{ color: course.color }}
                >
                  {course.category}
                </p>

                <h1
                  className="text-3xl font-bold text-brand-navy"
                  style={{ fontFamily: 'var(--font-sora)' }}
                >
                  {course.title}
                </h1>
              </div>
            </div>

            <Link
              href="/contact"
              className="btn-gold justify-center"
            >
              Enquire Now
            </Link>
          </div>

          <p className="mb-8 max-w-4xl text-brand-gray leading-relaxed">
            {course.description}
          </p>

          <div className="mb-10 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl bg-red-50 p-4">
              <p className="mb-1 flex items-center gap-2 text-xs font-semibold uppercase text-brand-gray">
                <Clock size={14} />
                Duration
              </p>
              <p className="font-bold text-brand-navy">{course.duration}</p>
            </div>

            <div className="rounded-2xl bg-red-50 p-4">
              <p className="mb-1 flex items-center gap-2 text-xs font-semibold uppercase text-brand-gray">
                <Users size={14} />
                Students
              </p>
              <p className="font-bold text-brand-navy">{course.students}+ enrolled</p>
            </div>

            <div className="rounded-2xl bg-red-50 p-4">
              <p className="mb-1 flex items-center gap-2 text-xs font-semibold uppercase text-brand-gray">
                <Star size={14} />
                Rating
              </p>
              <p className="font-bold text-brand-navy">{course.rating}</p>
            </div>
          </div>

          {course.outcomes && course.outcomes.length > 0 && (
            <section className="mb-10">
              <h2
                className="mb-4 text-2xl font-bold text-brand-navy"
                style={{ fontFamily: 'var(--font-sora)' }}
              >
                What You Will Learn
              </h2>

              <div className="grid gap-3 sm:grid-cols-2">
                {course.outcomes.map((outcome) => (
                  <div
                    key={outcome}
                    className="rounded-xl border border-red-100 bg-white p-4 text-sm text-brand-gray shadow-sm"
                  >
                    {outcome}
                  </div>
                ))}
              </div>
            </section>
          )}

          <section id="curriculum">
            <h2
              className="mb-6 text-2xl font-bold text-brand-navy"
              style={{ fontFamily: 'var(--font-sora)' }}
            >
              Curriculum
            </h2>

            <div className="space-y-4">
              {course.curriculum?.map((item, index) => (
                <div
                  key={`${item.title}-${index}`}
                  className="rounded-2xl border border-red-100 bg-white p-5 shadow-sm"
                >
                  <div className="mb-3 flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-red-600 text-sm font-bold text-white">
                      {index + 1}
                    </span>

                    <h3 className="font-bold text-brand-navy">
                      {item.title}
                    </h3>
                  </div>

                  <div className="mb-3 flex flex-wrap gap-2">
                    {item.topics?.map((topic) => (
                      <span
                        key={topic}
                        className="rounded-full bg-red-50 px-3 py-1 text-xs font-medium text-red-700"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>

                  {item.lab && (
                    <p className="text-sm text-brand-gray">
                      <strong>Lab:</strong> {item.lab}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </section>
        </div>
      </section>
    </main>
  )
}