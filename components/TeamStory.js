import React from 'react'
import styled, { css } from 'styled-components'

// Locals
import Space from './shared/Space'
import { mobile } from './style/mobile'
import { Wrapper, NarrowContainer } from './shared/Containers'
import { SectionHeading } from './shared/SectionHeading'
import { SectionSubtitle } from './shared/SectionSubtitle'
import { SectionLine } from './shared/SectionLine'

export const TeamStory = () => (
  <NarrowContainer>
    <Space height={72} />

    <StyledWrapper>
      <SectionImage>
        <TeamStoryImage />

        <SectionImageTitle>For fully-distributed teams</SectionImageTitle>
      </SectionImage>
      <SectionData>
        <SectionSup>Team Feed</SectionSup>
        <SectionHeading align="left" maxWidth={396}>
          Deeper team rapport. Beyond avatars.
        </SectionHeading>
        <Space height={16} />

        <SectionSubtitle align="left" maxWidth={495}>
          <strong>There</strong> is particularly designed to convey co-presence.
          Team Feed intelligently transfers the positive sense of working
          together in a team. It’s beyond plain avatars.
        </SectionSubtitle>
      </SectionData>
    </StyledWrapper>
  </NarrowContainer>
)

const StyledWrapper = styled(Wrapper)`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  ${mobile(css`
    flex-direction: column;
  `)}
`

const SectionImage = styled.div`
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  ${mobile(css`
    width: calc(100% + ${p => p.theme.sideSpace * 2}px);
    margin-left: -${p => p.theme.sideSpace}px;
    margin-right: -${p => p.theme.sideSpace}px;
  `)}
`

const SectionImageTitle = styled.span`
  margin-top: -25px;
  font-family: ${p => p.theme.fontText};
  font-size: 18px;
  font-style: italic;
  font-weight: normal;
  line-height: normal;

  color: rgba(0, 0, 0, 0.26);
`

const TeamStoryImage = styled.div`
  width: 100%;
  max-width: 523px;
  height: 387px;
  background: url(${require('../static/team-feed.png')});
  background-size: cover;
  background-position: center;
`

const SectionData = styled.div`
  margin-left: 100px;

  ${mobile(css`
    margin-top: 30px;
    margin-left: 0;
  `)}
`

const SectionSup = styled.span`
  font-family: ${p => p.theme.fontText};
  font-size: 28px;
  font-style: italic;
  font-weight: normal;
  line-height: 36px;
  color: #aec2d0;
`
