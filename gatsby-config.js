/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Bhanu Patial - Lead Software Architect`,
    description: `Lead Software Architect with 18+ years building mission-critical telecom billing systems at scale | Deep expertise in Amdocs Ensemble, platform modernization, and AI-augmented software engineering`,
    author: `Bhanu Patial`,
    siteUrl: `https://bhanupatial.github.io`,
    keywords: `Software Architect, Telecom BSS, Amdocs Ensemble, Platform Modernization, AI-Augmented Engineering, Kubernetes, Kafka, Lead Architect`,
    image: `/static/bhanupatial-e611736744edb77a72c39f9a4bfcbd79.jpeg`,
    twitterUsername: `@bhanupatial`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/content`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/`,
        excludes: ['/404', '/404.html', '/dev-404-page'],
        query: `
          {
            site {
              siteMetadata {
                siteUrl
              }
            }
            allSitePage {
              nodes {
                path
              }
            }
          }
        `,
        resolveSiteUrl: () => 'https://bhanupatial.github.io',
        serialize: ({ path, modifiedGmt }) => {
          return {
            url: path,
            changefreq: 'monthly',
            priority: path === '/' ? 1.0 : 0.7,
          }
        },
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://bhanupatial.github.io',
        sitemap: 'https://bhanupatial.github.io/sitemap-index.xml',
        policy: [
          {
            userAgent: '*',
            allow: '/',
            disallow: ['/404', '/404.html'],
          }
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "GA-TRACKING_ID", // Google Analytics / GA
          // "AW-CONVERSION_ID", // Google Ads / Adwords / AW
          // "DC-FLOODIGHT_ID", // Marketing Platform advertising products (Display & Video 360, Search Ads 360, and Campaign Manager)
        ],
        // This object gets passed directly to the gtag config command
        // This config will be shared across all trackingIds
        gtagConfig: {
          optimize_id: "OPT_CONTAINER_ID",
          anonymize_ip: true,
          cookie_expires: 0,
        },
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: false,
          // Setting this parameter is also optional
          respectDNT: true,
          // Avoids sending pageview hits from custom paths
          exclude: ["/preview/**", "/do-not-track/me/too/"],
        },
      },
    }
  ]
};