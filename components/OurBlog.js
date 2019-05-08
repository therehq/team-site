import React from 'react'
import styled from 'styled-components'

// Locals
import { Space } from './shared/Space'
import { Container } from './shared/Containers'
import { SectionHeading } from './shared/SectionHeading'
import { ArrowRight } from './vectors/ArrowRight'
import HikingTraveller from '../static/hikingTraveller.svg'

export const OurBlog = () => (
  <StyledContainer>
    <Sup>from our blog</Sup>

    <SectionHeading maxWidth={770}>
      There 1: From early concept to facilitating collaboration for all remote
      teams
    </SectionHeading>

    <Space height={28} />

    <div>
      <HikingTraveller />
    </div>

    <Space height={33} />

    <LargeButton href="#">
      <span>Continue Reading</span> <ArrowRight />
    </LargeButton>
  </StyledContainer>
)

const StyledContainer = styled(Container)`
  margin-top: 138px;
  min-height: 580px;

  display: flex;
  align-items: center;
  flex-direction: column;
  /* justify-content: center; */

  padding-top: 53px;
  padding-bottom: 36px;

  background: radial-gradient(
      ellipse 100% 231px at 50.03% -70%,
      rgba(79, 82, 87, 0.4) 0%,
      rgba(255, 255, 255, 0) 100%
    ),
    #fafafa;
  border-radius: 8px;
`

const Sup = styled.span`
  margin-bottom: 6px;

  font-family: ${p => p.theme.fontText};
  font-size: ${p => p.theme.fontMedium18}px;
  font-style: normal;
  font-weight: normal;
  line-height: 1.16;
  text-align: center;
  letter-spacing: 0.02em;
  text-transform: uppercase;

  color: #93989b;
`

const LargeButton = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 201px;
  height: 45px;

  background: rgba(125, 131, 146, 0.08);
  border-radius: 34px;

  font-family: ${p => p.theme.fontText};
  font-size: ${p => p.theme.fontMedium18}px;
  font-style: normal;
  font-weight: normal;
  line-height: 1.38;
  text-transform: capitalize;
  transition: all 200ms;

  color: #2c353c;

  :hover {
    background: rgba(125, 131, 146, 0.2);
  }

  span {
    margin-right: 15px;
    transition: all 200ms;

    :hover {
      margin-right: 20px;
    }
  }
`
