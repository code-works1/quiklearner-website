import { Eye, Heart, Target } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'About Us | Quicklearner' }

export default function AboutPage() {
  return (
    <div className="pt-24 min-h-screen">
      {/* Hero */}
      <div className="bg-gradient-brand py-20 px-4 dot-bg text-center">
        <span className="badge mb-4 inline-block">About Quicklearner</span>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-sora)' }}>
          Software Training & Development
        </h1>
        <p className="text-white/70 text-lg max-w-2xl mx-auto">
          Empowering individuals through industry-focused education since day one.
        </p>
      </div>

      {/* Mission / Vision / Values */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8">
          {[
            { icon: Target, color: '#f5a623', title: 'Our Mission', text: 'Quicklearner inspires and empowers learners, aiming to positively impact individuals, organizations, and communities for a brighter future.' },
            { icon: Eye, color: '#1a2355', title: 'Our Vision', text: 'To create a world where education knows no boundaries, empowering individuals to break through limitations and shape their own destiny.' },
            { icon: Heart, color: '#dc2626', title: 'Our Values', text: 'Quality education, bridging the curriculum-industry gap, upskilling & reskilling, and career excellence through personalized guidance.' },
          ].map(({ icon: Icon, color, title, text }) => (
            <div key={title} className="card p-8 text-center">
              <div className="w-16 h-16 rounded-2xl mx-auto mb-5 flex items-center justify-center" style={{ background: color + '18' }}>
                <Icon size={28} style={{ color }} />
              </div>
              <h3 className="font-bold text-brand-navy text-xl mb-3" style={{ fontFamily: 'var(--font-sora)' }}>{title}</h3>
              <p className="text-brand-gray leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CEO Message */}
      <section className="py-20 bg-brand-light dot-bg">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <span className="badge mb-4 inline-block">Message from CEO</span>
          <div className="card p-10">
            <div className="w-20 h-20 rounded-full bg-gradient-brand mx-auto mb-5 flex items-center justify-center text-white text-2xl font-bold" style={{ fontFamily: 'var(--font-sora)' }}>V</div>
            <blockquote className="text-brand-gray leading-relaxed text-lg mb-6 italic">
              "At Quicklearner we are committed to providing accessible, high-quality education and bridging the gap between academics and industry demands. We offer technical and personalized soft skills training to prepare students for corporate challenges."
            </blockquote>
            <p className="font-bold text-brand-navy" style={{ fontFamily: 'var(--font-sora)' }}>Vikram Reddy Bobba</p>
            <p className="text-brand-gray text-sm">Founder & CEO, Quicklearner</p>
          </div>
        </div>
      </section>
    </div>
  )
}
