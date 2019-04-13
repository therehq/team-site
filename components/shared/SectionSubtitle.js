import * as React from 'react'
import styled from 'styled-components'

export const SectionSubtitle = styled.div`
  max-width: 660px;

  font-family: ${p => p.theme.fontText};
  font-size: ${p => p.theme.fontMedium18}px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.44;
  text-align: center;
  letter-spacing: 0.01em;

  color: ${p => p.theme.gray};
`
