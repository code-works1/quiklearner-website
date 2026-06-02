/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy:   '#1a2355',
          navyD:  '#0f1635',
          gold:   '#f5a623',
          goldD:  '#e8940f',
          dark:   '#2d2d2d',
          gray:   '#6b7280',
          light:  '#f8f9fc',
        },
      },
      fontFamily: {
        display: ['var(--font-sora)', 'sans-serif'],
        body:    ['var(--font-dm-sans)', 'sans-serif'],
        mono:    ['var(--font-fira-code)', 'monospace'],
      },
      animation: {
        'fade-up':     'fadeUp 0.6s ease forwards',
        'fade-in':     'fadeIn 0.5s ease forwards',
        'slide-right': 'slideRight 0.5s ease forwards',
        'pulse-slow':  'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float':       'float 4s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: 0, transform: 'translateY(30px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%':   { opacity: 0 },
          '100%': { opacity: 1 },
        },
        slideRight: {
          '0%':   { opacity: 0, transform: 'translateX(-20px)' },
          '100%': { opacity: 1, transform: 'translateX(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-12px)' },
        },
      },
      backgroundImage: {
        'gradient-brand': 'linear-gradient(135deg, #1a2355 0%, #2d3a7c 100%)',
        'gradient-gold':  'linear-gradient(135deg, #f5a623 0%, #f97316 100%)',
        'dot-pattern':    'radial-gradient(circle, #1a235520 1px, transparent 1px)',
      },
      backgroundSize: {
        'dot-sm': '24px 24px',
      },
      boxShadow: {
        'brand': '0 4px 24px rgba(26,35,85,0.15)',
        'gold':  '0 4px 24px rgba(245,166,35,0.3)',
        'card':  '0 2px 16px rgba(0,0,0,0.08)',
      },
    },
  },
  plugins: [],
}
