const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        display: ['Mulish', ...defaultTheme.fontFamily.sans]
      },
      width: {
        'sidenav-sm': '100px',
        'sidenav-md': '255px'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
