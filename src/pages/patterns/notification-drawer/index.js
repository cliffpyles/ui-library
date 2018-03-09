import React from 'react'
import Documentation from '@siteComponents/Documentation'
import Example from '@siteComponents/Example'
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
