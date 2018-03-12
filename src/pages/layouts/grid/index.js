import React from 'react'
import Documentation from '@system/Documentation'
import Example from '@system/Example'
import Grid from '@layouts/Grid'

export default ({data, docs}) => {
  return (
    <Documentation className="is-layout-documentation">
      <Example heading="Grid Example">
        <Grid>
          <div>
            <h3>Item 1 Content</h3>
          </div>
          <div>
            <h3>Item 2 Content</h3>
          </div>
          <div>
            <h3>Item 3 Content</h3>
          </div>
          <div>
            <h3>Item 4 Content</h3>
          </div>
          <div>
            <h3>Item 5 Content</h3>
          </div>
        </Grid>
      </Example>

      <Example heading="Grid Example with Small Cells">
        <Grid className="has-small-cells">
          <div>
            <h3>Item 1 Content</h3>
          </div>
          <div>
            <h3>Item 2 Content</h3>
          </div>
          <div>
            <h3>Item 3 Content</h3>
          </div>
          <div>
            <h3>Item 4 Content</h3>
          </div>
          <div>
            <h3>Item 5 Content</h3>
          </div>
        </Grid>
      </Example>

      <Example heading="Grid Example with Extra Small Cells">
        <Grid className="has-extra-small-cells">
          <div>
            <h3>Item 1 Content</h3>
          </div>
          <div>
            <h3>Item 2 Content</h3>
          </div>
          <div>
            <h3>Item 3 Content</h3>
          </div>
          <div>
            <h3>Item 4 Content</h3>
          </div>
          <div>
            <h3>Item 5 Content</h3>
          </div>
        </Grid>
      </Example>
    </Documentation>
  )
}
