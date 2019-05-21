import React, { useContext } from 'react'
import styled, { css } from 'styled-components'

// Locals
import Space from '../shared/Space'
import { mobile } from '../style/mobile'
import { Wrapper, NarrowContainer } from '../shared/Containers'
import ThereLogo from '../../static/footer/ThereLogoBlue.svg'

import AngleList from '../../static/footer/angleList.svg'
import Dribbble from '../../static/footer/dribbble.svg'
import Github from '../../static/footer/github.svg'
import Twitter from '../../static/footer/twitter.svg'
import OurSign from '../../static/footer/OurSign.svg'
import { ModalContext } from '../modal/Context'

export const Footer = () => {
  const { setOpenState } = useContext(ModalContext)

  return (
    <NarrowContainer>
      <Space height={172} />
      <StyledWrapper>
        <Column>
          <ThereLogo />
          <Space height={23} />

          <span>Follow our Team</span>
          <Space height={11} />

          <Socials>
            <a href="https://twitter.com/therehq">
              <Twitter />
            </a>
            <a href="https://angel.co/company/therepm">
              <AngleList />
            </a>
            <a href="https://github.com/therehq">
              <Github />
            </a>
            <a href="https://dribbble.com/morajabi">
              <Dribbble />
            </a>
          </Socials>
          <Space height={19} />

          <span>© 2019 There PM</span>
        </Column>
        <Column>
          <ColTitle>Product</ColTitle>
          <FooterLink onClick={() => setOpenState(true)}>
            Request Access
          </FooterLink>
          <FooterLink
            onClick={() => {
              $crisp.push(['do', 'chat:open'])
            }}
          >
            Chat with Us
          </FooterLink>
          <FooterLink href="mailto:mo@there.pm">Email Us</FooterLink>
          <FooterLink href="https://www.notion.so/there/FAQ-54dd39b2b18442aa8530ce73dc0b13a6">
            FAQ
          </FooterLink>
        </Column>
        <Column>
          <ColTitle>Company</ColTitle>
          <FooterLink href="https://www.notion.so/there/About-Us-05b0c57810e749a2a57919f814940ae6">
            About us
          </FooterLink>
          {/* <FooterLink href="https://morajabi.im/blog">Blog</FooterLink> */}
          {/* <FooterLink href="#">Press</FooterLink> */}
          <FooterLink href="https://spectrum.chat/there">
            Join Our Community
          </FooterLink>
          <FooterLink href="https://there.pm">There Personal</FooterLink>
        </Column>
        <Column>
          <ColTitle>1 Minute Video</ColTitle>
          <a href="https://youtu.be/OBnY5R3A8Mk" target="_blank">
            <VideoWrapper>
              <VideoThumbnail />
              <SignWrapper>
                <OurSign />
              </SignWrapper>
            </VideoWrapper>
          </a>
        </Column>
        <Column>
          <ColTitle>Team</ColTitle>

          <FooterLink href="https://www.notion.so/there/Meet-the-Team-42ec8e5423af4a3dbab478e7c3c8ff45">
            Meet the team
          </FooterLink>
          <FooterLink href="https://angel.co/company/therepm">
            Open Positions
          </FooterLink>
        </Column>
      </StyledWrapper>
      <Space height={50} />
    </NarrowContainer>
  )
}

const StyledWrapper = styled(Wrapper)`
  display: grid;
  grid-template-columns: 132px 1fr 1fr 1.5fr 1.5fr;
  grid-column-gap: 75px;

  ${mobile(css`
    grid-template-columns: auto auto;
    grid-template-rows: auto;
    grid-row-gap: 70px;
    grid-column-gap: 30px;
  `)}
`

const Column = styled.div`
  display: flex;
  flex-direction: column;

  font-family: ${p => p.theme.fontText};
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 16px;
  letter-spacing: -0.03em;

  color: #5c6870;
`

const ColTitle = styled.h2`
  margin: 0;
  margin-bottom: 18px;

  font-family: ${p => p.theme.fontTitle};
  font-size: ${p => p.theme.fontLarge30}px;
  font-style: normal;
  font-weight: 800;
  line-height: 0.93;

  color: #2c353c;
`

const Socials = styled.div`
  display: flex;
  justify-content: space-between;

  max-width: 120px;
`

const FooterLink = styled.a`
  margin-bottom: 14px;

  font-family: ${p => p.theme.fontText};
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 1;
  letter-spacing: -0.03em;
  text-decoration-line: underline;

  cursor: pointer;
  color: #5c6870;
`

const VideoThumbnail = styled.div`
  width: 186px;
  height: 115px;
  background: url(${require('../../static/footer/videoImage.jpg')});
  background-size: cover;

  border-radius: 3px;
  /* border: 1px solid #11c870; */
  box-shadow: 3px 3px 10px 0 #ddd;
  filter: saturate(0);
  transition: all 200ms;
  /* cursor: pointer; */
  cursor: pointer;

  border-color: #490b5f;
  border-left: solid 2px;
  border-top: solid 2px;
  border-bottom: solid 4px;
  border-right: solid 4px;

  :hover {
    filter: saturate(1);
  }
`

const SignWrapper = styled.div`
  position: absolute;
  top: 70px;
  left: 20px;
  z-index: 15;

  pointer-events: none;

  ${mobile(css`
    top: 70px;
    left: 0;
  `)}
`

const SoonWrapper = styled.div`
  position: absolute;
  top: 39%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 15;

  color: white;
  font-weight: bold;
  font-size: 32px;
  pointer-events: none;
`

const VideoWrapper = styled.div`
  position: relative;
`
