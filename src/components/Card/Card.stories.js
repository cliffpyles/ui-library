import React from 'react';
import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';

import Card from './Card';

export const actions = {
  // exampleAction: action('exampleAction'),
};

storiesOf('Card', module)
  .add('default', () => (
    <Card>
      child content
    </Card>
  ));