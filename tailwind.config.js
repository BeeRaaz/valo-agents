/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'tungsten-bold': ['Tungsten Bold', 'sans-serif'],
        'din-next': ['DIN Next', 'sans-serif'],
      },
      colors: {
        black: {
          50: '#111111',
          100: '#0F1923',
        },
        white: {
          50: '#ECEAE6',
          100: '#ECE8E3',
        },
        red: {
          50: '#FF4655',
        },
        blue: {
          50: '#0F1923',
        }
      },
      width: {
        '50%-10px': 'calc(50% - 10px)',
        '33.33%-20px': 'calc(33.33% - 27px)',
      },
      objectPosition: {
        'center-top': '50% 0%',
      }
    },
  },
  plugins: [],
}

