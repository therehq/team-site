import React, { useState } from 'react'
import styled from 'styled-components'

// Locals
import { Container, Wrapper } from '../shared/Containers'
import { Space } from '../shared/Space'
import { SectionSubtitle } from '../shared/SectionSubtitle'
import Spectrum from '../vectors/logos/Spectrum'
import Elastic from '../vectors/logos/Elastic'
import Dribbble from '../vectors/logos/Dribbble'
import Toggle from '../vectors/logos/Toggle'
import Shopify from '../vectors/logos/Shopify'
import HelpScout from '../vectors/logos/HelpScout'
import Gatsby from '../vectors/logos/Gatsby'
import { Stackoverflow } from '../vectors/logos/Stackoverflow'
import { Balsamiq } from '../vectors/logos/Balsamiq'
import { Automatic } from '../vectors/logos/Automatic'
import { Invistion } from '../vectors/logos/Invistion'

import { ProductHunt } from '../vectors/logos/ProductHunt'
import { Mozilla } from '../vectors/logos/Mozilla'
import { Auth0 } from '../vectors/logos/Auth0'
import { Discourse } from '../vectors/logos/Discourse'
import { Doist } from '../vectors/logos/Doist'

import { WeWork } from '../vectors/logos/WeWork'
import { Zeit } from '../vectors/logos/Zeit'
import { Loom } from '../vectors/logos/Loom'
import { Zapier } from '../vectors/logos/Zapier'
import { GoDaddy } from '../vectors/logos/GoDaddy'
import { Atlassian } from '../vectors/logos/Atlassian'
import { TransferWise } from '../vectors/logos/TransferWise'
import { BackgroundSlider } from './BackgroundSlider'
import { Tooltip } from '../shared/Tooltip'

export const OurCustomers = () => (
  <StyledContainer>
    <SectionSubtitle>
      People from the <strong>most renowned distributed teams</strong> are using{' '}
      <strong>There</strong> <WhichThere />
    </SectionSubtitle>

    <Space height={45} />
    <BackgroundSlider duration={35}>
      <LogoWrapper>
        <Spectrum />
        <Elastic />
        <Dribbble />
        <Toggle />
        <Shopify />
        <HelpScout />
        <Gatsby />
        <Invistion />
        <Automatic />
        <Balsamiq />
      </LogoWrapper>
    </BackgroundSlider>

    <Space height={52} />
    <BackgroundSlider duration={45}>
      <LogoWrapper>
        <ProductHunt />
        <Mozilla />
        <Auth0 />
        <Discourse />
        <Doist />
        <WeWork />
        <Zeit />
        <Loom />
        <Zapier />
        <GoDaddy />
        <Atlassian />
        <TransferWise />
      </LogoWrapper>
    </BackgroundSlider>
  </StyledContainer>
)

const StyledContainer = styled(Container)`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding-top: 36px;
  padding-bottom: 36px;

  background: radial-gradient(
      ellipse 100% 231px at 50.03% -70%,
      rgba(79, 82, 87, 0.4) 0%,
      rgba(255, 255, 255, 0) 100%
    ),
    #fafafa;
  border-radius: 8px;
`

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  opacity: 0.7;

  svg {
    margin-right: 65px;
  }
`

// -------------------------
export const WhichThere = () => {
  const [show, setOpen] = useState(false)
  return (
    <HelpWrapper
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <HelpIcon>?</HelpIcon>
      {show && <Tooltip bottomCenter>Our MVP for There 1</Tooltip>}
    </HelpWrapper>
  )
}

const HelpWrapper = styled.span`
  position: relative;
  height: 16px;
  width: 16px;
  margin-left: -6px;
  display: inline-block;
`

const HelpIcon = styled.span`
  font-size: 0.8em;
  line-height: 0;
  font-weight: 600;
  cursor: default;
  vertical-align: super;
  color: #999;

  &:hover {
    color: #555;
  }
`
