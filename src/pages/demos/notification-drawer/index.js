import React from 'react'
import './styles.scss'
import Drawer from '@components/Drawer'
import OverflowMenu from '@components/OverflowMenu'
import Accordion, {AccordionItem} from '@components/Accordion'
import Split from '@layouts/Split'

export default ({children, className = ''}) => {
  return (
    <div className={`demo-notification-drawer ${className}`}>
      <Drawer className="is-right" title="Notification Drawer">
        <Accordion>
          <AccordionItem title="Notification 1">
            <Split>
              <div>
                <i className="fas fa-info-circle"></i>
              </div>
              <div>
                <h5>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h5>
                <p>3/8/2018 | 6:40:15 AM</p>
              </div>
              <div>
                <OverflowMenu className="is-right-aligned">
                  <p>actions</p>
                </OverflowMenu>
              </div>
            </Split>
          </AccordionItem>
        </Accordion>
      </Drawer>
    </div>
  )
}
