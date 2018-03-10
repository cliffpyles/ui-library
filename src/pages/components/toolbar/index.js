import React from 'react'
import Documentation from '@systemComponents/Documentation'
import Example from '@systemComponents/Example'
import Toolbar, {ToolbarGroup, Docs} from '@components/Toolbar'

export default () => {
  return (
    <Documentation docs={Docs}>
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
