/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#050507",
        foreground: "#f4f4f0",
        cinera: {
          bg: "#050507",
          surface: "#0b0b0d",
          card: "#121215",
          border: "#202025",
          muted: "#80808a",
          aqua: "#00e5ff",
          "aqua-light": "#67e8f9",
          "aqua-dark": "#00b8d4",
          "aqua-glow": "#00e5ff",
          offwhite: "#f4f4f0",
          cream: "#eae8e1",
        }
      },
      fontFamily: {
        display: ["Outfit", "Oswald", "Plus Jakarta Sans", "sans-serif"],
        sans: ["Plus Jakarta Sans", "Inter", "sans-serif"],
        mono: ["JetBrains Mono", "Courier New", "monospace"],
      },
      animation: {
        'shimmer': 'shimmer 3.5s infinite linear',
        'pulse-subtle': 'pulse-subtle 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'pulse-subtle': {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.6 },
        },
      },
      backgroundImage: {
        'radial-gradient': 'radial-gradient(var(--tw-gradient-stops))',
        'cinematic-gradient': 'linear-gradient(to bottom, rgba(5,5,7,0.3), rgba(5,5,7,0.95))',
      }
    },
  },
  plugins: [],
}
