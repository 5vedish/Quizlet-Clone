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
        textColor: ['active'],
        borderRadius: ['active'],
    }
  },
  plugins: [require('@tailwindcss/custom-forms')],
}
