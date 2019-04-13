import * as React from 'react'
import styled, { css } from 'styled-components'

export const Space = styled.div`
  width: ${p => p.width || 0}px;
  height: ${p => p.height || 0}px;
  pointer-events: none;
  flex-shrink: 0;

  ${p =>
    p.fillColumn &&
    css`
      margin-top: auto;
      margin-bottom: auto;
    `};

  ${p =>
    p.fillRow &&
    css`
      margin-right: auto;
      margin-left: auto;
    `};
`

export default Space
