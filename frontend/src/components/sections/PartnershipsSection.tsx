import Link from 'next/link'
import {
  Award,
  BriefcaseBusiness,
  Building2,
  CheckCircle2,
  FileCheck2,
  GraduationCap,
  Handshake,
  ShieldCheck,
  Users,
} from 'lucide-react'

const trustItems = [
  {
    icon: GraduationCap,
    title: 'College Partnerships',
    desc: 'Collaborative training programs, workshops, and placement-oriented learning support for students.',
  },
  {
    icon: Handshake,
    title: 'Internship Support',
    desc: 'Practical internship guidance with project-based exposure and career readiness activities.',
  },
  {
    icon: BriefcaseBusiness,
    title: 'Industry-Focused Training',
    desc: 'Courses designed around real workplace skills, project execution, and job-focused learning paths.',
  },
  {
    icon: Users,
    title: 'Placement Readiness',
    desc: 'Resume preparation, mock interviews, communication support, and technical interview guidance.',
  },
]

const partnerBenefits = [
  'ISO Certified Training',
  'MNC Affiliation Support',
  'Internship Guidance',
  'Placement-Focused Learning',
]
export default function PartnershipsSection() {
  return (
    <section className="bg-red-50/60 py-20 dot-bg" id="partnerships">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 text-center">
          <span className="badge mb-4 inline-flex items-center gap-2">
            <Award size={14} /> Certifications & Affiliations
          </span>

          <h2 className="section-title mb-4">
            Recognized Training. Industry-Linked Learning.
          </h2>

          <p className="section-subtitle mx-auto">
            Trusted recognitions, college partnerships, internship support, and industry-facing learning pathways for students and professionals.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-stretch">
          {/* Left card */}
          <div className="card overflow-hidden p-0">
            <div className="border-b border-red-100 bg-white px-6 py-5 sm:px-8">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p
                    className="mb-1 text-xs font-bold uppercase tracking-[0.24em] text-red-600"
                    style={{ fontFamily: 'var(--font-sora)' }}
                  >
                    Official Recognition
                  </p>

                  <h3 className="text-2xl font-bold text-brand-navy">
                    Certified & Affiliated Institute
                  </h3>
                </div>

                <div className="inline-flex items-center gap-2 rounded-full bg-red-50 px-4 py-2 text-xs font-bold text-red-700">
                  <FileCheck2 size={15} /> IAF / KAB Recognition
                </div>
              </div>
            </div>

            <div className="space-y-6 p-6 sm:p-8">
              {/* Two cards side by side */}
              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-2xl border border-red-100 bg-red-50 p-5">
                  <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-red-600 text-white shadow-lg shadow-red-600/20">
                    <ShieldCheck size={25} />
                  </div>

                  <h4
                    className="mb-2 font-bold text-brand-navy"
                    style={{ fontFamily: 'var(--font-sora)' }}
                  >
                    ISO Certified Institute
                  </h4>

                  <p className="text-sm leading-relaxed text-brand-gray">
                    Dedicated to reliable training delivery, structured learning, and measurable student outcomes.
                  </p>
                </div>

                <div className="rounded-2xl border border-red-100 bg-white p-5 shadow-sm">
                  <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-red-50 text-red-600">
                    <Building2 size={25} />
                  </div>

                  <h4
                    className="mb-2 font-bold text-brand-navy"
                    style={{ fontFamily: 'var(--font-sora)' }}
                  >
                    Affiliated with Multiple MNCs
                  </h4>

                  <p className="text-sm leading-relaxed text-brand-gray">
                    Strong industry-facing positioning for placement readiness and career-focused learning.
                  </p>
                </div>
              </div>

              {/* Image below */}
              <div className="rounded-3xl bg-gradient-to-br from-white via-red-50 to-white p-4 sm:p-6">
                <div className="rounded-3xl border border-red-100 bg-white p-4 shadow-xl shadow-red-950/10">
                  <img
                    src="/brand/certifications-affiliations.png"
                    alt="IAF and KAB certification and affiliation logos"
                    className="h-auto w-full rounded-2xl object-contain"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right cards */}
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
            {trustItems.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="card p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-red-50 text-red-600">
                  <Icon size={24} />
                </div>

                <h3
                  className="mb-2 font-bold text-brand-navy"
                  style={{ fontFamily: 'var(--font-sora)' }}
                >
                  {title}
                </h3>

                <p className="text-sm leading-relaxed text-brand-gray">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {partnerBenefits.map(benefit => (
            <div
              key={benefit}
              className="flex items-center gap-2 rounded-xl bg-white px-4 py-3 text-sm font-semibold text-slate-700 shadow-sm ring-1 ring-red-100"
            >
              <CheckCircle2 size={16} className="text-red-600" /> {benefit}
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link href="/college-partnerships" className="btn-primary justify-center">
            College Partnerships
          </Link>

          <Link href="/internships" className="btn-outline justify-center">
            Explore Internships
          </Link>

          <Link href="/contact" className="btn-outline justify-center">
            Request Affiliation Details
          </Link>
        </div>
      </div>
    </section>
  )
}
