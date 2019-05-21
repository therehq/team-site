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

// Images
import ShotHome from '../../static/shots/home.jpg'
import ShotHome2x from '../../static/shots/home@2x.jpg'
import ShotTimeline from '../../static/shots/timeline.jpg'
import ShotTimeline2x from '../../static/shots/timeline@2x.jpg'
import ShotTeammate from '../../static/shots/teammate.jpg'
import ShotTeammate2x from '../../static/shots/teammate@2x.jpg'
import ShotTimeAndPlace from '../../static/shots/time-and-place.jpg'
import ShotTimeAndPlace2x from '../../static/shots/time-and-place@2x.jpg'
import ShotOffice from '../../static/shots/team-floor.jpg'
import ShotOffice2x from '../../static/shots/team-floor@2x.jpg'

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
                      src={tab.images[0]}
                      srcSet={`${tab.images[1]} 2x`}
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
                {/* <PoseGroup enterPose="shown" preEnterPose="hidden"> */}
                {tabs.map((tab, i) => (
                  <PosedDesktopAppImage
                    initialPose="hidden"
                    pose={i === activeTabInd ? 'shown' : 'hidden'}
                    key={tab.title}
                    style={{
                      maxWidth: tab.maxWidth,
                      maxHeight: tab.maxHeight
                    }}
                  >
                    <img
                      src={tab.images[0]}
                      srcSet={`${tab.images[1]} 2x`}
                      alt={tab.title}
                    />
                  </PosedDesktopAppImage>
                ))}
                {/* </PoseGroup> */}
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
    images: [ShotHome, ShotHome2x],
    maxWidth: 668,
    maxHeight: 334,
    IconComponent: TeamHome
  },
  {
    title: 'Schedule',
    description: `We set out to make the most beautiful scheduling experience ever made.`,
    images: [ShotTimeline, ShotTimeline2x],
    maxWidth: 698,
    maxHeight: 390,
    IconComponent: Schedule
  },
  {
    title: `Teammates`,
    description: `A mix of quick to digest plans and smart suggestions for every colleague.`,
    images: [ShotTeammate, ShotTeammate2x],
    maxWidth: 668,
    maxHeight: 334,
    IconComponent: Teammate
  },
  {
    title: `Time and Places`,
    description: `Interactive. Visual. Quick. Exceptionally better than Googling.`,
    images: [ShotTimeAndPlace, ShotTimeAndPlace2x],
    maxWidth: 668,
    maxHeight: 334,
    IconComponent: TimeAndPlace
  },
  {
    title: `Office`,
    description: `Your office storey. Fastest way to have a look around the team.`,
    images: [ShotOffice, ShotOffice2x],
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

  ${mobile(css`
    padding-bottom: 40px;
  `)}
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
  transform: translateY(-15px);
  display: none;
  position: absolute;
  z-index: 1;

  ${mobile(
    css`
      top: 10px;
      position: relative;
    `
  )}

  img {
    width: 100%;
    display: block;
  }
`

const PosedDesktopAppImage = posed(DesktopAppImage)({
  shown: {
    y: 0,
    opacity: 1,
    applyAtStart: { display: 'block', zIndex: 3 },
    applyAtEnd: { opacity: 1 }
  },
  hidden: {
    applyAtEnd: { display: 'none' },
    opacity: 0.2,
    y: -20,
    transition: {
      duration: 100,
      ease: 'easeOut'
    }
  }
})

const BgWrapper = styled.div`
  max-width: 750px;
  margin-left: auto;
  width: 100%;
  height: auto;
  padding-bottom: 20px;
  background: url('../../static/bgSlider.svg') no-repeat;
  background-size: 100% auto;

  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`

const SlideItem = styled.div`
  position: relative;
  display: inline-flex;
`
