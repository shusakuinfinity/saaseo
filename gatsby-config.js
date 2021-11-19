/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    siteUrl: 'https://www.saaseo.dev'
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
        description: 'SEOやマーケティングを強くして、結果につながるサイトを作りたい方はぜひ我々にご相談ください。日本・海外IT領域の最前線で活躍をしているメンバーが、貴社のネット周りを改善致します。無料のオンライン相談、岡崎市周辺であれば対面でのご相談も可能です。',
        language: 'ja',
        openGraph: {
          type: 'website',
          locale: 'en_IE',
          url: 'https://www.saaseo.dev',
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
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "UA-213377852-1", // Google Analytics / GA
          "AW-CONVERSION_ID", // Google Ads / Adwords / AW
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
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/ // See below to configure properly
        }
      }
    },
  ],
}
