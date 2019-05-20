import { css } from 'styled-components'

export const mobile = body => css`
  @media screen and (max-width: 1000px) {
    ${body};
  }
`

export const mediaMaxWidth = max => body => css`
  @media screen and (max-width: ${max}px) {
    ${body};
  }
`

export const desktop = body => css`
  @media screen and (min-width: 1001px) {
    ${body};
  }
`

export const retina = style => css`
  @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
    ${style};
  }
`
