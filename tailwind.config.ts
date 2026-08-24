import type { Config } from 'tailwindcss'

const color = (token: string) => `rgb(var(${token}) / <alpha-value>)`

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        md: '1.5rem',
        lg: '2rem'
      }
    },
    extend: {
      colors: {
        brand: {
          primary: color('--brand-primary'),
          secondary: color('--brand-secondary'),
          accent: color('--brand-accent'),
          background: color('--brand-background'),
          surface: color('--brand-surface'),
          foreground: color('--brand-foreground'),
          burgundy: color('--brand-burgundy'),
          cream: color('--brand-cream'),
          paper: color('--brand-paper'),
          pink: color('--brand-pink'),
          olive: color('--brand-olive'),
          gold: color('--brand-gold'),
          muted: color('--brand-muted'),
          border: color('--brand-border'),
          hover: color('--brand-hover'),
          success: color('--brand-success'),
          error: color('--brand-error')
        },

        // Legacy names kept so existing content stays intact while using new tokens.
        green: color('--brand-olive'),
        'dark-green': color('--brand-burgundy'),
        'light-yellow': color('--brand-pink'),
        yellow: color('--brand-gold'),
        brown: color('--brand-burgundy'),
        beige: color('--brand-cream'),

        gray: {
          50: color('--gray-50'),
          100: color('--gray-100'),
          200: color('--gray-200'),
          300: color('--gray-300'),
          400: color('--gray-400'),
          500: color('--gray-500'),
          600: color('--gray-600'),
          700: color('--gray-700'),
          800: color('--gray-800'),
          900: color('--gray-900')
        }
      },
      fontFamily: {
        sans: ['var(--font-body)', 'Arial', 'sans-serif'],
        display: ['var(--font-display)', 'Arial Rounded MT Bold', 'sans-serif'],
        script: ['var(--font-script)', 'cursive']
      },
      borderRadius: {
        brand: '1.25rem',
        'brand-lg': '1.75rem'
      },
      boxShadow: {
        brand: '0 14px 36px rgb(var(--brand-burgundy) / 0.12)',
        'brand-soft': '0 4px 18px rgb(var(--brand-burgundy) / 0.08)'
      }
    }
  },
  plugins: []
}

export default config
