import React from 'react'
import Documentation from '@systemComponents/Documentation'
import Example from '@systemComponents/Example'
import NotificationDrawer from '@patterns/NotificationDrawer'

export default () => {
  return (
    <Documentation className="is-notification-drawer-documentation">
      <Example heading="NotificationDrawer Example">
        <NotificationDrawer />
      </Example>
    </Documentation>
  )
}
