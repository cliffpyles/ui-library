import React from 'react'
import Documentation from '@systemComponents/Documentation'
import Example from '@systemComponents/Example'
import MediaObject, {
  MediaObjectLeft,
  MediaObjectRight,
  MediaObjectContent
} from '@layouts/MediaObject'

export default () => {
  return (
    <Documentation className="is-layout-documentation">
      <Example heading="Media Object">
        <MediaObject>
          <MediaObjectLeft>
            <p>Left</p>
          </MediaObjectLeft>
          <MediaObjectContent>
            <p>Content</p>
          </MediaObjectContent>
          <MediaObjectRight>
            <p>Right</p>
          </MediaObjectRight>
        </MediaObject>
      </Example>
    </Documentation>
  )
}
