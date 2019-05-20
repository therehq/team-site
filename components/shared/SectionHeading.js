import * as React from 'react'
import styled, { css } from 'styled-components'
import { mobile } from '../style/mobile'

export const SectionHeading = styled.h1`
  margin: 0;
  padding: 0;
  max-width: ${p => (p.maxWidth ? p.maxWidth : 600)}px;

  font-family: ${p => p.theme.fontTitle};
  font-size: ${p => p.theme.fontSuperLarge42}px;
  font-style: normal;
  font-weight: 800;
  line-height: 1.18;
  text-align: ${p => (p.align ? p.align : 'center')};

  color: ${p => p.theme.black2};

  ${p =>
    p.smallOnMobile &&
    mobile(css`
      font-size: ${p => p.theme.fontLarge32}px;
    `)}
`
