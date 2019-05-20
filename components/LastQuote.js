import React from 'react'
import styled, { css } from 'styled-components'

// Locals
import Space from './shared/Space'
import { mobile } from './style/mobile'
import { Wrapper, NarrowContainer } from './shared/Containers'
import { SectionHeading } from './shared/SectionHeading'
import { SectionSubtitle } from './shared/SectionSubtitle'
import { RequestAccess } from './shared/RequestAccess'

export const LastQuote = () => (
  <NarrowContainer>
    <Space height={124} />
    <StyledWrapper>
      <LargeQuote>
        <img
          src={require('../static/Chris.png')}
          alt="Chris Messina Portrait"
        />
        <div>
          <Space height={11} />
          <Quote>
            If you work on a distributed team, you owe it to yourself to check
            out There.
          </Quote>
          <Space height={9} />

          <div>
            <Name>Chris</Name>
            <Role>Hashtag inventor</Role>
          </div>
        </div>
      </LargeQuote>

      <Reserve>
        <SectionHeading align="left">Reserve your spot.</SectionHeading>
        <Space height={21} />

        <SectionSubtitle align="left">
          Get in line and reserve your team's spot today, as we will soon be
          available by invitation only.
        </SectionSubtitle>
        <Space height={20} />

        <RequestAccess />
        <Space height={18} />

        <Tip>
          <strong>Tip!</strong> Did you know There has “Jet lag notice” and
          whenever you travel it’s shown on your profile for 2 days?
        </Tip>
      </Reserve>
    </StyledWrapper>
  </NarrowContainer>
)

const StyledWrapper = styled(Wrapper)`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-column-gap: 120px;

  ${mobile(css`
    grid-template-columns: auto;
    grid-template-rows: auto;
    grid-row-gap: 70px;
    grid-column-gap: 0;
  `)}
`

const LargeQuote = styled.div`
  display: grid;
  grid-template-columns: 250px auto;
  grid-column-gap: auto;
  align-items: center;
  margin-left: -42px;

  @media (max-width: 700px) {
    grid-template-columns: auto;
    grid-column-gap: 0;
    align-content: center;
    justify-content: center;
    margin-left: -12px;
  }
`

const Quote = styled.div`
  position: relative;
  max-width: 331px;
  font-family: ${p => p.theme.fontText};
  font-size: ${p => p.theme.fontLarge24}px;
  line-height: 1.41;
  font-style: italic;
  font-weight: normal;

  color: #2c353c;

  :before {
    content: '“';
    position: absolute;
    left: -26px;
    top: 0;
    height: 18px;
    font-family: ${p => p.theme.fontText};
    font-style: normal;
    font-weight: normal;
    line-height: 1;
    font-size: 47px;

    color: #b3b7ba;
  }
`

const Q = styled.span`
  height: 18px;
  padding-right: 4px;

  display: inline-block;
  font-family: ${p => p.theme.fontText};
  font-size: 42px;
  line-height: 1;
  font-style: normal;
  font-weight: normal;
  overflow: hidden;

  color: #b3b7ba;
`

const Name = styled.span`
  margin-right: 8px;
  font-family: ${p => p.theme.fontText};
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 26px;

  color: #2c353c;
`

const Role = styled.span`
  font-family: ${p => p.theme.fontText};
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 23px;

  color: #8c96a4;
`

const Reserve = styled.div`
  max-width: 475px;

  ${mobile(css`
    display: flex;
    flex-direction: column;
    align-items: center;
    > * {
      text-align: center;
    }
  `)}
`

const Tip = styled.div`
  max-width: 395px;
  font-family: ${p => p.theme.fontText};

  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 1.35;

  color: #81878e;
`
