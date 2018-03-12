const crypto = require('crypto')
const parse = require('comment-parser')
const inflection = require('inflection')
const path = require('path')
const THEME_VARIABLE_REGEX = new RegExp('^\\$([\\w-]+):(.+);', 'mg')
const SOURCE_CODE_REGEX = new RegExp('^\\.(\\w|-)+(\\n|.)+(^})', 'mg')

function groupBy (collection, fieldName) {
  return collection.reduce((accum, item) => {
    let type = item[fieldName]
    if (!accum[type]) {
      accum[type] = []
    }
    accum[type].push(item)
    return accum
  }, {})
}

function buildSassDocs ({ node, boundActionCreators, content }) {
  if (node.internal.mediaType !== 'text/x-scss') {
    return
  }

  const { createNode, createParentChildLink } = boundActionCreators

  let parsedComments = parse(content)
  let moduleName = path.basename(node.relativeDirectory)
  let moduleSlug = inflection.underscore(moduleName).replace('_','-')
  let moduleCategory = path.basename(path.dirname(node.relativeDirectory))
  let moduleType = inflection.singularize(moduleCategory)
  let moduleSource = content.match(SOURCE_CODE_REGEX)
  let modulePath = `/${moduleCategory}/${moduleSlug}`
  let vars = content.match(THEME_VARIABLE_REGEX)
  let moduleVariables = vars.reduce((accum, themeVariable) => {
    let variableSections = themeVariable.split(':', 2)
    let variableName = variableSections[0]
    let defaultValue = variableSections[1].replace('!default;','').trim()
    let variableNameSections = variableName.split('--')

    let variable = {
      defaultValue,
      name: variableName
    }
    accum.push(variable)
    return accum
  }, [])
  let moduleDocs = (parsedComments.length) ? parsedComments[0] : {}
  if (!moduleDocs.description) {
    moduleDocs.description = 'No description given'
  }
  if (!moduleDocs.tags) {
    moduleDocs.tags = []
  } else {
    moduleDocs.tags = groupBy(moduleDocs.tags, 'tag')
  }
  let documentationNode = {
    id: `${node.id}-documentation`,
    parent: node.id,
    children: [],
    moduleSource: (moduleSource.length) ? moduleSource[0] : '',
    moduleDocs: JSON.stringify(moduleDocs),
    moduleVariables: JSON.stringify(moduleVariables),
    moduleName,
    moduleSlug,
    moduleCategory,
    moduleType,
    modulePath,
    internal: {
      type: 'Documentation',
      contentDigest: crypto
        .createHash(`md5`)
        .update(JSON.stringify(content))
        .digest(`hex`)
    }
  }
  createNode(documentationNode)
  createParentChildLink({
    parent: node,
    child: documentationNode
  })
}

exports.onCreateNode = ({ node, boundActionCreators, loadNodeContent }) => {
  const isFile = (node.internal.type === 'File')
  const isSass = (node.internal.mediaType === 'text/x-scss')

  if (isFile && isSass) {
    loadNodeContent(node).then((content) => {
      buildSassDocs({ node, boundActionCreators, content })
    }).catch((err) => {
      return err
    })
  }
}

exports.onCreatePage = async ({ page, boundActionCreators }) => {
  const { createPage, deletePage } = boundActionCreators

  return new Promise((resolve, reject) => {
    if (!page.context.path) {
      page.context.path = page.path
    }
    resolve()
  });
}
