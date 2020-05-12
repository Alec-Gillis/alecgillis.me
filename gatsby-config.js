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
      resolve: 'gatsby-source-filesystem',
      options: {
        name: `markdown-posts`,
        path: `${__dirname}/src/markdown-posts`
      }
    },
    'gatsby-transformer-remark'
  ],
}
