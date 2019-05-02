import React from 'react'
import styled from 'styled-components'

// Locals
import { Space } from '../shared/Space'
import { DoubleQ } from '../vectors/DoubleQ'

export const QuoteBox = ({ quote, image, name, status, type = '1' }) => (
  <BoxWrapper>
    <QuotationWrapper>
      <DoubleQ />
    </QuotationWrapper>
    <Quote>{quote}</Quote>

    <Space height={28} />

    <Author>
      <Avatar src={image} />
      <div>
        <Name>{name}</Name>
        <Role>{status}</Role>
      </div>
    </Author>
  </BoxWrapper>
)

const BoxWrapper = styled.div`
  position: relative;
  max-width: 350px;
  height: auto;
  padding: 41px 24px 37px 36px;
  box-sizing: border-box;

  border: 1px solid #eeeeee;
  border-radius: 5px;
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

const Quote = styled.div`
  position: relative;
  z-index: 1;

  font-family: ${p => p.theme.fontText};
  font-size: 20px;
  font-style: italic;
  font-weight: normal;
  line-height: normal;

  color: #2f363b;
`

const Author = styled.div`
  display: grid;
  grid-template-columns: 47px auto;
`

const Avatar = styled.div`
  width: 37px;
  height: 37px;

  background: url(${p => p.src});
  background-size: cover;
  border-radius: 28px;
`

const Name = styled.div`
  font-family: ${p => p.theme.fontText};
  font-size: 14px;
  font-style: normal;
  font-weight: normal;
  line-height: 1.35;

  color: #2f363b;
`

const Role = styled.div`
  font-family: ${p => p.theme.fontText};
  font-size: 14px;
  font-style: normal;
  font-weight: normal;
  line-height: 1.35;

  color: #6e6e6e;
`
