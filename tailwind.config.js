module.exports = {
  mode: 'jit',
  purge: [
    './**/*.html', // sesuaikan dengan file yang akan di proses
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      'orange': 'hsl(25, 97%, 53%)',
      'lightGrey': 'hsl(217, 12%, 63%)',
      'mediumGrey': 'hsl(216, 12%, 54%)',
      'darkBlue': 'hsl(213, 19%, 18%)',
      'veryDarkBlue': 'hsl(216, 12%, 8%)',
      'black': 'hsl(0,0%,5.49%)',
      'white': 'hsl(0, 0%, 100%)',
      'lightBlue': 'hsl(210,19.15%,18.43%)',
      'aboutBlue': 'hsl(215.29,20.99%,15.88%)'

    },
    screen: {
      'sm': '375px',
      'lg': '1440px',
    },

    extend: {
      fontFamily: {
       'display': ['Overpass']
            },
      fontSize: {
        base: ['15px', '24px'],
            },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
