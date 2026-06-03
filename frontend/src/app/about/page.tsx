import { Building2, Eye, Heart, ShieldCheck, Target, Users } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'About Us | Quik Learner' }

export default function AboutPage() {
  return (
    <div className="pt-24 min-h-screen">
      {/* Hero */}
      <div className="bg-gradient-brand py-20 px-4 dot-bg text-center">
        <span className="badge mb-4 inline-flex items-center gap-2"><ShieldCheck size={14} /> About Quik Learner</span>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-sora)' }}>
          Software Training & Development
        </h1>
        <p className="text-white/80 text-lg max-w-2xl mx-auto">
          Empowering individuals through industry-focused education, ISO-certified learning practices, college partnerships, and internship support.
        </p>
      </div>

      {/* Mission / Vision / Values */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8">
          {[
            { icon: Target, color: '#dc2626', title: 'Our Mission', text: 'Quik Learner inspires and empowers learners, aiming to positively impact individuals, organizations, and communities for a brighter future.' },
            { icon: Eye, color: '#b91c1c', title: 'Our Vision', text: 'To create a world where education knows no boundaries, empowering individuals to break through limitations and shape their own destiny.' },
            { icon: Heart, color: '#991b1b', title: 'Our Values', text: 'Quality education, bridging the curriculum-industry gap, upskilling & reskilling, and career excellence through personalized guidance.' },
          ].map(({ icon: Icon, color, title, text }) => (
            <div key={title} className="card p-8 text-center">
              <div className="w-16 h-16 rounded-2xl mx-auto mb-5 flex items-center justify-center" style={{ background: color + '14' }}>
                <Icon size={28} style={{ color }} />
              </div>
              <h3 className="font-bold text-brand-navy text-xl mb-3" style={{ fontFamily: 'var(--font-sora)' }}>{title}</h3>
              <p className="text-brand-gray leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Trust Strip */}
      <section className="py-16 bg-red-50/70 dot-bg">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { icon: ShieldCheck, title: 'ISO Certified Institute', text: 'Structured training process and quality-focused delivery.' },
              { icon: Building2, title: 'Affiliated with Multiple MNCs', text: 'Programs aligned with corporate skills and hiring expectations.' },
              { icon: Users, title: 'College + Internship Focus', text: 'Campus training, project mentoring, and internship readiness.' },
            ].map(({ icon: Icon, title, text }) => (
              <div key={title} className="rounded-3xl bg-white p-6 shadow-card border border-red-100">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-red-50 text-red-600"><Icon size={24} /></div>
                <h3 className="mb-2 font-bold text-brand-navy" style={{ fontFamily: 'var(--font-sora)' }}>{title}</h3>
                <p className="text-sm leading-relaxed text-brand-gray">{text}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-3xl border border-red-100 bg-white p-5 shadow-brand">
            <div className="grid gap-6 md:grid-cols-[0.8fr_1.2fr] md:items-center">
              <div>
                <span className="badge mb-3 inline-block">Certification Display</span>
                <h3 className="mb-3 text-2xl font-bold text-brand-navy" style={{ fontFamily: 'var(--font-sora)' }}>IAF & KAB Recognitions</h3>
                <p className="text-sm leading-relaxed text-brand-gray">
                  Recognitions and affiliation marks are presented clearly to strengthen trust with students, parents, and college partners.
                </p>
              </div>
              <img
                src="/brand/certifications-affiliations.png"
                alt="IAF and KAB certification and affiliation logos"
                className="w-full rounded-2xl border border-red-100 object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CEO Message */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <span className="badge mb-4 inline-block">Message from CEO</span>
          <div className="card p-10">
            <div className="w-20 h-20 rounded-full bg-gradient-brand mx-auto mb-5 flex items-center justify-center text-white text-2xl font-bold" style={{ fontFamily: 'var(--font-sora)' }}>V</div>
            <blockquote className="text-brand-gray leading-relaxed text-lg mb-6 italic">
              "At Quik Learner we are committed to providing accessible, high-quality education and bridging the gap between academics and industry demands. We offer technical and personalized soft skills training to prepare students for corporate challenges."
            </blockquote>
            <p className="font-bold text-brand-navy" style={{ fontFamily: 'var(--font-sora)' }}>Vikram Reddy Bobba</p>
            <p className="text-brand-gray text-sm">Founder & CEO, Quik Learner</p>
          </div>
        </div>
      </section>
    </div>
  )
}
