/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    siteUrl: 'https://www.sasseo.com'
  },
  plugins: [
    `gatsby-plugin-advanced-sitemap`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-postcss`,
    'gatsby-plugin-robots-txt',
    {
      resolve: 'gatsby-plugin-next-seo',
      options: {
        title: 'SaaSEO公式ウェブサイト',
        description: 'the description of SaaSEO',
        language: 'ja',
        openGraph: {
          type: 'website',
          locale: 'en_IE',
          url: 'https://www.url.ie/',
          site_name: 'SiteName',
        },
        twitter: {
          handle: '@handle',
          site: '@site',
          cardType: 'summary_large_image',
        },
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/ // See below to configure properly
        }
      }
    },
    {
      resolve: `gatsby-plugin-breadcrumb`,
      options: {
        defaultCrumb: {
          location: {
            pathname: "/",
          },
          crumbLabel: "ホーム",
          crumbSeparator: " / ",
        },
      }
    },
  ],
}
