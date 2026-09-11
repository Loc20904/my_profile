/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: {
          light: '#FBFBFA',
          dark: '#09090B',
        },
        surface: {
          light: '#FFFFFF',
          dark: '#121215',
        },
        surfaceL2: {
          light: '#F4F4F5',
          dark: '#18181B',
        },
        dotnet: {
          light: '#512BD4',
          DEFAULT: '#6D28D9',
          dark: '#8B5CF6',
        },
        emeraldGlow: {
          DEFAULT: '#10B981',
          dim: '#064E3B',
        }
      },
      fontFamily: {
        sans: ['Geist', 'Plus Jakarta Sans', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['Geist Mono', 'JetBrains Mono', 'Fira Code', 'monospace'],
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
}
