import React, { createContext, useState } from 'react'
import { Modal } from '.'

export const ModalContext = createContext(false)

export const ModalProvider = ({ children }) => {
  const [isOpen, setOpenState] = useState(false)
  const [email, setEmailState] = useState('')

  return (
    <ModalContext.Provider
      value={{ isOpen, setOpenState, email, setEmailState }}
    >
      {children}
      <Modal
        isOpen={isOpen}
        setOpenState={setOpenState}
        defaultEmail={email}
        setEmailState={setEmailState}
      />
    </ModalContext.Provider>
  )
}
