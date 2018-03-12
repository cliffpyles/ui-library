import React from 'react'
import './styles.scss'

const DocumentationModuleVariable = ({children, name, defaultValue}) => {
  return (
    <div className="Documentation__variable">
      <span className="Documentation__variable_name">{name}</span>:
      <span className="Documentation__variable_default-value">{defaultValue}</span>
    </div>
  )
}
const DocumentationTag = ({tag, name, optional, description, type}) => {
  return (
    <div className="Documentation__tag">
      <span className="Documentation__tag_name">{name}</span>
      {!optional && <span className="Documentation__tag_optional">(required)</span>}
      <span className="Documentation__tag_description">{description}</span>
      <span className="Documentation__tag_type">{type}</span>
    </div>
  )
}
const DocumentationTagSection = ({baseKey, tags, title}) => {
  return (
    <div className="Documentation__section">
      <h3 className="Documentation__section_title">{title}</h3>
      {tags.map(item =>
        <DocumentationTag
          key={`${baseKey}-${item.tag}-${item.name}`}
          tag={item.tag}
          name={item.name}
          optional={item.optional}
          description={item.description}
          type={item.type} />)}
    </div>
  )
}
export default ({children, className = '', docs}) => {
  let {modulePath} = docs
  let {tags, description, source} = docs.moduleDocs
  let {
    block:blocks = [],
    element:elements = [],
    modifier:modifiers = []
  } = tags
  let hasBlocks = (blocks.length > 0)
  let hasElements = (elements.length > 0)
  let hasModifiers = (modifiers.length > 0)

  return (
    <div className={`Documentation ${className}`}>
      <h3 className="Documentation_heading">{docs.moduleName}</h3>
      <p className="Documentation_subtitle">{docs.moduleDocs.description}</p>
      <div className="Documentation__section">
        {children}
      </div>

      {hasModifiers && <DocumentationTagSection baseKey={modulePath} tags={modifiers} title='Modifiers' />}

      {hasBlocks && <DocumentationTagSection baseKey={modulePath} tags={blocks} title='Blocks' />}

      {hasElements && <DocumentationTagSection baseKey={modulePath} tags={elements} title='Elements' />}

      <h3 className="Documentation_heading">Theme Variables</h3>
      <div className="Documentation__section">
        <div className="Documentation__variables">
          {docs.moduleVariables.map(variable =>
            <DocumentationModuleVariable
              key={`${docs.modulePath}-${variable.name}`}
              name={variable.name}
              defaultValue={variable.defaultValue} />)}
        </div>
      </div>
    </div>
  )
}
