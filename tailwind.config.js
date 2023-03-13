/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      sm: '375px',
      md: '768px',
      lg: '1280px',
      xl: '1600px',
    },
    colors: {
      'soft-red': 'hsl(7, 99%, 70%)',
      'yellow': 'hsl(51, 100%, 49%)',
      'cyan-gray-text': 'hsl(167, 40%, 24%)',
      'dark-blue': 'hsl(198, 62%, 26%)',
      'dark-cyan-footer': 'hsl(198, 62%, 26%)',
      'dark-desaturated-blue': 'hsl(212, 27%, 19%)',
      'very-dark-grayish-blue': 'hsl(213, 9%, 39%)',
      'dark-grayish-blue': 'hsl(232, 10%, 55%)',
      'grayish-blue': 'hsl(210, 4%, 67%)',
      'grayish-blue': 'hsl(210, 4%, 67%)',
      'hero-section': '#3ebfff',
      'white': '#ffffff',
      'red-100': '#eb0909',
      'footer-background': '#90d4c5',
    },
    fontFamily: {
      barlow: ['Barlow', 'sans-serif'],
      fraunces: ['Fraunces', 'serif'],
    },
    extend: {},
  },
  plugins: [],
}
