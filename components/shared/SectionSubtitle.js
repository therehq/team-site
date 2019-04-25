import * as React from 'react'
import styled from 'styled-components'

export const SectionSubtitle = styled.span`
  display: block;
  max-width: ${p => (p.maxWidth ? p.maxWidth : 660)}px;
  margin-top: ${p => (p.top ? p.top : '0')}px;

  font-family: ${p => p.theme.fontText};
  font-size: ${p => p.theme.fontMedium18}px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.44;
  letter-spacing: 0.01em;
  text-align: ${p => (p.align ? p.align : 'center')};

  color: ${p => p.theme.gray};
`
