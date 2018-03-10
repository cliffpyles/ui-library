import React from 'react'
import ReactDOMServer from 'react-dom/server'
import Prism from 'prismjs'
import PrismCode from 'react-prism'
import pretty from 'pretty'
import CodepenButton from '@systemComponents/CodepenButton'
import Preview from '@systemComponents/Preview'
import GeneratedSource from '@systemComponents/GeneratedSource'

import './styles.scss'
import 'prismjs/themes/prism-coy.css'

export default ({heading, description, children, isViewport = false}) => {
  const output = ReactDOMServer
    .renderToStaticMarkup(children)
    .replace(/ "/g, '"')

  const indentedOutput = pretty(output, { ocd: true })

  return (
    <div className="Example">
      <div className="Example__header">
        <h3 className="Example_heading">{heading}</h3>
        <div className="Example__toolbar">
          <CodepenButton html={indentedOutput} />
        </div>
      </div>
      <div className="Example__section">
        <Preview isViewport={isViewport}>{children}</Preview>
      </div>
      <div className="Example__section">
        <GeneratedSource>{children}</GeneratedSource>
      </div>
    </div>
  )
}
