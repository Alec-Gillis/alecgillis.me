module.exports = {
  siteMetadata: {
    title: `Alec Gillis (dot me)`,
    description: `I'm Alec Gillis, a programmer.`,
    author: `Alec Gillis`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-167318606-1"
      }
    },
    'gatsby-plugin-sass',
    {
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: "./static/favicon.png"
      }
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
            `Lato`,
        ],
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: `markdown-posts`,
        path: `${__dirname}/src/markdown-posts`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/src/markdown-pages`
      }
    },
    'gatsby-transformer-remark'
  ],
}
