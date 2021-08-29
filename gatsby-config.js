module.exports = {
  pathPrefix: '/',
  siteMetadata: {
    title: `Wavier 🏄`,
    description: `Generate wavy dividers for your website easily with this tool!`,
    keywords: [
      'wavy',
      'svg',
      'css',
      'wave',
      'waves',
      'divider',
      'dividers',
      'section',
      'header',
      'helper',
      'generator',
      'generate',
      'front-end',
      'developer',
      'wavier',
    ],
    image: '/src/images/websiteScreenshot.png',
    author: `Eugene Zolotarenko`,
    twitterUsername: '@eugZolotarenko',
    siteUrl: 'https://wavier.art',
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: ['G-MD62YYRMG8'],
        pluginConfig: {
          head: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-google-adsense`,
      options: {
        publisherId: `ca-pub-8272593002493911`,
      },
    },
    {
      resolve: `gatsby-plugin-material-ui`,
      options: {
        stylesProvider: {
          injectFirst: true,
        },
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Wavier`,
        short_name: `Wavier`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/Wavier.svg`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
