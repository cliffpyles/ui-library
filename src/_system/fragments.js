export const DocumentationSingle = graphql`
  fragment DocumentationSingle on Documentation {
    moduleName
    moduleCategory
    modulePath
  }
`

export const DocumentationIndex = graphql`
  fragment DocumentationIndex on Documentation {
    moduleSource
    moduleDocs
    moduleVariables
    moduleName
    moduleSlug
    moduleCategory
    moduleType
    modulePath
  }
`
