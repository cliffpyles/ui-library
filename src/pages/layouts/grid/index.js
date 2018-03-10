import React from 'react'
import Documentation from '@systemComponents/Documentation'
import Example from '@systemComponents/Example'
import Grid, {Docs} from '@layouts/Grid'

export default () => {
  return (
    <Documentation docs={Docs} className="is-grid-page">
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
