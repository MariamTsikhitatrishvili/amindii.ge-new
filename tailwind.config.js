module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true
    },
    extend: {
      colors: {
        'site-blue': '#0C93F1',
        'site-deep-blue': '#071339',
        'sidebar-white': '#ffffff1A'
      },
      fontFamily: {
        myriad: 'myriad',
        helvetica: 'helvetica'
      }
    },
  },
  plugins: [],
}
