module.exports = {
    siteMetadata: {
        defaultTitle: `Abe Hiroki Portfolio`,
        defaultDescription: `JavaScriptを専門とするAbe Hirokiのポートフォリオサイトです。`,
        defaultImage: "src/image/social-card.png",
        siteUrl: "https://gatsbybook-portfolio-site.netlify.app",
    },
    plugins: [
        `gatsby-plugin-sass`,
        `gatsby-transformer-remark`,
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-image`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `blog`,
                path: `${__dirname}/src/data`,
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `gatsby-starter-default`,
                short_name: `starter`,
                start_url: `https://main--splendid-cat-4076e2.netlify.app/`,
                background_color: `#663399`,
                // This will impact how browsers show your PWA/website
                // https://css-tricks.com/meta-theme-color-and-trickery/
                // theme_color: `#663399`,
                display: `minimal-ui`,
                icon: `src/images/logo.png`, // This path is relative to the root of the site.
            },
        },
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        `gatsby-plugin-offline`,
    ],
}