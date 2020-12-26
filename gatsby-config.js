/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

//SEO
const siteMetadata = {
  title: `Gus and co`,
  description: `website about shoe repair`,
  image: `/images/test.jpg`,
  siteUrl: `https://thelocalhost.io`,
  siteLanguage: `en-US`,
  siteLocale: `en_us`,
  twitterUsername: `@bhombogdan`,
  authorName: `Draghia Bogdna`,
}

module.exports = {
  siteMetadata: siteMetadata,

  plugins: [
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        implementation: require("sass"),
      },
    },
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `./src/Components/Services-Components/dataservices/`,
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [`/`, `/Services/`],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: "G-3GJRZX9TGT",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // Delays sending pageview hits on route update (in milliseconds)
        pageTransitionDelay: 0,
        // Enables Google Optimize using your container Id
        defer: false,
        // Any additional optional fields
        sampleRate: 5,
        siteSpeedSampleRate: 10,
        cookieDomain: "https://gusandco.netlify.app/",
      },
    },
    `gatsby-plugin-scroll-reveal`,
    `gatsby-plugin-react-helmet`,
  ],
}
