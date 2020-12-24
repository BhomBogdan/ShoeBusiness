/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

//SEO

module.exports = {
  siteMetadata: {
    title: "Severus Snape",
    titleTemplate: "%hello",
    description: "Gatsby seo",
    url: "https://determined-ramanujan-fb27b8.netlify.app/", // No trailing slash allowed!
    image: "/images/testlanding.png", // Path to your image you placed in the 'static' folder
    twitterUsername: "@occlumency",
  },

  plugins: [
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        implementation: require("sass"),
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [`/`, `/Services/`],
      },
    },
    `gatsby-plugin-scroll-reveal`,
    `gatsby-plugin-react-helmet`,
  ],
}
