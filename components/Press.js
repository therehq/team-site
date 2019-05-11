import React from 'react'
import styled, { css } from 'styled-components'

// Locals
import Space from './shared/Space'
import { mobile } from './style/mobile'
import { Wrapper, NarrowContainer } from './shared/Containers'
import CssTricks from '../static/press/cssTricks.svg'
import ProductHunt from '../static/press/producthunt.svg'
import GoldenKitty from '../static/press/goldenKitty.svg'
import DailyTeck from '../static/press/dailyteck.svg'
import Tnw from '../static/press/tnw.svg'

export const Press = () => (
  <NarrowContainer>
    <Space height={194} />
    <StyledWrapper>
      <Title>
        <strong>Featured by</strong> a variety of{' '}
        <strong>the most reputable</strong> sources
      </Title>
      <PressWrapper>
        <PressItem href="#">
          <ProductHunt />{' '}
        </PressItem>

        <PressItem href="#">
          <GoldenKitty />{' '}
        </PressItem>

        <PressItem href="#" noLink>
          <Tnw />{' '}
        </PressItem>

        <PressItem href="#" noLink>
          <CssTricks />{' '}
        </PressItem>

        <PressItem href="#" noLink>
          <DailyTeck />{' '}
        </PressItem>
      </PressWrapper>
    </StyledWrapper>
  </NarrowContainer>
)

const StyledWrapper = styled(Wrapper)``

const Title = styled.h2`
  margin: 0;

  font-family: ${p => p.theme.fontText};
  font-size: ${p => p.theme.fontLarge21}px;
  font-style: normal;
  font-weight: normal;
  line-height: 1.28;
  text-align: center;

  color: #282d30;
`

const PressWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 33px;

  @media (max-width: 800px) {
    flex-direction: column;
  }
`

const PressItem = styled.a`
  margin-left: 53px;
  opacity: 0.5;
  transition: all 300ms;
  cursor: ${p => (p.noLink ? 'none' : 'pointer')};
  :hover {
    opacity: 1;
  }

  :first-child {
    margin-left: 0;
  }

  @media (max-width: 800px) {
    margin-left: 0;
    margin-top: 20px;
  }
`
