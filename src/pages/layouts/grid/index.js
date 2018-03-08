import React from 'react'
import Documentation from '@siteComponents/Documentation'
import Example from '@siteComponents/Example'
import Grid, {Docs} from '@layouts/Grid'

export default () => {
  return (
    <Documentation docs={Docs} className="is-grid-page">
      <Example heading="Grid Example">
        <Grid>
          <div>
            <h3>Item 1 Content</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat, pariatur, perferendis. Eos repellendus, qui corrupti sint. Repellendus accusamus dicta, dignissimos aliquid doloremque eos deserunt in iusto, porro laboriosam, quibusdam beatae.</p>
          </div>
          <div>
            <h3>Item 2 Content</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam consectetur, rem voluptas fugiat facere autem, saepe vero molestiae deserunt. Minus repellat tempora in, quisquam perspiciatis deleniti molestiae aut ratione numquam!</p>
          </div>
          <div>
            <h3>Item 3 Content</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, ex quibusdam dicta corporis vitae iure ipsum praesentium ratione pariatur, fugit molestias minima, explicabo, facere labore accusantium quo est tempore officia.</p>
          </div>
          <div>
            <h3>Item 4 Content</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore ipsam veritatis vitae assumenda, animi possimus eligendi iusto. Maxime cumque harum sequi a tempore distinctio, laboriosam, eveniet, qui iure recusandae perferendis.</p>
          </div>
          <div>
            <h3>Item 5 Content</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid totam consequatur tenetur soluta recusandae, modi dignissimos ipsa numquam deleniti repudiandae et, voluptatibus assumenda odio, tempore iste necessitatibus nam magnam perspiciatis.</p>
          </div>
        </Grid>
      </Example>

      <Example heading="Grid Example with Small Cells">
        <Grid className="has-small-cells">
          <div>
            <h3>Item 1 Content</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat, pariatur, perferendis. Eos repellendus, qui corrupti sint. Repellendus accusamus dicta, dignissimos aliquid doloremque eos deserunt in iusto, porro laboriosam, quibusdam beatae.</p>
          </div>
          <div>
            <h3>Item 2 Content</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam consectetur, rem voluptas fugiat facere autem, saepe vero molestiae deserunt. Minus repellat tempora in, quisquam perspiciatis deleniti molestiae aut ratione numquam!</p>
          </div>
          <div>
            <h3>Item 3 Content</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, ex quibusdam dicta corporis vitae iure ipsum praesentium ratione pariatur, fugit molestias minima, explicabo, facere labore accusantium quo est tempore officia.</p>
          </div>
          <div>
            <h3>Item 4 Content</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore ipsam veritatis vitae assumenda, animi possimus eligendi iusto. Maxime cumque harum sequi a tempore distinctio, laboriosam, eveniet, qui iure recusandae perferendis.</p>
          </div>
          <div>
            <h3>Item 5 Content</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid totam consequatur tenetur soluta recusandae, modi dignissimos ipsa numquam deleniti repudiandae et, voluptatibus assumenda odio, tempore iste necessitatibus nam magnam perspiciatis.</p>
          </div>
        </Grid>
      </Example>

      <Example heading="Grid Example with Extra Small Cells">
        <Grid className="has-extra-small-cells">
          <div>
            <h3>Item 1 Content</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat, pariatur, perferendis. Eos repellendus, qui corrupti sint. Repellendus accusamus dicta, dignissimos aliquid doloremque eos deserunt in iusto, porro laboriosam, quibusdam beatae.</p>
          </div>
          <div>
            <h3>Item 2 Content</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam consectetur, rem voluptas fugiat facere autem, saepe vero molestiae deserunt. Minus repellat tempora in, quisquam perspiciatis deleniti molestiae aut ratione numquam!</p>
          </div>
          <div>
            <h3>Item 3 Content</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, ex quibusdam dicta corporis vitae iure ipsum praesentium ratione pariatur, fugit molestias minima, explicabo, facere labore accusantium quo est tempore officia.</p>
          </div>
          <div>
            <h3>Item 4 Content</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore ipsam veritatis vitae assumenda, animi possimus eligendi iusto. Maxime cumque harum sequi a tempore distinctio, laboriosam, eveniet, qui iure recusandae perferendis.</p>
          </div>
          <div>
            <h3>Item 5 Content</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid totam consequatur tenetur soluta recusandae, modi dignissimos ipsa numquam deleniti repudiandae et, voluptatibus assumenda odio, tempore iste necessitatibus nam magnam perspiciatis.</p>
          </div>
        </Grid>
      </Example>
    </Documentation>
  )
}
