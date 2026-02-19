/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        wolves: {
          dark: '#0a0a0a',
          darker: '#050505',
          gray: '#1a1a1a',
          border: '#2a2a2a',
          accent: '#8b4513',
          gold: '#d4af37',
          'gold-light': '#f4d03f',
          red: '#8b0000',
          green: '#2d5016',
          glass: 'rgba(10, 10, 10, 0.7)',
          'glass-border': 'rgba(212, 175, 55, 0.2)',
        }
      },
      fontFamily: {
        western: ['"Rye"', 'serif'],
        georgian: ['"Noto Sans Georgian"', 'sans-serif'],
        mono: ['"Courier New"', 'monospace']
      },
      backdropBlur: {
        xs: '2px',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
}
