import React from 'react'
import styled, { css } from 'styled-components'

import { mobile } from './style/mobile'
import Twitter from './vectors/share/Twitter'
import Copy from './vectors/share/Copy'

// Locals

export const TopShare = () => (
  <Wrapper>
    <ShareItem>
      <Twitter />
      <span>Share on Twitter</span>
    </ShareItem>
    <ShareItem>
      <Copy />
      <span>Share the link with your team</span>
    </ShareItem>
  </Wrapper>
)

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  ${mobile(css`
    flex-direction: column;
    justify-content: flex-start;
  `)};
`

const ShareItem = styled.div`
  display: flex;
  align-items: center;
  margin-left: 89px;

  font-family: ${p => p.theme.fontText};
  font-size: ${p => p.theme.fontMedium18}px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.11;
  text-align: center;

  color: #6d7786;
  cursor: pointer;

  ${mobile(css`
    margin-left: 0;
    margin-top: 25px;
  `)};

  :hover {
    color: #6a7786;
  }

  :first-child {
    margin-left: 0;
    margin-top: 0;
  }

  span {
    margin-left: 9px;
  }
`
