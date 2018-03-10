const path = require('path')

const PROJECT_ROOT = path.resolve(__dirname)

const plugins = [
  'gatsby-plugin-react-helmet',
  `gatsby-plugin-styled-jsx`,
  'gatsby-plugin-sharp',
  'gatsby-transformer-sharp',
  'gatsby-transformer-json',
  'gatsby-transformer-yaml',
  {
    resolve: `gatsby-plugin-postcss-sass`,
    options: {
      postCssPlugins: [],
      precision: 5
    },
  },
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      path: `${PROJECT_ROOT}/src/pages`,
      name: 'pages',
    },
  },
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      path: `${PROJECT_ROOT}/src/library`,
      name: 'library',
    },
  },
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      path: `${PROJECT_ROOT}/src/_system`,
      name: 'system-components',
    },
  },
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      path: `${PROJECT_ROOT}/src/img`,
      name: 'images',
    },
  },
  {
    resolve: 'gatsby-transformer-remark',
    options: {
      plugins: [
        `gatsby-remark-autolink-headers`,
        {
          resolve: `gatsby-remark-prismjs`,
          options: {
            classPrefix: 'prism-language-'
          }
        },
      ],
    },
  },
  {
    resolve: 'gatsby-remark-embed-snippet',
    options: {
      directory: `${__dirname}/src/library`,
    },
  }
]

module.exports = {
  siteMetadata: {
    title: 'Relax',
    name: 'Relax',
    url: 'http://localhost:8000',
  },
  plugins
}
