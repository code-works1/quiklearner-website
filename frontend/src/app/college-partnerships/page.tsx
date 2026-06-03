import type { Metadata } from 'next'
import Link from 'next/link'
import { Building2, CheckCircle2, GraduationCap, Handshake, Mail, Phone, ShieldCheck, Users } from 'lucide-react'

export const metadata: Metadata = {
  title: 'College Partnerships | Quik Learner',
  description: 'Partner with Quik Learner for campus training, workshops, bootcamps, internships and placement readiness programs.',
}

const programs = [
  'Campus skill development workshops',
  'Final-year project mentoring',
  'Internship-linked training programs',
  'Resume, LinkedIn and mock interview sessions',
  'Faculty and placement-cell coordination',
  'Industry-style capstone projects',
]

export default function CollegePartnershipsPage() {
  return (
    <div className="pt-24 min-h-screen bg-red-50/40">
      <section className="bg-gradient-brand py-20 px-4 dot-bg text-center">
        <div className="max-w-5xl mx-auto">
          <span className="badge mb-4 inline-flex items-center gap-2"><Handshake size={14} /> College Partnerships</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-sora)' }}>
            Partner With Quik Learner for Campus Upskilling
          </h1>
          <p className="text-white/80 text-lg max-w-3xl mx-auto">
            Build career-ready students through structured bootcamps, hands-on projects, internship tracks, and industry-oriented training programs.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid gap-8 lg:grid-cols-3">
          {[
            { icon: GraduationCap, title: 'Student Upskilling', text: 'Practical learning programs for software, data, cloud, cybersecurity, and digital skills.' },
            { icon: Building2, title: 'Industry Alignment', text: 'Curriculum mapped with MNC-style project workflows, interview readiness, and job expectations.' },
            { icon: ShieldCheck, title: 'ISO Certified Process', text: 'Structured training delivery, learning outcomes, assessments, and quality-driven support.' },
          ].map(({ icon: Icon, title, text }) => (
            <div key={title} className="card p-7">
              <div className="w-12 h-12 rounded-2xl bg-red-50 flex items-center justify-center text-red-600 mb-4"><Icon size={24} /></div>
              <h2 className="font-bold text-brand-navy text-xl mb-3" style={{ fontFamily: 'var(--font-sora)' }}>{title}</h2>
              <p className="text-brand-gray leading-relaxed">{text}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-start">
          <div className="card p-8">
            <span className="badge mb-4 inline-flex items-center gap-2"><Users size={14} /> Partnership Programs</span>
            <h2 className="section-title mb-6 text-3xl">What Colleges Can Add</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {programs.map(program => (
                <div key={program} className="flex items-start gap-3 rounded-2xl bg-red-50 p-4 text-sm text-slate-700">
                  <CheckCircle2 size={18} className="mt-0.5 flex-shrink-0 text-red-600" />
                  <span>{program}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-brand border border-red-100">
            <span className="badge mb-4 inline-block">Contact for Tie-up</span>
            <h2 className="section-title mb-4 text-3xl">Start a College Partnership</h2>
            <p className="text-brand-gray leading-relaxed mb-6">
              Colleges can connect for customized course plans, workshop calendars, internship support, and placement-readiness batches.
            </p>
            <div className="space-y-3 mb-7">
              <a href="tel:+918143105167" className="flex items-center gap-3 text-brand-gray hover:text-red-700"><Phone size={18} className="text-red-600" /> +91 81431 05167</a>
              <a href="mailto:support@quiklearner.com" className="flex items-center gap-3 text-brand-gray hover:text-red-700"><Mail size={18} className="text-red-600" /> support@quiklearner.com</a>
            </div>
            <Link href="/contact" className="btn-primary w-full justify-center">Request Partnership Call</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
