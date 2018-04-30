module.exports = {
  siteMetadata: {
    title: 'Murray Williams - Freelance UX Designer & Developer',
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-118410471-1",
        head: true,
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',

    ],
};
