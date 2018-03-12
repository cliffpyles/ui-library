import React from 'react'
import ReactDOMServer from 'react-dom/server'
import Prism from 'prismjs'
import PrismCode from 'react-prism'
import pretty from 'pretty'
import CodepenButton from '@system/CodepenButton'

import './styles.scss'
import 'prismjs/themes/prism-coy.css'

export default ({children}) => {
  const output = ReactDOMServer
    .renderToStaticMarkup(children)
    .replace(/ "/g, '"')

  const indentedOutput = pretty(output, { ocd: true })

  return (
    <div className="GeneratedSource">
      <h4 className="GeneratedSource_heading">HTML</h4>
      <div className="GeneratedSource__body">
        <pre className="GeneratedSource__pre">
          <PrismCode className="language-html">
            {indentedOutput}
          </PrismCode>
        </pre>
      </div>
    </div>
  )
}
