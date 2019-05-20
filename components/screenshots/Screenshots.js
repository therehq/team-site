import React, { useState } from 'react'
import styled, { css, keyframes } from 'styled-components'
import posed, { PoseGroup } from 'react-pose'

// Locals
import Space from '../shared/Space'
import { Wrapper, NarrowContainer } from '../shared/Containers'
import { SectionHeading } from '../shared/SectionHeading'
import { mobile } from '../style/mobile'
import Office from './icons/Office'
import Teammate from './icons/Teammate'
import Schedule from './icons/Schedule'
import TimeAndPlace from './icons/TimeAndPlace'
import TeamHome from './icons/TeamHome'

export const Screenshots = () => {
  const [activeTabInd, setActiveTab] = useState(0)
  const activeTab = tabs[activeTabInd]

  return (
    <NarrowContainer>
      <StyledWrapper>
        <Space height={72} />
        <SectionHeading maxWidth={409}>
          Working remotely Quicker. Simpler. Closer.
        </SectionHeading>

        <Space height={24} />
        <SliderWrapper>
          <SideNav>
            {tabs.map(({ IconComponent, title, description, ...tab }, i) => {
              const isActive = activeTabInd === i
              return (
                <NavItem selected={isActive} onClick={() => setActiveTab(i)}>
                  <IconComponent active={isActive} />
                  <NavItemData selected={isActive}>
                    <Title selected={isActive}>{title}</Title>
                    <PosedNavItemSubtitle pose={isActive ? 'active' : 'hidden'}>
                      {description}
                    </PosedNavItemSubtitle>
                    <img
                      src={`/static/shots/${tab.imageFileName}.jpg`}
                      srcSet={`/static/shots/${tab.imageFileName}@2x.jpg 2x`}
                      style={hiddenImage}
                    />
                  </NavItemData>
                </NavItem>
              )
            })}
          </SideNav>
          <Slides>
            <SlideItem>
              <BgWrapper>
                <PoseGroup enterPose="shown" preEnterPose="hidden">
                  <PosedDesktopAppImage
                    key={activeTab.title}
                    style={{
                      maxWidth: activeTab.maxWidth,
                      maxHeight: activeTab.maxHeight
                    }}
                  >
                    <img
                      src={`/static/shots/${activeTab.imageFileName}.jpg`}
                      srcSet={`/static/shots/${
                        activeTab.imageFileName
                      }@2x.jpg 2x`}
                    />
                  </PosedDesktopAppImage>
                </PoseGroup>
              </BgWrapper>
            </SlideItem>
          </Slides>
        </SliderWrapper>
      </StyledWrapper>
    </NarrowContainer>
  )
}

const tabs = [
  {
    title: 'Today, Team Feed',
    description: `Look around the office! Get a sense of what’s going on in the team`,
    imageFileName: 'home',
    maxWidth: 668,
    maxHeight: 334,
    IconComponent: TeamHome
  },
  {
    title: 'Schedule',
    description: `We set out to make the most beautiful scheduling experience ever made.`,
    imageFileName: 'timeline',
    maxWidth: 698,
    maxHeight: 390,
    IconComponent: Schedule
  },
  {
    title: `Teammates`,
    description: `A mix of quick to digest plans and smart suggestions for every colleague.`,
    imageFileName: 'teammate',
    maxWidth: 668,
    maxHeight: 334,
    IconComponent: Teammate
  },
  {
    title: `Time and Places`,
    description: `Interactive. Visual. Quick. Exceptionally better than Googling.`,
    imageFileName: 'time-and-place',
    maxWidth: 668,
    maxHeight: 334,
    IconComponent: TimeAndPlace
  },
  {
    title: `Office`,
    description: `Your office storey. Fastest way to have a look around the team.`,
    imageFileName: 'team-floor',
    maxWidth: 689,
    maxHeight: 381,
    IconComponent: Office
  }
]

const hiddenImage = {
  display: 'none',
  width: 1,
  height: 1,
  opacity: 0,
  position: 'absolute'
}

const StyledWrapper = styled(Wrapper)`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

const SliderWrapper = styled.div`
  width: 100%;
  min-height: 470px;
  display: flex;
  justify-content: space-between;

  ${mobile(css`
    flex-direction: column;
  `)}
`

const SideNav = styled.div`
  flex-shrink: 0;
  width: 400px;
  padding-left: 32px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const NavItem = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 12px;
  cursor: pointer;

  ${p =>
    !p.selected &&
    css`
      span {
        display: none;
      }
    `}
`

const Title = styled.div`
  display: inline-block;
  padding-bottom: 5px;
  font-family: ${p => p.theme.fontTitle};
  font-size: ${p => p.theme.fontLarge24}px;
  font-style: normal;
  font-weight: 800;
  line-height: 0.9;
  margin-bottom: 13px;

  color: ${p => (p.selected ? '#1C84FF' : '#415563')};
  border-bottom: 3px solid ${p => (p.selected ? '#1C84FF' : '#c9d0e2')};
  transition: all 200ms;

  :hover {
    color: #1c84ff;
    border-bottom: 3px solid #1c84ff;
  }
`

const Slides = styled.div`
  flex-grow: 1;
  display: grid;
  justify-items: stretch;
`

const NavItemData = styled.div`
  max-width: 255px;
  margin-left: 12px;
`

const NavItemSubtitle = styled.div`
  /* initial pose */
  overflow: hidden;
  height: 0;

  font-family: ${p => p.theme.fontText};
  font-style: normal;
  font-weight: normal;
  font-size: ${p => p.theme.fontMedium18}px;
  line-height: 1.35;

  color: #3e454a;
`

const PosedNavItemSubtitle = posed(NavItemSubtitle)({
  active: {
    height: 'auto',
    opacity: 1
  },
  hidden: { height: 1, opacity: 0.5 }
})

const DesktopAppImage = styled.div`
  background-size: cover;
  border-radius: 4px;
  box-shadow: 0px 16px 19px rgba(0, 0, 0, 0.09),
    0px 0px 12px rgba(0, 0, 0, 0.15);
  overflow: hidden;
  opacity: 0;

  img {
    width: 100%;
    display: block;
  }
`

const PosedDesktopAppImage = posed(DesktopAppImage)({
  shown: {
    y: 0,
    opacity: 1
  },
  hidden: { opacity: 0.85, y: -15 }
})

const BgWrapper = styled.div`
  max-width: 760px;
  width: 100%;
  height: 100%;
  background: url('../../static/bgSlider.svg') no-repeat;
  background-size: 100% auto;

  display: flex;
  align-items: center;
  justify-content: center;
`

const SlideItem = styled.div`
  position: relative;
  display: inline-flex;
`
