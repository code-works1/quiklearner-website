import Link from 'next/link'
import { Clock, Users, Star, ArrowRight } from 'lucide-react'

export const courses = [
  { id: 'python-fullstack',   title: 'Python Full Stack',         duration: '12 weeks', students: 320,  rating: 4.8, category: 'Development', color: '#3776ab', emoji: '🐍', description: 'Django, Flask, React, MySQL, MongoDB, AWS deployment' },
  { id: 'mern-stack',         title: 'MERN Stack',                duration: '12 weeks', students: 280,  rating: 4.9, category: 'Development', color: '#00d8ff', emoji: '⚛️', description: 'MongoDB, Express, React, Node.js, REST APIs, Cloud' },
  { id: 'data-science',       title: 'Data Science',              duration: '12 weeks', students: 410,  rating: 4.7, category: 'Data',        color: '#e97627', emoji: '📊', description: 'Python, ML, Deep Learning, NLP, Model Deployment' },
  { id: 'ai-ml',              title: 'AI & Machine Learning',     duration: '12 weeks', students: 390,  rating: 4.9, category: 'AI',          color: '#9333ea', emoji: '🤖', description: 'Supervised/Unsupervised ML, Neural Nets, NLP, Flask' },
  { id: 'cybersecurity',      title: 'Cybersecurity',             duration: '12 weeks', students: 210,  rating: 4.8, category: 'Security',    color: '#dc2626', emoji: '🔐', description: 'Penetration Testing, SIEM, Ethical Hacking, ISO' },
  { id: 'data-analytics',     title: 'Data Analytics',            duration: '12 weeks', students: 340,  rating: 4.7, category: 'Data',        color: '#16a34a', emoji: '📈', description: 'Excel, Power BI, Tableau, MySQL, Python, Business Stats' },
  { id: 'java-fullstack',     title: 'Java Full Stack',           duration: '12 weeks', students: 260,  rating: 4.6, category: 'Development', color: '#f97316', emoji: '☕', description: 'Core Java, Spring Boot, SQL, HTML/CSS, REST APIs' },
  { id: 'cloud-computing',    title: 'Cloud Computing',           duration: '8 weeks',  students: 180,  rating: 4.7, category: 'Cloud',       color: '#0ea5e9', emoji: '☁️', description: 'AWS, Azure, GCP, Docker, Kubernetes, DevOps' },
  { id: 'digital-marketing',  title: 'Digital Marketing',         duration: '12 weeks', students: 290,  rating: 4.6, category: 'Marketing',   color: '#f59e0b', emoji: '📱', description: 'SEO, SEM, Social Media, Email, Content, Analytics' },
]

export default function CoursesSection() {
  return (
    <section className="py-20 bg-white" id="courses">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="badge mb-4 inline-block">Our Programs</span>
          <h2 className="section-title mb-4">Courses Built for the Industry</h2>
          <p className="section-subtitle mx-auto">
            Every curriculum is designed with hiring managers — so you learn exactly what companies want.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <Link key={course.id} href={`/courses/${course.id}`} className="card p-6 group cursor-pointer block">
              {/* Category + emoji */}
              <div className="flex items-start justify-between mb-4">
                <span
                  className="text-3xl p-3 rounded-2xl"
                  style={{ background: course.color + '15' }}
                >
                  {course.emoji}
                </span>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full"
                  style={{ background: course.color + '15', color: course.color }}>
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
              <div className="flex items-center gap-4 text-xs text-brand-gray">
                <span className="flex items-center gap-1"><Clock size={12} /> {course.duration}</span>
                <span className="flex items-center gap-1"><Users size={12} /> {course.students}+ enrolled</span>
                <span className="flex items-center gap-1"><Star size={12} className="fill-brand-gold text-brand-gold" /> {course.rating}</span>
              </div>

              {/* CTA */}
              <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
                <span className="text-sm font-semibold text-brand-navy" style={{ fontFamily: 'var(--font-sora)' }}>
                  View Curriculum
                </span>
                <ArrowRight size={16} className="text-brand-gold transform group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
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
