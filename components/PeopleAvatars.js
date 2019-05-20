import React from 'react'
import styled, { css } from 'styled-components'

// Locals
import Space from './shared/Space'
import { mobile } from './style/mobile'
import { Wrapper, NarrowContainer } from './shared/Containers'
import { SectionHeading } from './shared/SectionHeading'
import { CirclePlus } from './vectors/CirclePlus'
import { ModalContext } from './modal/Context'
import { SectionLine } from './shared/SectionLine'

export const PeopleAvatars = () => (
  <NarrowContainer>
    <Space height={52} />

    <SectionLine />

    <Space height={52} />

    <StyledWrapper>
      <SectionHeading>
        <GrayColorText>There starts at time zones,</GrayColorText>
        <br />
        However, it’s about people.
      </SectionHeading>

      <Space height={28} />

      <Avatars>
        <Avatar src="/static/people/avatar1.svg" alt="Person avatar" />
        <Avatar src="/static/people/avatar2.svg" alt="Person avatar" />
        <Avatar src="/static/people/avatar3.svg" alt="Person avatar" />
        <Avatar src="/static/people/avatar4.svg" alt="Person avatar" />
        <Avatar src="/static/people/avatar5.svg" alt="Person avatar" />
        <Avatar src="/static/people/avatar6.svg" alt="Person avatar" />
        <Avatar src="/static/people/avatar7.svg" alt="Person avatar" />
        <Avatar src="/static/people/avatar8.svg" alt="Person avatar" />
        <Avatar src="/static/people/avatar9.svg" alt="Person avatar" />
        <ModalContext.Consumer>
          {({ setOpenState }) => (
            <CirclePlus onClick={() => setOpenState(true)} />
          )}
        </ModalContext.Consumer>
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
