import React from 'react'
import styled from 'styled-components'

// Locals
import { Space } from '../shared/Space'
import { DoubleQ } from '../vectors/DoubleQ'

export const QuoteBoxMedium = ({ quote, image, name, status, title }) => (
  <BoxWrapper>
    <Author>
      <Avatar src={image} />
      <Title>{title}</Title>
    </Author>

    <Space height={11} />
    <Quote>
      <Q>“</Q>
      {quote}
    </Quote>
    <Space height={9} />

    <div>
      <Name>{name}</Name>
      <Role>{status}</Role>
    </div>
  </BoxWrapper>
)

const BoxWrapper = styled.div`
  max-width: 350px;
  height: auto;

  display: flex;
  align-items: center;
  flex-direction: column;
`

const Quote = styled.div`
  position: relative;
  z-index: 1;

  font-family: ${p => p.theme.fontText};
  font-size: 18px;
  line-height: 26px;
  font-style: italic;
  font-weight: normal;
  text-align: center;

  color: #2c353c;

  /* :before {
    content: '“';
    position: absolute;
    left: -5px;
    top: -10px;
    height: 18px;
    font-family: ${p => p.theme.fontText};
    font-style: normal;
    font-weight: normal;
    font-size: 42px;

    color: #b3b7ba;
  } */
`

const Q = styled.span`
  height: 18px;
  padding-right: 4px;

  display: inline-block;
  font-family: ${p => p.theme.fontText};
  font-size: 42px;
  line-height: 1;
  font-style: normal;
  font-weight: normal;
  overflow: hidden;

  color: #b3b7ba;
`

const Title = styled.div`
  font-family: ${p => p.theme.fontText};
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 33px;

  color: #2c353c;
`

const Author = styled.div`
  display: grid;
  grid-template-columns: 47px auto;
`

const Avatar = styled.div`
  width: 34px;
  height: 34px;

  background: url(${p => p.src});
  background-size: cover;
  border-radius: 28px;
`

const Name = styled.span`
  margin-right: 8px;
  font-family: ${p => p.theme.fontText};
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 21px;

  color: #2c353c;
`

const Role = styled.span`
  font-family: ${p => p.theme.fontText};
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 18px;

  color: #8c96a4;
`

const QuotationWrapper = styled.div`
  background: #fff;
  width: 65px;
  height: 62px;

  position: absolute;
  top: -5px;
  right: -5px;
  text-align: right;
`
