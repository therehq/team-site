import React, { createContext, useState } from 'react'
import { Modal } from '.'

export const ModalContext = createContext(false)

export const ModalProvider = ({ children }) => {
  const [isOpen, setOpenState] = useState(false)
  const [email, setEmailState] = useState('')
  const [subscribed, setSubscribedState] = useState(false)
  const [questioner, setQuestionerState] = useState(false)

  return (
    <ModalContext.Provider
      value={{
        isOpen,
        setOpenState,
        email,
        setEmailState,
        subscribed,
        setSubscribedState,
        questioner,
        setQuestionerState
      }}
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
