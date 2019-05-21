import React from 'react'
import styled, { css } from 'styled-components'

// Locals
import { NarrowContainer, Wrapper } from './shared/Containers'
import { Nav } from './Nav'
import { Space } from './shared/Space'
import { LaptopSet } from './vectors/LaptopSet'
import { SectionHeading } from './shared/SectionHeading'
import { SectionSubtitle } from './shared/SectionSubtitle'
import { RequestAccess } from './shared/RequestAccess'
import { TopShare } from './TopShare'
import { UnderSign } from './shared/UnderSign'
import { mobile } from './style/mobile'

export const Header = () => (
  <NarrowContainer>
    <Space height={46} />
    <Nav />

    <Space height={62} />
    <StyledWrapper>
      <LaptopSet />

      <Space height={50} />
      <SectionHeading smallOnMobile>
        The base for collaborating clearly & smoothly in remote teams
      </SectionHeading>

      <Space height={23} />
      <SectionSubtitle>
        Schedule a meeting. Who’s asleep? Who’s on holidays? What’s the team
        doing right now? When will this coworker be back? And more. Sign up for
        early access.
      </SectionSubtitle>

      <Space height={33} />
      <RequestAccess />

      <Space height={52} />
      <TopShare />

      <Space height={152} />
      <SectionHeading maxWidth={410}>
        Rebuilt from scratch. For <UnderSign> remote-first teams.</UnderSign>
      </SectionHeading>

      <Space height={23} />
      <SectionSubtitle>
        The age of remote-first companies has unique requirements.{' '}
        <strong>There</strong> is the missing half of our communication tools. A
        new paradigm for helping with scheduling and time differences. Providing
        the foundation to work together remotely, smoothly and closely.
      </SectionSubtitle>
      <Space height={114} />
    </StyledWrapper>
  </NarrowContainer>
)

const StyledWrapper = styled(Wrapper)`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`
