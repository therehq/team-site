import React from 'react'
import styled, { css } from 'styled-components'

// Locals
import { NarrowContainer, Wrapper } from './shared/Containers'
import { Space } from './shared/Space'
import { SectionSubtitle } from './shared/SectionSubtitle'
import { DefineEvents } from './vectors/features/DefineEvents'
import { TravelAnyWhere } from './vectors/features/TravelAnyWhere'
import { InstantlySetup } from './vectors/features/InstantlySetup'
import { AvailableAnywhere } from './vectors/features/AvailableAnywhere'
import { mobile } from './style/mobile'

export const Features = () => (
  <NarrowContainer>
    <Space height={82} />
    <StyledWrapper>
      <FeatureItem>
        <DefineEvents />
        <FeatureTitle maxWidth={282}>
          Who’s available? Define your work day.
        </FeatureTitle>
        <SectionSubtitle maxWidth={316} top={8}>
          Communicate your work time as you wish. No hard schedules, work hours
          are smart and flexible.
        </SectionSubtitle>
      </FeatureItem>

      <FeatureItem>
        <TravelAnyWhere />
        <FeatureTitle maxWidth={282}>
          Travel anywhere. Collaborate on the go.
        </FeatureTitle>
        <SectionSubtitle maxWidth={330} top={8}>
          Traveling across time zones is confusing for a team. We manage all
          that, whether you’re travelling now or in 2 weeks.
        </SectionSubtitle>
      </FeatureItem>

      <FeatureItem>
        <InstantlySetup />
        <FeatureTitle maxWidth={351}>
          Set up instantly.
          <br />
          Import from Slack or Twist.
        </FeatureTitle>
        <SectionSubtitle maxWidth={328} top={8}>
          Connect your Slack or Twist workspace in one click and start using
          There.
        </SectionSubtitle>
      </FeatureItem>

      <FeatureItem>
        <AvailableAnywhere />
        <FeatureTitle maxWidth={282}>
          Available anywhere. Even in your emails.
        </FeatureTitle>
        <SectionSubtitle maxWidth={328} top={8}>
          Install on macOS, Windows, Linux, and use on Slack, Twist or web apps.
          Works offline too.
        </SectionSubtitle>
      </FeatureItem>
    </StyledWrapper>
  </NarrowContainer>
)

const StyledWrapper = styled(Wrapper)`
  display: grid;
  grid-template-columns: repeat(2, 50%);
  grid-template-rows: repeat(2, auto);
  grid-row-gap: 100px;
  padding-left: 20px;
  padding-right: 20px;

  ${mobile(css`
    grid-template-columns: 100%;
    grid-template-rows: repeat(4, auto);
  `)}
`

const FeatureItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const FeatureTitle = styled.h2`
  margin: 0;
  margin-top: 22px;
  max-width: ${p => (p.maxWidth ? p.maxWidth : 282)}px;

  font-family: ${p => p.theme.fontTitle};
  font-size: ${p => p.theme.fontLarge32}px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  text-align: center;

  color: #2c353c;
`
