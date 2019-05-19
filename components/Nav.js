import React, { useContext } from 'react'
import NextLink from 'next/link'
import styled from 'styled-components'

// Locals
import ThereLogo from '../static/footer/ThereLogoBlue.svg'
import { Wrapper } from './shared/Containers'
import { ModalContext } from './modal/Context'

export const Nav = () => {
  const { setOpenState } = useContext(ModalContext)
  return (
    <StyledWrapper>
      <LogoLink href="/">
        <ThereLogo />
      </LogoLink>
      <RequestButton onClick={() => setOpenState(true)}>
        Request Access
      </RequestButton>
    </StyledWrapper>
  )
}

const StyledWrapper = styled(Wrapper)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const RequestButton = styled.button`
  font-family: ${p => p.theme.fontText};
  font-size: ${p => p.theme.fontMedium18}px;
  font-style: normal;
  font-weight: 600;
  line-height: 0.86;
  border-radius: 3px;
  user-select: none;
  transition: background 140ms ease-in-out;
  padding: 8px 7px;
  color: ${p => p.theme.black1};
  cursor: pointer;
  outline: none;
  border: none;

  &:hover {
    background: rgba(55, 53, 47, 0.08);
    color: #333;
  }

  &:active {
    background: rgba(55, 53, 47, 0.18);
    color: #222;
  }
`

const LogoLink = styled.a`
  &:hover {
    filter: drop-shadow(1px 2px 0px rgba(0, 0, 0, 0.1));
  }
`
