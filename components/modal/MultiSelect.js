import React, { Component, useContext } from 'react'
import styled, { css } from 'styled-components'

export class MultiSelect extends Component {
  optionChangeHandler = value => {
    this.props.onChange(value)
  }

  render = () => {
    const { options, value = '' } = this.props

    return (
      <Wrapper>
        {options.map(v => (
          <Option
            key={v}
            selected={value == v}
            onClick={() => this.optionChangeHandler(v)}
          >
            {v}
          </Option>
        ))}
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  width: 100%:
  display: flex;
  margin-bottom: 10px;
`

const Option = styled.div`
  margin-right: 17px;
  margin-top: 14px;
  padding: 6px 12px;
  display: inline-block;

  background: #f8f8f8;
  border: 1px solid rgba(164, 164, 164, 0.56);
  box-sizing: border-box;
  border-radius: 2px;

  font-family: ${p => p.theme.fontText};
  font-style: normal;
  font-weight: normal;
  font-size: 17px;
  line-height: normal;

  color: rgba(0, 0, 0, 0.62);

  cursor: pointer;

  ${p =>
    p.selected
      ? css`
          line-height: normal;
          background: #eef7ff;
          border: 2px solid #309cff;
          color: #0987e1;

          margin-right: 16px;
          margin-top: 13px;
        `
      : css``}
`
