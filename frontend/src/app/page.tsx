import type { Metadata } from 'next'
import HeroSection from '@/components/sections/HeroSection'
import CoursesSection from '@/components/sections/CoursesSection'
import WhyUsSection from '@/components/sections/WhyUsSection'
import TestimonialsSection from '@/components/sections/TestimonialsSection'
import ContactCTASection from '@/components/sections/ContactCTASection'

export const metadata: Metadata = {
  title: 'Quicklearner | Best Software Training Institute in Hyderabad',
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <CoursesSection />
      <WhyUsSection />
      <TestimonialsSection />
      <ContactCTASection />
    </>
  )
}
