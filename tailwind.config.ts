import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#00AAFF',
          hover: '#19b2ff',
        },
        background: '#111111',
      },
      fontFamily: {
        ubuntu: ['var(--font-ubuntu)'],
      },
      backgroundImage: {
        'shine': 'linear-gradient(120deg, transparent, rgba(255,255,255,0.3), transparent)',
      },
      keyframes: {
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      animation: {
        'gradient': 'gradient 4s ease infinite',
      },
    },
  },
  plugins: [],
}
export default config
