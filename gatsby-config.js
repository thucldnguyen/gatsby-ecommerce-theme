module.exports = {
  siteMetadata: {
    title: `Rio Farm Lâm Hà`,
    siteUrl: `https://www.riofarm.vn`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Rio Farm`,
        short_name: `Rio Farm`,
        start_url: `/`,
        background_color: `#000000`,
        theme_color: `#ffffff`,
        display: `standalone`,
        icon: 'src/assets/favicon.png',
      },
    },
    'gatsby-plugin-netlify',
  ],
};
