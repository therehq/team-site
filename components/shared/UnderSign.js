import React from 'react'
import styled from 'styled-components'

import { SectionHeading } from './SectionHeading'

export const UnderSignSVG = props => (
  <svg width={325} height={190} fill="none" {...props}>
    <path
      d="M2 95c63.23-3.764 218.07-9.626 320.773-.073 1.994 2.651-19.498.134-14.395 4.644"
      stroke="#3CA3EB"
      strokeWidth={3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export const UnderSign = props => (
  <Wrapper>
    <SectionHeading>{props.children}</SectionHeading>
    <SignWrapper>
      <UnderSignSVG />
    </SignWrapper>
  </Wrapper>
)

const Wrapper = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: stretch;
  position: relative;
`

const SignWrapper = styled.div`
  position: absolute;
  top: -45px;
`
