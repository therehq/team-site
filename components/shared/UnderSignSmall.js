import React from 'react'
import styled from 'styled-components'

import { SectionHeading } from './SectionHeading'

const UnderSignSmallSVG = props => (
  <svg width={179} height={100} fill="none" {...props}>
    <path
      d="M2 46.491c81.715-1.85 125.955-3.862 174.564 6.23 1.128 1.371-2.817 2.006-3.564 1.77"
      stroke="#3CA3EB"
      strokeWidth={3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export const UnderSignSmall = props => (
  <Wrapper>
    <SectionHeading>{props.children}</SectionHeading>
    <SignWrapper>
      <UnderSignSmallSVG />
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
  top: 0;
`
