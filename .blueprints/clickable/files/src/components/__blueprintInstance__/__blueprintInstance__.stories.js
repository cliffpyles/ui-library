import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import {{blueprintInstance}} from './{{blueprintInstance}}';

export const actions = {
  onClick: action('onClick'),
};

storiesOf('{{blueprintInstance}}', module)
  .add('default', () => (
    <{{blueprintInstance}} {...actions}>
      {{blueprintInstance}}
    </{{blueprintInstance}}>
  ));