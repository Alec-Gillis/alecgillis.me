module.exports = {
  siteMetadata: {
    title: `Alec Gillis (dot me)`,
    description: `I'm Alec Gillis, a programmer.`,
    author: `Alec Gillis`,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: "./static/favicon.png"
      }
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
