import { Laptop, Users, Award, Briefcase, BookOpen, HeartHandshake } from 'lucide-react'

const features = [
  {
    icon: Laptop,
    title: 'Hands-On Learning',
    desc: 'Every concept taught with live projects, not just slides. Real tools, real problems.',
    color: '#3776ab',
  },
  {
    icon: BookOpen,
    title: 'LMS + Recorded Sessions',
    desc: 'Access video lectures, PPTs, PDFs, and quizzes anytime on our Learning Management System.',
    color: '#f5a623',
  },
  {
    icon: Users,
    title: 'Industry Expert Trainers',
    desc: 'Learn from professionals with 5–15 years of real corporate experience — not just academics.',
    color: '#9333ea',
  },
  {
    icon: Briefcase,
    title: 'Placement Assistance',
    desc: 'Mock interviews, resume building, and direct referrals to 50+ hiring partner companies.',
    color: '#16a34a',
  },
  {
    icon: Award,
    title: 'Certification',
    desc: 'Earn a recognized course completion certificate + internship letter after finishing the program.',
    color: '#dc2626',
  },
  {
    icon: HeartHandshake,
    title: 'Flexible Delivery',
    desc: 'Online, offline, or hybrid batches — morning, evening, and weekend batches available.',
    color: '#0ea5e9',
  },
]

export default function WhyUsSection() {
  return (
    <section className="py-20 bg-brand-light dot-bg" id="why-us">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="badge mb-4 inline-block">Why Quicklearner</span>
          <h2 className="section-title mb-4">What Makes Us Different</h2>
          <p className="section-subtitle mx-auto">
            We don't just teach — we transform. Every program is built around real hiring outcomes.
          </p>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, desc, color }) => (
            <div key={title} className="card p-6 flex gap-4 group">
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110"
                style={{ background: color + '18' }}
              >
                <Icon size={22} style={{ color }} />
              </div>
              <div>
                <h3 className="font-bold text-brand-navy mb-1.5" style={{ fontFamily: 'var(--font-sora)', fontSize: 15 }}>
                  {title}
                </h3>
                <p className="text-brand-gray text-sm leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Methodology strip */}
        <div className="mt-14 bg-gradient-brand rounded-3xl p-8 md:p-12 grid md:grid-cols-4 gap-6 text-center">
          {[
            { step: '01', title: 'Enroll',   desc: 'Choose your course & batch' },
            { step: '02', title: 'Learn',    desc: 'Hands-on with industry experts' },
            { step: '03', title: 'Practice', desc: 'Projects, assessments, mock interviews' },
            { step: '04', title: 'Get Hired',desc: 'Resume + placement support' },
          ].map(({ step, title, desc }) => (
            <div key={step} className="relative">
              <div className="text-brand-gold font-bold text-4xl mb-2" style={{ fontFamily: 'var(--font-sora)' }}>{step}</div>
              <h4 className="text-white font-bold mb-1" style={{ fontFamily: 'var(--font-sora)' }}>{title}</h4>
              <p className="text-white/60 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
