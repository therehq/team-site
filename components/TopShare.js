import React, { useState, useRef } from 'react'
import styled, { css } from 'styled-components'
import { Formik, Form } from 'formik'

// Locals
import { mobile } from './style/mobile'
import Twitter from './vectors/share/Twitter'
import Copy from './vectors/share/Copy'
import { openTwitterModal } from '../utils/share'
import {
  Input,
  Button,
  InputLabel,
  SecondaryButton
} from './modal/RequestAccessForm'
import Space from './shared/Space'

export const TopShare = () => {
  const [isTeamPopupOpen, setTeamPopupIsOpen] = useState(false)
  const teamInputRef = useRef()

  return (
    <Wrapper>
      <ItemWrapper>
        <ShareItem onClick={() => openTwitterModal()}>
          <Twitter />
          <span>Share on Twitter</span>
        </ShareItem>
      </ItemWrapper>

      <ItemWrapper>
        <ShareItem
          onClick={() => {
            setTeamPopupIsOpen(!isTeamPopupOpen)
            setTimeout(() => {
              teamInputRef.current && teamInputRef.current.focus()
            }, 120)
          }}
        >
          <Copy />
          <span>Share the link with your team</span>
        </ShareItem>

        {isTeamPopupOpen && (
          <CopyLinkPopup
            firstInputRef={teamInputRef}
            close={() => setTeamPopupIsOpen(false)}
          />
        )}
      </ItemWrapper>
    </Wrapper>
  )
}

export const CopyLinkPopup = ({ firstInputRef, close }) => {
  return (
    <Popup>
      <Formik
        initialValues={{
          teamName: '',
          linkRef: React.createRef(),
          openSlack: false
        }}
        onSubmit={(values, formik) => {
          if (!values.linkRef) {
            return
          }
          // Copy to clipboard
          values.linkRef.current.select()
          document.execCommand('copy')

          if (values.openSlack) {
            window.location.replace('slack://open')
          }

          formik.setStatus(true)
        }}
      >
        {props => (
          <Form>
            <InputLabel>
              What's your team name?
              <Input
                innerRef={firstInputRef}
                name="teamName"
                placeholder="Type here..."
              />
            </InputLabel>
            <Space height={8} />
            <InputLabel>
              Share in your team's chat
              <Textarea
                ref={props.values.linkRef}
                rows={4}
                readonly
                value={`👋 check out There! I created a team link, you can reserve your spot: https://there.team/?team=${encodeURI(
                  props.values.teamName
                )}`}
              />
            </InputLabel>
            <Buttons>
              <SecondaryButton
                style={{ padding: 6 }}
                onClick={() => {
                  close()
                }}
              >
                Close
              </SecondaryButton>

              <SecondaryButton
                style={{ padding: 6 }}
                onClick={() => {
                  props.setFieldValue('openSlack', true)
                  props.submitForm()
                }}
              >
                Open Slack
              </SecondaryButton>
              <Button style={{ margin: 0, marginLeft: 8 }} type="submit">
                {props.status ? 'Copied!' : 'Copy'}
              </Button>
            </Buttons>
          </Form>
        )}
      </Formik>
    </Popup>
  )
}

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  ${mobile(css`
    flex-direction: column;
    justify-content: flex-start;
  `)};
`

const Popup = styled.div`
  position: absolute;
  top: 2em;
  padding: 1.4rem 1.4rem;
  z-index: 10;
  width: 100%;
  min-width: 300px;

  background: white;
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0 9px 18px rgba(0, 0, 0, 0.12), 0 1px 6px rgba(0, 0, 0, 0.08);
`

const Buttons = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 8px;
`

const Textarea = styled.textarea`
  padding: 2px 8px;
  background: rgba(0, 0, 0, 0.04);
  color: rgba(0, 0, 0, 0.6);
  border-radius: 4px;
  border: none;
  width: 100%;
  border-radius: 4px;
  font-size: 14px;
  font-family: ${p => p.theme.fontText};
  margin-top: 2px;
  resize: vertical;

  &:focus {
    outline: 1px solid #438af4;
  }
`

const ShareItem = styled.button`
  display: flex;
  align-items: center;

  font-family: ${p => p.theme.fontText};
  font-size: ${p => p.theme.fontMedium18}px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.11;
  text-align: center;

  color: #6d7786;
  cursor: pointer;
  outline: none;
  border: none;
  background: none;

  :hover {
    color: #475178;
    text-decoration: underline;
    text-decoration-color: #b9c8ef;
    text-decoration-skip-ink: skip;

    svg {
      [fill] {
        fill: #475178;
      }
      [stroke] {
        stroke: #475178;
      }
    }
  }

  span {
    margin-left: 9px;
  }
`

const ItemWrapper = styled.div`
  margin-left: 89px;
  position: relative;

  :first-child {
    margin-left: 0;
    margin-top: 0;
  }
  ${mobile(css`
    margin-left: 0;
    margin-top: 25px;
  `)};
`
