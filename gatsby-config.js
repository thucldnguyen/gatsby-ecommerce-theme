module.exports = {
  siteMetadata: {
    title: `Rio Farm Lâm Hà`,
    siteUrl: `https://www.riofarm.vn`,
    description: `Rio Macca - Hạt macadamia sấy hàng đầu Lâm Hà, Lâm Đồng. Nông sản sạch, an toàn thực phẩm.`,
  },
  plugins: [
    // Image optimization (critical for performance)
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',

    // SEO & sitemap
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        excludes: ['/cart', '/checkout', '/login', '/signup', '/how-to-use'],
      },
    },

    // PWA manifest
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
