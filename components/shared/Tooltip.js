import React from 'react'
import styled, { css } from 'styled-components'

export const Tooltip = styled.div`
  position: absolute;
  padding: 0.5em 0.7em;
  z-index: 10;
  min-width: 50px;
  white-space: nowrap;
  line-break: normal;
  font-size: 14px;

  background: white;
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0 9px 18px rgba(0, 0, 0, 0.12), 0 1px 6px rgba(0, 0, 0, 0.08);

  ${p =>
    p.topCenter &&
    css`
      margin-bottom: 6px;
      bottom: 100%;
      left: 50%;
      transform: translateX(-50%);
    `}

  ${p =>
    p.bottomCenter &&
    css`
      margin-top: 6px;
      top: 100%;
      left: 50%;
      transform: translateX(-50%);
    `}
`
