const siteDescription = 'Gatsby Starter powered by MDX and Theme UI.'

module.exports = {
  siteMetadata: {
    title: 'Gatsby starter',
    description: siteDescription,
    author: `@Junscuzzy`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-theme-ui`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/assets/images`
      }
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /svg/ // See below to configure properly
        }
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `fonts`,
        path: `${__dirname}/assets/fonts`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/content`
      }
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: [
            'Playfair+Display:400,700,900',
            'Roboto:300,400,400i,500,700'
          ]
        }
      }
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1035,
              quality: 90,
              withWebp: true,
              linkImagesToOriginal: false,
              sizeByPixelDensity: true
            }
          },
          {
            resolve: 'gatsby-remark-external-links',
            options: {
              target: '_blank',
              rel: 'nofollow noopener noreferrer'
            }
          }
        ]
      }
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'MDX + Theme UI - Gatsby Starter', // Alternative Site title for SEO
        short_name: 'Gatsby-starter',
        description: siteDescription,
        start_url: `/`,
        background_color: '#2b2e3c',
        theme_color: '#3498DB',
        display: 'standalone',
        icon: 'src/favicon.png'
      }
    },
    // {
    //   resolve: `gatsby-plugin-gtag`,
    //   options: {
    //     trackingId: config.googleAnalyticsID,
    //     head: true,
    //     anonymize: true,
    //   },
    // },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`
  ]
}
