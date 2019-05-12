import React from 'react'
import styled from 'styled-components'

// Locals
import { Container } from './shared/Containers'

export const ThereNews = () => (
  <Container>
    <Wrapper>
      Download our free <strong>time zone menubar app</strong> here 👉
      <Button href="https://there.pm">Go to there.pm</Button>
    </Wrapper>
  </Container>
)

const Wrapper = styled.div`
  width: 100%;

  font-family: ${p => p.theme.fontText};
  font-size: 16px;
  text-align: center;

  color: rgb(255, 255, 255);
  background: rgb(8, 33, 51);
  padding: 20px;
`

const Button = styled.a`
  padding: 4px 8px;
  color: #fff;

  background-color: rgb(159, 107, 244);
  white-space: nowrap;
  font-weight: 600;
  font-size: 14px;
  line-height: 1;
  border-radius: 4px;
  margin-left: 12px;
`
