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
          red: '#8b0000',
          green: '#2d5016'
        }
      },
      fontFamily: {
        western: ['"Rye"', 'serif'],
        georgian: ['"Noto Sans Georgian"', 'sans-serif'],
        mono: ['"Courier New"', 'monospace']
      }
    },
  },
  plugins: [],
}
