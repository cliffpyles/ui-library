import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import Navigation from '@system/Navigation'
import {DocumentationIndex, DocumentationSingle} from '@system/fragments'

import 'prismjs/themes/prism-coy.css'
import '../base.scss'
import '../workspace.scss'

export default (props) => {
  const { children, data, location } = props
  let newProps = { ...props }

  let allDocumentation = data.allDocumentation.edges.reduce((accum, edge) => {
    let { moduleSource,
          moduleDocs,
          moduleVariables,
          moduleName,
          moduleSlug,
          moduleCategory,
          moduleType,
          modulePath } = edge.node
    moduleDocs = JSON.parse(moduleDocs)
    moduleVariables = JSON.parse(moduleVariables)

    if (location.pathname === modulePath) {
      newProps.docs = {
        moduleSource,
        moduleDocs,
        moduleVariables,
        moduleName,
        moduleSlug,
        moduleCategory,
        moduleType,
        modulePath
      }
    }

    if (!accum[moduleCategory]) {
      accum[moduleCategory] = []
    }

    accum[moduleCategory].push({
      path: `${modulePath}`,
      text: moduleName
    })
    return accum
  }, {})
  let site = data.site.siteMetadata

  return (
    <div className="layout">
      <Helmet>
        <title>{site.title}</title>
        <script defer src="//use.fontawesome.com/releases/v5.0.8/js/all.js"></script>
      </Helmet>
      <header className="layout__header">
        <h1 className="layout__header_site-name">
          <Link to="/">{site.name}</Link>
        </h1>
        <div className="layout__header__toolbar"></div>
      </header>
      <main className="layout__main">
        <div className="layout__sidebar">
          <div className="layout__sidebar__item">
            <h3 className="layout__sidebar_heading">Components</h3>
            <Navigation links={allDocumentation.components} />
          </div>
          <div className="layout__sidebar__item">
            <h3 className="layout__sidebar_heading">Layouts</h3>
            <Navigation links={allDocumentation.layouts} />
          </div>
          <div className="layout__sidebar__item">
            <h3 className="layout__sidebar_heading">Views</h3>
            <Navigation links={allDocumentation.views} />
          </div>
        </div>
        <div className="layout__content">
          {children(newProps)}
        </div>
      </main>
    </div>
  )
}

export const LayoutPageQuery = graphql`
  query LayoutPageQuery {
    site {
      siteMetadata {
        name
        title
      }
    }
    allDocumentation {
      edges {
        node {
          ...DocumentationIndex
        }
      }
    }
  }
`
