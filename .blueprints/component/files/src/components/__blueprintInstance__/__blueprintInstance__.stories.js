import React from 'react';
import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';

import {{blueprintInstance}} from './{{blueprintInstance}}';

export const actions = {
  // exampleAction: action('exampleAction'),
};

storiesOf('{{blueprintInstance}}', module)
  .add('default', () => (
    <{{blueprintInstance}}>
      child content
    </{{blueprintInstance}}>
  ));