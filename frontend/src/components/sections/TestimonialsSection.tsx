import { Star, Quote } from 'lucide-react'

const testimonials = [
  { name: 'Ravi Kumar',    course: 'Python Full Stack',     company: 'TCS',        text: 'The hands-on projects and placement support helped me land my first job at TCS within 2 months of completing the course.', rating: 5 },
  { name: 'Priya Sharma',  course: 'Data Science',          company: 'Infosys',    text: 'The curriculum is perfectly aligned with what companies actually ask in interviews. Best investment I made for my career.', rating: 5 },
  { name: 'Arjun Reddy',   course: 'MERN Stack',            company: 'Startup',    text: 'Flexible timings, expert trainer, and real project experience. I built my own startup after this course!', rating: 5 },
  { name: 'Sneha Patel',   course: 'AI & Machine Learning', company: 'Wipro',      text: 'From zero Python knowledge to placing at Wipro — Quicklearner made it possible in 3 months flat.', rating: 5 },
  { name: 'Kiran Naidu',   course: 'Cybersecurity',         company: 'HCL',        text: 'The penetration testing labs and SIEM tools training are exactly what the industry needs. Practical to the core.', rating: 5 },
  { name: 'Meera Joshi',   course: 'Data Analytics',        company: 'Deloitte',   text: 'Power BI + Python combo was taught brilliantly. I got placed in Deloitte\'s analytics team right after certification.', rating: 5 },
]

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-white" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="badge mb-4 inline-block">Success Stories</span>
          <h2 className="section-title mb-4">Students Who Made It</h2>
          <p className="section-subtitle mx-auto">
            Real outcomes from real students — placed at top companies across India.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map(({ name, course, company, text, rating }) => (
            <div key={name} className="card p-6 flex flex-col">
              {/* Quote icon */}
              <Quote size={28} className="text-brand-gold/30 mb-3 flex-shrink-0" />

              {/* Text */}
              <p className="text-brand-gray text-sm leading-relaxed flex-1 mb-5">"{text}"</p>

              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: rating }).map((_, i) => (
                  <Star key={i} size={14} className="fill-brand-gold text-brand-gold" />
                ))}
              </div>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <div className="w-10 h-10 rounded-full bg-gradient-brand flex items-center justify-center text-white font-bold flex-shrink-0" style={{ fontFamily: 'var(--font-sora)' }}>
                  {name[0]}
                </div>
                <div>
                  <p className="font-bold text-brand-navy text-sm" style={{ fontFamily: 'var(--font-sora)' }}>{name}</p>
                  <p className="text-xs text-brand-gray">{course} → {company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
