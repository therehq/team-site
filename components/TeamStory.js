import React from 'react'
import styled, { css } from 'styled-components'

// Locals
import Space from './shared/Space'
import { mobile } from './style/mobile'
import { Wrapper, NarrowContainer } from './shared/Containers'
import { SectionHeading } from './shared/SectionHeading'
import { SectionSubtitle } from './shared/SectionSubtitle'

export const TeamStory = () => (
  <NarrowContainer>
    <Space height={160} />
    <StyledWrapper>
      <SectionImage>
        <TeamStoryImage />

        <SectionImageTitle>For fully-distributed teams</SectionImageTitle>
      </SectionImage>
      <SectionData>
        <SectionSup>Team Story</SectionSup>
        <SectionHeading align="left" maxWidth={396}>
          Deeper team rapport. Beyond avatars.
        </SectionHeading>
        <Space height={16} />

        <SectionSubtitle align="left">
          There is particularly designed to convey co-presence. Team Story
          feature inteligently transfers the positive sense of working together
          in a team. It’s beyond plain avatars.
        </SectionSubtitle>
      </SectionData>
    </StyledWrapper>
  </NarrowContainer>
)

const StyledWrapper = styled(Wrapper)`
  display: flex;
  justify-content: space-between;
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
`

const SectionImageTitle = styled.span`
  margin-top: -15px;
  font-family: ${p => p.theme.fontText};
  font-size: 18px;
  font-style: italic;
  font-weight: normal;
  line-height: normal;

  color: rgba(0, 0, 0, 0.26);
`

const TeamStoryImage = styled.div`
  width: 523px;
  height: 387px;
  background: url('../static/teamStroy.png');
  background-size: cover;
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
