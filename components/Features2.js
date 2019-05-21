import React from 'react'
import styled, { css } from 'styled-components'

// Locals
import Space from './shared/Space'
import { mobile } from './style/mobile'
import { Wrapper, NarrowContainer } from './shared/Containers'
import { SectionHeading } from './shared/SectionHeading'
import { SectionSubtitle } from './shared/SectionSubtitle'

import { Apps } from './vectors/features/Apps'
import { TimeZones } from './vectors/features/TimeZones'
import { EarthGlob } from './vectors/features/EarthGlob'
import { DayAndNight } from './vectors/features/DayAndNight'

export const Features2 = () => (
  <NarrowContainer>
    <Space height={72} />
    <StyledWrapper>
      <TeamStoryImage />

      <SectionData>
        <SectionHeading align="left">
          <GrayColorText>Like looking around the office. </GrayColorText>
          <br />
          Except that it’s better!
        </SectionHeading>
        <Space height={19} />

        <SectionSubtitle align="left" maxWidth={505}>
          Team Feed feature is built for teammates, not managers. It is the
          magical feed of your teammates in their work time. Automatically
          derived from projects they're working on and{' '}
          <span
            style={{ borderBottom: `1px dotted rgba(0,0,0,0.5)` }}
            title="It doesn't know all your apps, only apps like Figma, Sketch, Code editors, Asana or alike."
          >
            work-related apps
          </span>{' '}
          they're using, to name a few.
        </SectionSubtitle>

        <ItemsWrapper>
          <Item>
            <SvgWrapper>
              <Apps />
            </SvgWrapper>
            <ItemsText>
              Everyone works in <strong>their own way.</strong>
            </ItemsText>
          </Item>

          <Item>
            <SvgWrapper>
              <TimeZones />
            </SvgWrapper>
            <ItemsText>
              We work and finish at <strong>different hours.</strong>
            </ItemsText>
          </Item>

          <Item>
            <SvgWrapper>
              <EarthGlob />
            </SvgWrapper>
            <ItemsText>
              We <strong>travel</strong> to and live in{' '}
              <strong>many places.</strong>
            </ItemsText>
          </Item>

          <Item>
            <SvgWrapper>
              <DayAndNight />
            </SvgWrapper>
            <ItemsText>
              Sun comes up there <strong>later or sooner.</strong>
            </ItemsText>
          </Item>
        </ItemsWrapper>
      </SectionData>
    </StyledWrapper>
  </NarrowContainer>
)

const StyledWrapper = styled(Wrapper)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row-reverse;

  ${mobile(css`
    flex-direction: column;
  `)}
`

const GrayColorText = styled.span`
  color: #aec2d0;
`

const TeamStoryImage = styled.div`
  flex-shrink: 0;
  width: 100%;
  max-width: 567px;
  height: 448px;
  background: url(${require('../static/remoteWorker.png')});
  background-size: cover;
  background-position: center;

  ${mobile(css`
    width: calc(100% + ${p => p.theme.sideSpace * 2}px);
    margin-left: -${p => p.theme.sideSpace}px;
    margin-right: -${p => p.theme.sideSpace}px;
  `)}
`

const SectionData = styled.div`
  margin-right: 100px;

  ${mobile(css`
    margin-top: 30px;
    margin-right: 0;
  `)}
`

const ItemsWrapper = styled.div`
  margin-top: 36px;

  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: auto auto;
  grid-column-gap: 50px;
  grid-row-gap: 23px;

  ${mobile(css`
    grid-template-columns: auto;
    grid-template-rows: auto;
    grid-column-gap: 50px;
    grid-row-gap: 23px;
  `)}
`

const Item = styled.div`
  display: grid;
  grid-template-columns: 54px auto;
  grid-column-gap: 20px;
`

const ItemsText = styled.div`
  font-family: ${p => p.theme.fontText};
  font-size: ${p => p.theme.fontMedium18}px;
  line-height: 1.38;
  font-style: normal;
  font-weight: normal;
  letter-spacing: -0.01em;

  color: #282d30;
`

const SvgWrapper = styled.div``
