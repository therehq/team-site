import React from 'react'
import styled, { css } from 'styled-components'

import { Square, Triangle, MultiCircles, HalfCircle } from './Shapes'
import { Laptop } from './Laptop'
import { mobile } from '../style/mobile'

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
      <Laptop />
      <DesktopAppImage />
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

  ${mobile(css`
    display: none;
  `)};

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
  width: 713px;
  transition: all 200ms;

  ${mobile(css`
    width: 500px;
  `)};

  svg {
    width: 100%;
    height: 100%;
  }
`

const DesktopAppImage = styled.div`
  width: 47.1%;
  height: 41.8%;
  top: 27%;
  left: 27%;

  transition: all 200ms;

  background-image: url(${require('../../static/Home.jpg')});
  background-size: cover;
  border-radius: 6px;
  overflow: hidden;
  box-shadow: 0px 16px 24px rgba(0, 0, 0, 0.13),
    0px 0px 12px rgba(0, 0, 0, 0.14);

  position: absolute;
  z-index: 11;
`
