import React from 'react'
import styled from 'styled-components'

export const BackgroundSlider = ({ duration, children }) => (
  <SliderContainer>
    <SliderContentWrapper duration={duration}>
      <div>{children}</div>
      <div>{children}</div>
      
    </SliderContentWrapper>
  </SliderContainer>
)

const SliderContainer = styled.div`
  width: 100vw;
  overflow: hidden;
  white-space: nowrap;
`

const SliderContentWrapper = styled.div`
  display: inline-block;
  white-space: nowrap;
  overflow: hidden;
  animation: slide ${p => p.duration * 2 || 10}s linear infinite;

  > div {
    display: inline-block;
  }

  @keyframes slide {
    from {
      transform: translate3d(0, 0, 0);
    }
    to {
      transform: translate3d(-50%, 0, 0);
    }
  }
`
