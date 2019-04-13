import React from 'react'
import styled from 'styled-components'

import { Square, Triangle, MultiCircles, HalfCircle } from './Shapes'
import { Laptop } from './Laptop'

export const LaptopSet = () => (
  <Wrapper>
    <ShapeWrap top={-55} right={18}>
      <Square />
    </ShapeWrap>
    <ShapeWrap top={290} right={-8}>
      <Triangle />
    </ShapeWrap>
    <ShapeWrap top={84} right={658}>
      <MultiCircles />
    </ShapeWrap>
    <ShapeWrap top={-107} right={400}>
      <HalfCircle />
    </ShapeWrap>

    <LaptopWrapper>
      <DesktopAppImage />
      <Laptop />
    </LaptopWrapper>
  </Wrapper>
)

const Wrapper = styled.div`
  position: relative;
`

const ShapeWrap = styled.div`
  position: absolute;
  top: ${p => (p.top ? p.top : 0)}px;
  right: ${p => (p.right ? p.right : 0)}px;

  animation-name: spin;
  animation-duration: 20s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`

const LaptopWrapper = styled.div`
  position: relative;
  z-index: 10;
`

const DesktopAppImage = styled.div`
  width: 330px;
  height: 170px;

  top: 118px;
  left: 191px;

  background-image: url('../static/Home.jpg');
  background-size: cover;
  border-radius: 3px;
  box-shadow: 0 0 2px #333;

  position: absolute;
  z-index: 11;
`
