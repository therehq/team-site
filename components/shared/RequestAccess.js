import React, { useContext } from 'react'
import styled, { css } from 'styled-components'

// local
import { ModalContext } from '../modal/Context'
import { RequestAccessForm } from '../modal'
import { mediaMaxWidth } from '../style/mobile'

export const RequestAccess = () => {
  const { isOpen, setOpenState, setEmailState } = useContext(ModalContext)

  return (
    <Wrapper>
      <InputBox
        type="text"
        name="email"
        placeholder="Your email"
        onChange={e => setEmailState(e.target.value)}
      />
      <RequestButton onClick={() => setOpenState(true)}>
        Request Access
      </RequestButton>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: auto;
  height: 40px;
  display: inline-flex;
  justify-content: space-between;
  align-items: center;

  ${mediaMaxWidth(500)(css`
    display: flex;
    width: 100%;
    flex-direction: column;
    height: auto;
  `)};

  background: #ffffff;
  border: 1px solid #699ad4;
  box-sizing: border-box;
  border-radius: 3px;
`

const RequestButton = styled.button`
  padding: 0px 10px 0 10px;
  height: 40px;
  border: none;
  outline: none;
  white-space: nowrap;

  font-family: ${p => p.theme.fontText};
  font-style: normal;
  text-align: center;
  font-weight: 600;
  font-size: 16px;
  line-height: 1.125;
  color: #ffffff;
  display: block;
  margin-right: 0;

  ${mediaMaxWidth(500)(css`
    width: 100%;
    height: 40px;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  `)};

  background: #1c84ff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.09);
  border-radius: 0px 3px 3px 0px;
  cursor: pointer;
  transition: 200ms;

  :hover {
    background: #0071f7;
  }
`

const InputBox = styled.input`
  margin-left: 15px;
  display: block;
  width: 220px;

  ${mediaMaxWidth(500)(css`
    padding-left: 12px;
    margin-left: 0;
    width: 100%;
    height: 40px;
    border-radius: 3px;
  `)};

  border: none;
  outline: none;
  font-family: ${p => p.theme.fontText};
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 1.38;

  color: #9fa2aa;
`
