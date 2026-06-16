import { Building2, Handshake, MapPin } from 'lucide-react'
import Image from 'next/image'

const mouPartners = [
  {
    name: 'Universal Engineering College',
    location: 'Guntur',
    image: '/images/mous/image01.jpeg',
  },
  {
    name: 'Brilliant Engineering College',
    location: 'Hyderabad',
    image: '/images/mous/image02.jpeg',
  },
  {
    name: 'Pallavi Engineering College',
    location: 'Hyderabad',
    image: '/images/mous/image03.jpeg',
  },
  {
    name: 'MAM Engineering College',
    location: 'Narasaraopet, Guntur',
    image: '/images/mous/image04.jpeg',
  },
  {
    name: 'Chalapathi Engineering College',
    location: 'Mothadaka, Guntur',
    image: '/images/mous/image05.jpeg',
  },
  {
    name: 'KLM College',
    location: 'Kadapa',
    image: '/images/mous/image06.jpeg',
  },
]

export default function MouPartnershipsSection() {
  return (
    <section id="mou-partnerships" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <span className="badge mb-4 inline-flex items-center gap-2">
            <Handshake size={16} />
            Academic Partnerships
          </span>

          <h2
            className="mb-4 text-3xl font-bold text-brand-navy md:text-4xl"
            style={{ fontFamily: 'var(--font-sora)' }}
          >
            Our MOUs with Colleges
          </h2>

          <p className="mx-auto max-w-3xl text-brand-gray">
            QuickLearner collaborates with reputed colleges through academic MOUs to support
            industry-oriented training, skill development, workshops, and career readiness programs.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {mouPartners.map((college) => (
            <div
              key={college.name}
              className="group overflow-hidden rounded-3xl border border-red-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-brand"
            >
              <div className="relative h-56 overflow-hidden bg-red-50">
                <Image
                  src={college.image}
                  alt={`${college.name} MOU with QuickLearner`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />

                <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-red-700 shadow-sm backdrop-blur">
                  MOU Partner
                </div>
              </div>

              <div className="p-6">
                <div className="mb-3 flex items-start gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-red-50 text-red-600">
                    <Building2 size={22} />
                  </div>

                  <div>
                    <h3
                      className="text-lg font-bold text-brand-navy transition-colors group-hover:text-brand-gold"
                      style={{ fontFamily: 'var(--font-sora)' }}
                    >
                      {college.name}
                    </h3>

                    <p className="mt-1 flex items-center gap-1 text-sm text-brand-gray">
                      <MapPin size={14} />
                      {college.location}
                    </p>
                  </div>
                </div>

                <p className="text-sm leading-relaxed text-brand-gray">
                  Partnered with QuickLearner for training programs, technical workshops,
                  placement-oriented learning, and student skill enhancement initiatives.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
