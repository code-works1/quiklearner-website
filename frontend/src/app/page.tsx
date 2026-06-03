import ContactCTASection from '@/components/sections/ContactCTASection'
import CoursesSection from '@/components/sections/CoursesSection'
import HeroSection from '@/components/sections/HeroSection'
import PartnershipsSection from '@/components/sections/PartnershipsSection'
import PlacedCompaniesSection from '@/components/sections/PlacedCompaniesSection'
import TestimonialsSection from '@/components/sections/TestimonialsSection'
import WhyUsSection from '@/components/sections/WhyUsSection'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Quicklearner | Best Software Training Institute in Hyderabad',
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <CoursesSection />
      <WhyUsSection />
      <PartnershipsSection />
      <TestimonialsSection />
      <PlacedCompaniesSection />
      <ContactCTASection />
    </>
  )
}
