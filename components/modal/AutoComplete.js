import React from 'react'
import styled from 'styled-components'

export const AutoCompleteWrapper = styled.div`
  position: relative;
`

export const Results = styled.div`
  position: absolute;
  top: 100%;
  z-index: 10;
  width: 100%;
  min-width: 300px;

  background: white;
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0 9px 18px rgba(0, 0, 0, 0.12), 0 1px 6px rgba(0, 0, 0, 0.08);
`

export const ResultItem = styled.div`
  width: 100%;
  height: 36px;
  line-height: 36px;
  overflow: hidden;
  font-size: 16px;
  padding-left: 12px;
  display: flex;
  align-items: center;

  background: white;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  cursor: pointer;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  &:hover {
    background: rgba(0, 0, 0, 0.08);
  }
`

export const CoLogo = styled.img`
  width: 24px;
  height: 24px;
  display: inline-block;
  overflow: hidden;
  border-radius: 50%;
  margin-right: 8px;
`
