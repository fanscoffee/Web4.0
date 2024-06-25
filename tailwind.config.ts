import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        md: '1.5rem',
        lg: '2rem',
      }
    },
    extend: {
      colors: {
        green: 'hsl(115, 35%, 43%)',
        'dark-green': 'hsl(132, 38%, 18%)',
        'light-yellow': 'hsl(64, 73%, 67%)',
        yellow: 'hsl(63, 66%, 55%)',
        brown: 'hsl(40, 87%, 15%)',
        white: 'hsl(0, 0%, 100%)',
        black: 'hsl(0, 0%, 0%)',
        gray: 'hsl(0, 0%, 50%)',
        beige: 'hsl(40, 33%, 84%)',
      },
    },
  },
  plugins: [],
};
export default config;
