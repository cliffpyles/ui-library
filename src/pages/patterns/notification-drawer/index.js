import React from 'react'
import Documentation from '@system/Documentation'
import Example from '@system/Example'
import NotificationDrawer from '@patterns/NotificationDrawer'

export default ({data, docs}) => {
  return (
    <Documentation className="is-notification-drawer-documentation">
      <Example heading="NotificationDrawer Example">
        <NotificationDrawer />
      </Example>
    </Documentation>
  )
}
