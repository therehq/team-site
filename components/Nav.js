import React from 'react'
import NextLink from 'next/link'
import styled from 'styled-components'

// Locals
import { Wrapper } from './shared/Containers'
import { There } from './vectors/logos/There'

export const Nav = () => (
  <StyledWrapper>
    <There />
    <NextLink>
      <RequestButton href="#">Request Access</RequestButton>
    </NextLink>
  </StyledWrapper>
)

const StyledWrapper = styled(Wrapper)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const RequestButton = styled.a`
  font-family: ${p => p.theme.fontText};
  font-size: ${p => p.theme.fontMedium18}px;
  font-style: normal;
  font-weight: 600;
  line-height: 0.86;
  transition: 50ms all;

  color: ${p => p.theme.black1};

  &:hover {
    padding-right: 5px;
    color: #333;
  }
`
