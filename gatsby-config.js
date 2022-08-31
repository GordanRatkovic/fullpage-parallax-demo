module.exports = {
  siteMetadata: {
    pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "/portfolio"
    siteTitle: 'Monte Packham', // Navigation and Site Title
    siteTitleAlt: 'Monte Packham', // Alternative Site title for SEO
    siteTitleShort: 'Monte Packham', // short_name for manifest
    siteHeadline: 'Monte Packham', // Headline for schema.org JSONLD
    siteUrl: 'http://localhost:8000', // Domain of your site. No trailing slash!
    siteLanguage: 'en', // Language Tag on <html> element
    defaultSeoImage: '/seo/default.jpg', // Used for SEO and manifest
    siteDescription: '',
    author: 'Monte Packham', // Author for schema.org JSONLD
    keywords: '',
    // userTwitter: '@cara', // Twitter Username
    ogSiteName: '/', // Facebook Site Name
    ogLanguage: 'en_US', // Facebook Language
    backgroundColor: '#cdcdcd',
  },
  plugins: [
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-image`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        displayName: true,
        fileName: false,
        minify: true,
      },
    },
  ],
};
