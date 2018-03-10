import React from 'react'
import Documentation from '@systemComponents/Documentation'
import Example from '@systemComponents/Example'
import Modal, {ModalDialogHeader, ModalDialogBody, ModalDialogFooter} from '@components/Modal'

export default () => {
  return (
    <Documentation className="is-modal-page">
      <Example heading="Modal">
        <Modal>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </Modal>
      </Example>
      <Example heading="Modal with Sections">
        <Modal>
          <ModalDialogHeader>
            <p>Header Content</p>
          </ModalDialogHeader>
          <ModalDialogBody>
            <p>Body Content</p>
          </ModalDialogBody>
          <ModalDialogFooter>
            <p>Footer Content</p>
          </ModalDialogFooter>
        </Modal>
      </Example>
    </Documentation>
  )
}
