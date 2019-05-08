import React from 'react'
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

export const Footer = () => (
  <NarrowContainer>
    <Space height={172} />
    <StyledWrapper>
      <Column>
        <ThereLogo />
        <Space height={23} />

        <span>Follow our team</span>
        <Space height={11} />

        <Socials>
          <a href="#">
            <AngleList />
          </a>
          <a href="#">
            <Dribbble />
          </a>
          <a href="#">
            <Github />
          </a>
          <a href="#">
            <Twitter />
          </a>
        </Socials>
        <Space height={19} />

        <span>© 2019 There PM</span>
      </Column>
      <Column>
        <ColTitle>Product</ColTitle>
        <FooterLink href="#">Request Access</FooterLink>
        <FooterLink href="#">Feedback</FooterLink>
        <FooterLink href="#">Help</FooterLink>
        <FooterLink href="#">FAQ</FooterLink>
      </Column>
      <Column>
        <ColTitle>Company</ColTitle>
        <FooterLink href="#">About us</FooterLink>
        <FooterLink href="#">Blog</FooterLink>
        <FooterLink href="#">Press</FooterLink>
        <FooterLink href="#">There Personal </FooterLink>
      </Column>
      <Column>
        <ColTitle>1 Minute Video</ColTitle>
        <VideoThumbnail />
        <SignWrapper>
          <OurSign />
        </SignWrapper>
      </Column>
      <Column>
        <ColTitle>Team</ColTitle>

        <FooterLink href="#">Meet the team</FooterLink>
        <FooterLink href="#">Join us!</FooterLink>
      </Column>
    </StyledWrapper>
  </NarrowContainer>
)

const StyledWrapper = styled(Wrapper)`
  display: grid;
  grid-template-columns: 122px 1fr 1fr auto 1fr;
  grid-column-gap: 95px;

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

  font-family: ${p => p.theme.fontText};
  font-size: ${p => p.theme.fontLarge30}px;
  font-style: normal;
  font-weight: 800;
  line-height: 0.93;

  color: #2c353c;
`

const Socials = styled.div`
  display: flex;
  justify-content: space-between;

  max-width: 200px;
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

  color: #5c6870;
`

const VideoThumbnail = styled.div`
  width: 186px;
  height: 115px;
  background: url('../../static/footer/videoImage.jpg');
  background-size: cover;

  border-radius: 3px;
  box-shadow: 3px 3px 10px 0 #ddd;
  filter: saturate(0);
  transition: all 200ms;
  cursor: pointer;

  :hover {
    filter: saturate(1);
  }
`

const SignWrapper = styled.div`
  margin-top: -20px;
`
