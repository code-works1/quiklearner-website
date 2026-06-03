import type { Metadata } from 'next'
import Link from 'next/link'
import { Briefcase, CheckCircle2, Code2, FileCheck2, GraduationCap, Rocket, Users } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Internships | Quik Learner',
  description: 'Explore internship-oriented learning tracks with live projects, mentor guidance, portfolio building and placement preparation.',
}

const internshipTracks = [
  { icon: Code2, title: 'Project-Based Internship', text: 'Build real portfolio projects mapped to your selected course and career path.' },
  { icon: Users, title: 'Mentor Guidance', text: 'Get guidance for project planning, code reviews, documentation, and presentation.' },
  { icon: FileCheck2, title: 'Completion Support', text: 'Prepare project report, GitHub README, resume bullets, and interview explanation.' },
]

const steps = [
  'Select your course and internship track',
  'Complete foundation modules and assignments',
  'Build guided project with mentor checkpoints',
  'Prepare final demo, report, resume and mock interview',
]

export default function InternshipsPage() {
  return (
    <div className="pt-24 min-h-screen bg-red-50/40">
      <section className="bg-gradient-brand py-20 px-4 dot-bg text-center">
        <div className="max-w-5xl mx-auto">
          <span className="badge mb-4 inline-flex items-center gap-2"><Briefcase size={14} /> Internships</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-sora)' }}>
            Internship-Oriented Learning Tracks
          </h1>
          <p className="text-white/80 text-lg max-w-3xl mx-auto">
            Learn with practical projects, mentor support, portfolio preparation, and placement-focused interview guidance.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid gap-8 md:grid-cols-3">
          {internshipTracks.map(({ icon: Icon, title, text }) => (
            <div key={title} className="card p-7">
              <div className="w-12 h-12 rounded-2xl bg-red-50 flex items-center justify-center text-red-600 mb-4"><Icon size={24} /></div>
              <h2 className="font-bold text-brand-navy text-xl mb-3" style={{ fontFamily: 'var(--font-sora)' }}>{title}</h2>
              <p className="text-brand-gray leading-relaxed">{text}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <span className="badge mb-4 inline-flex items-center gap-2"><Rocket size={14} /> Internship Flow</span>
            <h2 className="section-title mb-4">How Students Move from Learning to Portfolio</h2>
            <p className="text-brand-gray leading-relaxed mb-8">
              The internship path is designed to make students confident with project explanation, practical implementation, and interview storytelling.
            </p>
            <Link href="/contact" className="btn-primary">Apply for Internship Guidance</Link>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-brand border border-red-100">
            <div className="space-y-5">
              {steps.map((step, index) => (
                <div key={step} className="flex gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-red-600 text-sm font-bold text-white" style={{ fontFamily: 'var(--font-sora)' }}>
                    {index + 1}
                  </div>
                  <div>
                    <p className="font-bold text-brand-navy" style={{ fontFamily: 'var(--font-sora)' }}>{step}</p>
                    <p className="text-sm text-brand-gray">Structured checkpoints keep progress clear and measurable.</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 rounded-3xl bg-gradient-brand p-8 text-white md:p-10">
          <div className="grid gap-8 md:grid-cols-[1fr_0.9fr] md:items-center">
            <div>
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/20"><GraduationCap size={24} /></div>
              <h2 className="mb-3 text-3xl font-bold" style={{ fontFamily: 'var(--font-sora)' }}>Courses with Internship Support</h2>
              <p className="text-white/80">Python Full Stack, MERN Stack, Data Science, AI/ML, Cybersecurity, Cloud Computing and more.</p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {['Project report', 'GitHub portfolio', 'Mock interviews', 'Resume bullets'].map(item => (
                <div key={item} className="flex items-center gap-2 rounded-xl bg-white/20 px-4 py-3 text-sm font-semibold">
                  <CheckCircle2 size={16} /> {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
