module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'bkg-body': 'url(/src/img/bkg-errorPage.png)',
        'bkg-404': 'url(/src/img/404.png)'
        
      }),
      fontFamily:{
        body: ['Titillium Web']
      },
      fontSize:{
        'subtitle':'12rem',
        'subtitlelg':'18rem'
      },
    },
  },
  plugins: [],
}