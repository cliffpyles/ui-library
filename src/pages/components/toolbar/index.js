import React from 'react'
import Documentation from '@system/Documentation'
import Example from '@system/Example'
import Toolbar, {ToolbarGroup} from '@components/Toolbar'

export default ({data, docs}) => {
  return (
    <Documentation docs={docs}>
      <Example heading="Toolbar">
        <Toolbar>
          <button>Button 1</button>
          <button>Button 2</button>
          <input type="text" value="search value"/>
          <button>search</button>
        </Toolbar>
      </Example>

      <Example heading="Toolbar with Toolbar Groups">
        <Toolbar>
          <ToolbarGroup>
            <button>Button 1</button>
            <button>Button 2</button>
          </ToolbarGroup>
          <ToolbarGroup>
            <input type="text" value="search value"/>
            <button>search</button>
          </ToolbarGroup>
        </Toolbar>
      </Example>

      <Example heading="Toolbar with Spaced Toolbar Groups">
        <Toolbar className="has-space-between">
          <ToolbarGroup>
            <button>Button 1</button>
            <button>Button 2</button>
          </ToolbarGroup>
          <ToolbarGroup>
            <input type="text" value="search value"/>
            <button>search</button>
          </ToolbarGroup>
        </Toolbar>
      </Example>
    </Documentation>
  )
}
