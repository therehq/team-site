import React from 'react'
import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  overflow: hidden;
`

export const Wrapper = styled.div`
  max-width: 1200px;
`

export const NarrowContainer = styled.div`
  max-width: ${p => p.theme.containerNarrowWidth}px;
  margin: 0 auto;

  @media (max-width: ${p => p.theme.containerNarrowWidth}px) {
    padding-left: ${p => p.theme.sideSpace}px;
    padding-right: ${p => p.theme.sideSpace}px;
  }
`