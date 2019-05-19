import React from 'react'
import styled from 'styled-components'

// Locals
import { Container } from './shared/Containers'

export const ThereNews = () => (
  <Wrapper>
    Looking for our free <strong>time zone menubar app?</strong>{' '}
    <Button href="https://there.pm">Get it on there.pm</Button>
  </Wrapper>
)

const Wrapper = styled.div`
  width: 100%;

  font-family: ${p => p.theme.fontText};
  font-size: 16px;
  line-height: 1.3;
  text-align: center;

  color: rgb(255, 255, 255);
  background: radial-gradient(772.5px at 50% -650%, #214967 0%, #0d2d45 100%);
  padding-top: 10px;
  padding-bottom: 13px;
  position: relative;
`

const Button = styled.a`
  padding: 2px 8px;
  color: #fff;

  background: linear-gradient(
    190deg,
    rgba(140, 200, 255, 0.6) -45%,
    rgba(0, 87, 255, 0.8) 90%
  );
  white-space: nowrap;
  font-weight: 600;
  font-size: 14px;
  line-height: 1;
  border-radius: 4px;
  margin-left: 12px;
`
