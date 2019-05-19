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
    <Space height={160} />
    <StyledWrapper>
      <FeatureTitle>Loved by people and featured in media.</FeatureTitle>
      <PressWrapper>
        <PressItemA href="https://producthunt.com/posts/there" target="_blank">
          <ProductHunt />
        </PressItemA>

        <PressItem>
          <GoldenKitty />
        </PressItem>

        <PressItem>
          <Tnw />
        </PressItem>

        <PressItem>
          <CssTricks />
        </PressItem>

        <PressItem>
          <DailyTeck />
        </PressItem>
      </PressWrapper>
    </StyledWrapper>
  </NarrowContainer>
)

const StyledWrapper = styled(Wrapper)``

const PressWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 33px;

  @media (max-width: 800px) {
    flex-direction: column;
  }
`

const pressItem = css`
  margin-left: 50px;
  opacity: 0.6;

  &:first-child {
    margin-left: 0;
  }

  @media (max-width: 800px) {
    margin-left: 0;
    margin-top: 20px;
  }
`

const PressItem = styled.div`
  ${pressItem}
`

const PressItemA = styled.a`
  ${pressItem}
`

const FeatureTitle = styled.h2`
  margin: 0 auto;
  font-family: ${p => p.theme.fontTitle};
  font-size: ${p => p.theme.fontLarge32}px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  text-align: center;

  color: #2c353c;
`
