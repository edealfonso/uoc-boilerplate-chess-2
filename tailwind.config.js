const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  // corePlugins: {
  //   container: false
  // },
  content: ['./src/**/*.{html,js}'],
  theme: {
    colors : {
      'primary': {
        DEFAULT: '#3713b1',
        light: 'rgb(219, 213, 241)',
      },
      'secondary': "#e78b80",
      'black': {
        DEFAULT: 'rgb(33, 37, 41)',
        light: 'rgba(33, 37, 41, .03)',
      },
      'white': "#fff",
    },
    fontFamily: {
      'body': ['DM Sans', ...defaultTheme.fontFamily.sans],
      'display': ['Poiret One', ...defaultTheme.fontFamily.sans],
    },
    screens: {
      'sm': '576px',
      'md': '768px',
      'lg': '992px',
      'xl': '1200px',
      '2xl': '1400px',    
    },
    container: {
      center: true,
      padding: '.75rem',
    },
    extend: {
      spacing: {
        xxxs: '5px',
        xxs: '12px',
        xs: '1.125rem',
        sm: '1.35rem',
        md: '1.5rem',
        lg: '1.7rem',
        '4xl': '4.5rem'
      },
      fontSize: {
        sm: ['15.2px', '20px'],
        xl: ['1.25rem', '1.5rem'],
        cover: ['calc(1.475rem + 2.7vw)', '1.2'],
      },
      opacity: {
        '18': '.18',
        '55': '.55',
      },
      gridTemplateRows: {
        // Body grid
        'body': 'auto 1fr auto',
        // Cover body grid
        'body-cover': 'auto 50vh auto auto',
        // Cover body grid - large screens
        'body-cover-large': 'auto repeat(4,1fr) auto',
      },
      gridTemplateColumns: {
        // Footer large
        'footer-large': '1fr auto 1fr',
      },
      maxWidth: {
        'cover': '7em',
      },
      flex: {
        'card': '1 0 17em'
      },
      height: {
        '68': '17rem',
      }
    },
  },

  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.container': {
          '@screen sm': {
            maxWidth: '540px',
          },
          '@screen md': {
            maxWidth: '720px',
          },
          '@screen lg': {
            maxWidth: '960px',
          },
          '@screen xl': {
            maxWidth: '1140px',
          },
          '@screen 2xl': {
            maxWidth: '1320px',
          },
        }
      })
    }
  ]
}

