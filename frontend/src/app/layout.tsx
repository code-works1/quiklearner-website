import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { Toaster } from 'react-hot-toast'

export const metadata: Metadata = {
  title: {
    default: 'Quicklearner | Software Training & Development - Hyderabad',
    template: '%s | Quicklearner',
  },
  description:
    'Quicklearner offers industry-focused software training in Python, MERN Stack, Data Science, AI/ML, Cybersecurity and more. Bridge the gap between academics and industry.',
  keywords: [
    'software training hyderabad', 'python full stack course', 'data science training',
    'MERN stack course', 'AI ML training', 'upskilling program', 'Quicklearner',
  ],
  authors: [{ name: 'Quicklearner' }],
  openGraph: {
    title: 'Quicklearner | Software Training & Development',
    description: 'Industry-focused training for students and professionals in Hyderabad.',
    url: 'https://Quiklearner.com',
    siteName: 'Quicklearner',
    type: 'website',
    locale: 'en_IN',
  },
  twitter: { card: 'summary_large_image', title: 'Quicklearner', description: 'Industry-focused training' },
  robots: { index: true, follow: true },
  metadataBase: new URL('https://Quiklearner.com'),
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="grain">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Toaster
          position="top-right"
          toastOptions={{
            style: { background: '#1a2355', color: '#fff', fontFamily: 'var(--font-sora)' },
          }}
        />
      </body>
    </html>
  )
}
