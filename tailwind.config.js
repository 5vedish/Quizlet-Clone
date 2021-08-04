module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        trial: ['Neuton'],
      },
    },
  },
  variants: {
    extend: {
        backgroundColor: ['active'],
    }
  },
  plugins: [require('@tailwindcss/custom-forms')],
}
