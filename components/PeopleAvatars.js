import React from 'react'
import styled, { css } from 'styled-components'

// Locals
import Space from './shared/Space'
import { mobile } from './style/mobile'
import { Wrapper, NarrowContainer } from './shared/Containers'
import { SectionHeading } from './shared/SectionHeading'
import { CirclePlus } from './vectors/CirclePlus'

export const PeopleAvatars = () => (
  <NarrowContainer>
    <Space height={130} />

    <StyledWrapper>
      <SectionHeading>
        <GrayColorText>There starts at time zones, </GrayColorText>
        <br />
        However, it’s about people.
      </SectionHeading>

      <Space height={29} />

      <Avatars>
        <Avatar src="../static/people/avatar1.svg" />
        <Avatar src="../static/people/avatar2.svg" />
        <Avatar src="../static/people/avatar3.svg" />
        <Avatar src="../static/people/avatar4.svg" />
        <Avatar src="../static/people/avatar5.svg" />
        <Avatar src="../static/people/avatar6.svg" />
        <Avatar src="../static/people/avatar7.svg" />
        <Avatar src="../static/people/avatar8.svg" />
        <Avatar src="../static/people/avatar9.svg" />
        <CirclePlus />
      </Avatars>
    </StyledWrapper>
  </NarrowContainer>
)

const StyledWrapper = styled(Wrapper)`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

const GrayColorText = styled.span`
  color: #aec2d0;
`

const Avatar = styled.img``

const Avatars = styled.div`
  display: flex;
  justify-content: space-between;
  width: 702px;

  ${mobile(css`
    justify-content: space-around;
    width: 100%;
  `)}

  > * {
    transition: all 180ms ease-in-out;

    :hover {
      transform: scale(1.1, 1.1);
    }
  }
`
