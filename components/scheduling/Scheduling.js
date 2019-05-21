import React from 'react'
import styled, { css } from 'styled-components'

// Locals
import { NarrowContainer, Wrapper } from '../shared/Containers'
import { Space } from '../shared/Space'
import { SectionHeading } from '../shared/SectionHeading'
import { SectionSubtitle } from '../shared/SectionSubtitle'
import { StockPhotos } from './StockPhotos'
import { UnderSignSmall } from '../shared/UnderSignSmall'
import { QuoteBox } from '../shared/QuoteBox'
import { mobile } from '../style/mobile'

export const Scheduling = () => (
  <NarrowContainer style={{ overflow: 'visible' }}>
    <Space height={86} />

    <StyledWrapper>
      <StockPhotosWrapper>
        <StockPhotos />
      </StockPhotosWrapper>

      <SectionBox>
        <SectionDetails>
          <SectionHeading align="left">
            Brilliant <UnderSignSmall>scheduling</UnderSignSmall>. Ideal for
            everyone.
          </SectionHeading>
          <SectionSubtitle align="left" top={14}>
            Be brilliant with people’s timeline. <strong>There</strong>{' '}
            considers work time, travels, times off, and habits for the perfect
            time for everyone.
          </SectionSubtitle>
          <SectionSubtitle align="left" top={10}>
            It’s the sweet spot between bare time zone apps, and the calendar’s
            schedulers which aren’t built for remote-first teams.
          </SectionSubtitle>
        </SectionDetails>
      </SectionBox>

      <SectionBox>
        <QuoteBox
          quote="This is absolutely brilliant. As an investor in companies like Remote Year and WeWork with massive, distributed teams, this is a no-brainer."
          image={require('../../static/JesseMiddleton.jpg')}
          name="Jesse Middleton"
          status="Co-Founder, WeWork Labs"
          type="largeBox"
        />
      </SectionBox>
    </StyledWrapper>
  </NarrowContainer>
)

const StyledWrapper = styled(Wrapper)`
  display: grid;
  grid-template-columns: 33% 34% 33%;
  justify-content: space-between;
  align-items: flex-start;

  ${mobile(css`
    grid-template-columns: 100%;
    grid-template-rows: auto auto auto;
    justify-content: center;
    align-items: center;
    align-content: center;
  `)}
`

const SectionDetails = styled.div`
  max-width: 357px;

  ${mobile(css`
    * {
      text-align: center;
    }
  `)}
`

const StockPhotosWrapper = styled.div`
  direction: rtl;
  margin-right: 80px;

  ${mobile(css`
    margin-right: -${p => p.theme.sideSpace}px;
    margin-left: -${p => p.theme.sideSpace}px;
    display: flex;
    justify-content: center;
    overflow: hidden;
    max-width: 100vw;
  `)}
`

const SectionBox = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 50px;
`
