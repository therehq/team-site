import React, { Component } from 'react'
import styled, { css } from 'styled-components'

// Locals
import Space from './shared/Space'
import { mobile } from './style/mobile'
import { Wrapper, NarrowContainer } from './shared/Containers'
import { SectionHeading } from './shared/SectionHeading'
import { QuoteBoxMedium } from './shared/QuoteBoxMedium'

export class Quotes extends Component {
  state = {
    scrollSize: 0
  }

  constructor(props) {
    super(props)
    this.slider = React.createRef()
  }

  render = () => (
    <NarrowContainer>
      <Space height={130} />

      <StyledWrapper>
        <Prev onClick={this.prevHandler} />
        <QuotesSlider scrollSize={this.state.scrollSize} ref={this.slider}>
          <QuoteBoxMedium
            title="The idea"
            quote="I really like the idea of There, especially helpful when you’re working with a remote team in different timezones."
            image={require('../static/avatars/1.jpg')}
            name="Holger Bartel"
            status="Colloq.io"
          />

          <QuoteBoxMedium
            title="I've never seen"
            quote="Working with a distributed global team? I've never seen a team pick up an app so fast."
            image={require('../static/avatars/2.jpg')}
            name="Miko Ademagic"
            status="Finder"
          />

          <QuoteBoxMedium
            title="Game changer"
            quote="This is a game changer for remote teams & clients."
            image={require('../static/avatars/3.jpg')}
            name="Sam Schak"
            status="Senior PM at Handsome"
          />

          <QuoteBoxMedium
            title="Super easy"
            quote="In love with There — makes handling multiple timezones super easy!"
            image={require('../static/avatars/AndrewHyde.jpg')}
            name="Andrew Hyde"
            status="Founder at Portl"
          />

          <QuoteBoxMedium
            title="You owe it"
            quote="If you work on a distributed team, you owe it to yourself to check out There."
            image={require('../static/avatars/ChrisMessina.jpg')}
            name="Chris Messina"
            status=""
          />
        </QuotesSlider>
        <Next onClick={this.nextHandler} />
      </StyledWrapper>
    </NarrowContainer>
  )

  nextHandler = () => {
    const toGo = this.slider.current.scrollLeft + 300
    this.slider.current.scrollTo({
      left: toGo,
      behavior: 'smooth'
    })
  }

  prevHandler = () => {
    const toGo = this.slider.current.scrollLeft - 300
    this.slider.current.scrollTo({
      left: toGo,
      behavior: 'smooth'
    })
  }
}

const StyledWrapper = styled(Wrapper)`
  display: grid;
  width: 100%;
  grid-template-columns: 20px auto 20px;
  align-items: center;
  /* grid-column-gap: 420px; */

  ${mobile(css`
    grid-column-gap: 0;
  `)}
`

const QuotesSlider = styled.div`
  padding: 20px 0;

  display: flex;
  scroll-snap-type: mandatory;
  scroll-snap-points-y: 33%;
  scroll-snap-type: x mandatory;
  overflow-x: scroll;

  ::-webkit-scrollbar {
    display: none;
  }

  > div {
    min-width: 33%;
    scroll-snap-align: start;
    text-align: center;
    position: relative;
    padding: 0 20px;
  }

  ${mobile(css`
    scroll-snap-points-y: 50%;
    > div {
      min-width: 50%;
    }
  `)}

  @media screen and (max-width: 870px) {
    scroll-snap-points-y: 100%;

    > div {
      min-width: 100%;
    }
  }
`

const Prev = styled.div`
  background: url('../static/prev-arrow.svg') no-repeat;
  height: 27px;
  cursor: pointer;
  transition: all 200ms;

  :hover {
    transform: translateX(-2px);
  }
`

const Next = styled.div`
  background: url('../static/next-arrow.svg') no-repeat;
  height: 27px;
  cursor: pointer;
  transition: all 200ms;

  :hover {
    transform: translateX(2px);
  }
`
