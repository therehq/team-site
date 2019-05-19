import React, { useContext } from 'react'
import styled from 'styled-components'
import { Dialog, DialogOverlay, DialogContent } from '@reach/dialog'
import { RequestAccessForm } from './RequestAccessForm'

import '@reach/dialog/styles.css'

export const Modal = ({
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

export const StyledDialog = styled(DialogContent)`
  width: 555px;
  /* max-height: 576px; */
  padding: 35px 40px;
  background: #fff;
  border-radius: 3px;
  border: 1px solid #ccc;
  outline: none;
`

export const StyledDialogOverlay = styled(DialogOverlay)`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 10;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: auto;

  display: flex;
  justify-content: center;
  align-items: center;
`
