import React from 'react'
import { RequestAccessForm } from './RequestAccessForm'
import { StyledDialog, StyledDialogOverlay } from '.'

export const RequestAccessModal = ({
  isOpen,
  setOpenState,
  defaultEmail,
  setEmailState
}) => (
  <StyledDialogOverlay isOpen={isOpen} onDismiss={() => setOpenState(false)}>
    <StyledDialog>
      <div>
        <RequestAccessForm
          setOpenState={setOpenState}
          defaultEmail={defaultEmail}
          setEmailState={setEmailState}
        />
      </div>
    </StyledDialog>
  </StyledDialogOverlay>
)
