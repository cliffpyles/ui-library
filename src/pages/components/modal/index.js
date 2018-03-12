import React from 'react'
import Documentation from '@system/Documentation'
import Example from '@system/Example'
import Modal, {ModalDialogHeader, ModalDialogBody, ModalDialogFooter} from '@components/Modal'

export default ({data, docs}) => {
  return (
    <Documentation className="is-modal-page">
      <Example heading="Modal" isViewport={true}>
        <Modal>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </Modal>
      </Example>
      <Example heading="Modal with Sections" isViewport={true}>
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
