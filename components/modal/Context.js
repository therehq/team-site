import React, { createContext, useState } from 'react'
import { Modal } from '.'

export const ModalContext = createContext(false)

export const ModalProvider = ({ children }) => {
  const [isOpen, setOpenState] = useState(false)

  return (
    <ModalContext.Provider value={{ isOpen, setOpenState }}>
      {children}
      <Modal isOpen={isOpen} setOpenState={setOpenState} />
    </ModalContext.Provider>
  )
}
