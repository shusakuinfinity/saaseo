/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    siteUrl: 'https://saaseo.dev'
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          "G-243QVX8YT1", //GA4
          "UA-213377852-1", // GA
          "AW-10809603262", // Google Ads
        ],
        gtagConfig: {
          anonymize_ip: true,
          cookie_expires: 0,
          send_page_view: true // default appears to be false.
        },
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: true,
          // Setting this parameter is also optional
          respectDNT: true,
          // Avoids sending pageview hits from custom paths
          exclude: ["/preview/**", "/do-not-track/me/too/"],
        },
      },
    },
    `gatsby-plugin-advanced-sitemap`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://saaseo.dev`,
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://saaseo.dev',
        sitemap: 'https://saaseo.dev/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }]
      }
    },
    {
      resolve: 'gatsby-plugin-next-seo',
      options: {
        title: 'SaaSEO公式ウェブサイト',
        description: 'SEOやマーケティングを強くして、結果につながるサイトを作りたい方はぜひ我々にご相談ください。日本・海外IT領域の最前線で活躍をしているメンバーが、貴社のネット周りを改善致します。無料のオンライン相談、岡崎市周辺であれば対面でのご相談も可能です。',
        language: 'ja',
        openGraph: {
          type: 'website',
          locale: 'ja',
          url: 'https://www.saaseo.dev',
          title: '岡崎市のホームページ制作会社【SaaSEO】集客力が強みのWeb制作会社',
          description: 'SEOやマーケティングを強くして、結果につながるサイトを作りたい方はぜひ我々にご相談ください。日本・海外IT領域の最前線で活躍をしているメンバーが、貴社のネット周りを改善致します。無料のオンライン相談、岡崎市周辺であれば対面でのご相談も可能です。',
          site_name: 'SaaSEO公式ウェブサイト',
          images: [
            {
              url: 'https://saaseo.dev/static/7609539758738dcdbf8cbca078f4cbde/e5f7f/work-tv.webp',
              width: 800,
              height: 600,
              alt: '岡崎市のホームページ制作会社【SaaSEO】集客力が強みのWeb制作会社 1',
            },
            {
              url: 'https://saaseo.dev/static/d880534c54990597b08081a51f9b916d/47255/Logo_SaaSEO_Black.webp',
              width: 800,
              height: 600,
              alt: '岡崎市のホームページ制作会社【SaaSEO】集客力が強みのWeb制作会社 2',
            },
          ],
        },
      },
    },
    // {
    //   resolve: "gatsby-source-strapi",
    //   options: {
    //     apiURL: "https://saaseo-strapi.herokuapp.com/",
    //     collectionTypes: [
    //       "examples",
    //       "categories",
    //     ],
    //     queryLimit: 1000,
    //   },
    // },
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
