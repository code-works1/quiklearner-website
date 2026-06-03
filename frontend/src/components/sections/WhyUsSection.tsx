import { Laptop, Users, Award, Briefcase, BookOpen, HeartHandshake, Building2, ShieldCheck } from 'lucide-react'

const features = [
  {
    icon: Laptop,
    title: 'Hands-On Learning',
    desc: 'Every concept is taught with live projects, assignments, labs, and real-world workflows — not just slides.',
    color: '#dc2626',
  },
  {
    icon: ShieldCheck,
    title: 'ISO Certified Institute',
    desc: 'A quality-focused learning process with structured curriculum, assessments, and consistent delivery standards.',
    color: '#b91c1c',
  },
  {
    icon: Building2,
    title: 'MNC Affiliation Focus',
    desc: 'Programs are mapped to corporate expectations, interview patterns, tool usage, and practical project standards.',
    color: '#991b1b',
  },
  {
    icon: BookOpen,
    title: 'LMS + Recorded Sessions',
    desc: 'Access video lectures, PPTs, PDFs, assignments, and quizzes anytime through the learning support system.',
    color: '#ef4444',
  },
  {
    icon: Users,
    title: 'College Partnerships',
    desc: 'Workshops, bootcamps, final-year project guidance, and career-readiness programs for students and colleges.',
    color: '#dc2626',
  },
  {
    icon: Briefcase,
    title: 'Internship & Placement Support',
    desc: 'Project-based internships, resume building, mock interviews, and referrals through hiring partner networks.',
    color: '#be123c',
  },
  {
    icon: Award,
    title: 'Certification',
    desc: 'Earn a recognized course completion certificate and internship guidance after finishing the program requirements.',
    color: '#e11d48',
  },
  {
    icon: HeartHandshake,
    title: 'Flexible Delivery',
    desc: 'Online, offline, and hybrid batches — morning, evening, and weekend options based on student availability.',
    color: '#7f1d1d',
  },
]

export default function WhyUsSection() {
  return (
    <section className="py-20 bg-brand-light dot-bg" id="why-us">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="badge mb-4 inline-block">Why Quik Learner</span>
          <h2 className="section-title mb-4">What Makes Us Different</h2>
          <p className="section-subtitle mx-auto">
            We don't just teach — we transform. Every program is built around real curriculum visibility, internships, and hiring outcomes.
          </p>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, desc, color }) => (
            <div key={title} className="card p-6 group">
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110 mb-4"
                style={{ background: color + '14' }}
              >
                <Icon size={22} style={{ color }} />
              </div>
              <h3 className="font-bold text-brand-navy mb-2" style={{ fontFamily: 'var(--font-sora)', fontSize: 15 }}>
                {title}
              </h3>
              <p className="text-brand-gray text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        {/* Methodology strip */}
        <div className="mt-14 bg-gradient-brand rounded-3xl p-8 md:p-12 grid md:grid-cols-4 gap-6 text-center">
          {[
            { step: '01', title: 'Enroll', desc: 'Choose your course & batch' },
            { step: '02', title: 'Learn', desc: 'Follow day-wise curriculum + labs' },
            { step: '03', title: 'Internship', desc: 'Build portfolio projects and internship proof' },
            { step: '04', title: 'Get Hired', desc: 'Resume, mock interviews & placement support' },
          ].map(({ step, title, desc }) => (
            <div key={step} className="relative">
              <div className="text-white font-bold text-4xl mb-2" style={{ fontFamily: 'var(--font-sora)' }}>{step}</div>
              <h4 className="text-white font-bold mb-1" style={{ fontFamily: 'var(--font-sora)' }}>{title}</h4>
              <p className="text-white/75 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
