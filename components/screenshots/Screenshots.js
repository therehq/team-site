import React from 'react'
import styled, { css } from 'styled-components'

// Locals
import Space from '../shared/Space'
import { Wrapper, NarrowContainer } from '../shared/Containers'
import { SectionHeading } from '../shared/SectionHeading'
import { Story } from '../vectors/icons/Story'
import { Schedule } from '../vectors/icons/Schedule'
import { Teammates } from '../vectors/icons/Teammates'
import { TimePlaces } from '../vectors/icons/TimePlaces'
import { SliderBg1 } from '../vectors/SliderBg1'

export const Screenshots = () => (
  <NarrowContainer>
    <StyledWrapper>
      <Space height={90} />
      <SectionHeading maxWidth={409}>
        Working remotely Quicker. Simpler. Closer.
      </SectionHeading>

      <Space height={28} />
      <SliderWrapper>
        <SideNav>
          <NavItem selected>
            <Story />
            <NavItemData selected>
              <Title selected>Today, Team Story</Title>
              <NavItemSubtitle>
                Look around the office! Get a sense of what’s going on in the
                team
              </NavItemSubtitle>
            </NavItemData>
          </NavItem>
          <NavItem>
            <Schedule />
            <NavItemData>
              <Title>Schedule</Title>
            </NavItemData>
          </NavItem>
          <NavItem>
            <Teammates />
            <NavItemData>
              <Title>Teammates</Title>
            </NavItemData>
          </NavItem>
          <NavItem>
            <TimePlaces />
            <NavItemData>
              <Title>Times, Places</Title>
            </NavItemData>
          </NavItem>
        </SideNav>
        <Slides>
          <SlideItem>
            <DesktopAppImage />
            <SliderBg1 />
          </SlideItem>
        </Slides>
      </SliderWrapper>
    </StyledWrapper>
  </NarrowContainer>
)

const StyledWrapper = styled(Wrapper)`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

const SliderWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`

const SideNav = styled.div`
  flex-shrink: 0;
  width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const NavItem = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 22px;
  cursor: pointer;

  ${p =>
    p.selected
      ? css``
      : css`
          span {
            display: none;
          }
        `}
`

const Title = styled.div`
  display: inline-block;
  padding-bottom: 5px;
  font-family: ${p => p.theme.fontText};
  font-size: ${p => p.theme.fontLarge21}px;
  font-style: normal;
  font-weight: 600;
  line-height: 1;

  color: ${p => (p.selected ? '#1C84FF' : '#415563')};
  border-bottom: 3px solid ${p => (p.selected ? '#1C84FF' : '#c9d0e2')};
  transition: all 200ms;

  :hover {
    border-bottom: 3px solid #1c84ff;
  }
`

const Slides = styled.div`
  flex-grow: 1;
`

const NavItemData = styled.div`
  max-width: 255px;
  margin-left: 12px;
`

const NavItemSubtitle = styled.span`
  margin-top: 13px;
  margin-bottom: 10px;
  display: inline-block;

  font-family: 'IBM Plex Sans';
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 21px;

  color: #3e454a;
`

const DesktopAppImage = styled.div`
  width: 668px;
  height: 334px;

  left: 50%;
  margin-left: -343px;
  top: 50%;
  margin-top: -167px;

  background-image: url('../static/Home@2x.jpg');
  background-size: cover;
  border-radius: 4px;

  box-shadow: 0px 16px 19px rgba(0, 0, 0, 0.09),
    0px 0px 12px rgba(0, 0, 0, 0.15);

  position: absolute;
`

const SlideItem = styled.div`
  position: relative;
  display: inline-block;
`
