import { Building2 } from 'lucide-react';

const companies = [
  { name: ' ', logo: '/company-logos/google.png' },
  { name: ' ', logo: '/company-logos/microsoft.png' },
  { name: ' ', logo: '/company-logos/amazon.png' },
  { name: ' ', logo: '/company-logos/accenture.png' },
  { name: ' ', logo: '/company-logos/infosys.png' },
  { name: ' ', logo: '/company-logos/tcs.png' },
  { name: ' ', logo: '/company-logos/wipro.png' },
  { name: ' ', logo: '/company-logos/cognizant.png' },
  { name: ' ', logo: '/company-logos/deloitte.png' },
  { name: ' ', logo: '/company-logos/capgemini.png' },
  { name: ' ', logo: '/company-logos/hcltech.png' },
  { name: '  ', logo: '/company-logos/tech-mahindra.png' },
]

function CompanyLogoCard({ name, logo }: { name: string; logo: string }) {
  return (
    <div className="group flex min-h-[140px] flex-col items-center justify-center rounded-2xl border border-red-100 bg-white px-5 py-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-red-300 hover:shadow-brand">
      <div className="mb-4 flex h-16 w-full items-center justify-center">
        <img
          src={logo}
          alt={`${name} logo`}
          className="max-h-12 max-w-[140px] object-contain transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <p
        className="text-sm font-bold text-brand-navy sm:text-base"
        style={{ fontFamily: 'var(--font-sora)' }}
      >
        {name}
      </p>
    </div>
  )
}

export default function PlacedCompaniesSection() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <span className="badge mb-4 inline-flex items-center gap-2">
            <Building2 size={14} />
            Placement Network
          </span>

          <h2 className="section-title mb-4">
            Students Placed In Top MNCs
          </h2>

          <p className="section-subtitle mx-auto">
            Our learners are trained for career opportunities across leading technology,
            consulting, and enterprise companies.
          </p>
        </div>

        <div className="rounded-[2rem] border border-red-100 bg-gradient-to-br from-white via-red-50/40 to-white p-5 shadow-xl shadow-red-950/5 sm:p-7">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
            {companies.map((company) => (
              <CompanyLogoCard key={company.name} {...company} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
