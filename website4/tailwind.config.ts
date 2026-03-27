import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        black:  '#0a0a0a',
        white:  '#fafaf8',
        gold: {
          DEFAULT: '#c9a84c',
          light:   '#e8c97a',
          dark:    '#a07830',
        },
        gray: {
          100: '#f5f4f0',
          200: '#e8e6e0',
          400: '#9c9890',
          600: '#5c5852',
          800: '#2a2820',
        },
      },
      fontFamily: {
        serif: ['var(--font-cormorant)', 'Georgia', 'serif'],
        sans:  ['var(--font-dm-sans)', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: '2px',
        sm:  '2px',
        md:  '2px',
        lg:  '4px',
        xl:  '8px',
        '2xl': '12px',
        full: '9999px',
      },
      fontSize: {
        eyebrow: ['0.72rem', { letterSpacing: '0.25em' }],
      },
    },
  },
  plugins: [],
}

export default config
