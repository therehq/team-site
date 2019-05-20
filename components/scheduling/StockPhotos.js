import React from 'react'
import styled from 'styled-components'

export const StockPhotos = () => (
  <Wrapper>
    <Row>
      <PhotoBox
        src="../../static/scheduling/video_call.svg"
        width={127}
        height={110}
        borderRadius="0"
      />
      <PhotoBox src={require('../../static/scheduling/3.jpg')} width={95} />
      <PhotoBox src={require('../../static/scheduling/2.jpg')} width={78} />
      <PhotoBox src={require('../../static/scheduling/1.jpg')} width={128} />
    </Row>
    <Row>
      <PhotoBox
        src={require('../../static/scheduling/7.jpg')}
        width={108}
        marginRight={10}
      />
      <PhotoBox src={require('../../static/scheduling/6.jpg')} width={130} />
      <PhotoBox src={require('../../static/scheduling/5.jpg')} width={117} />
      <PhotoBox src={require('../../static/scheduling/4.jpg')} width={89} />
    </Row>
  </Wrapper>
)

const Wrapper = styled.div`
  min-width: 580px;
`

const Row = styled.div`
  display: flex;
  margin-bottom: 26px;
`

const PhotoBox = styled.div`
  width: ${p => p.width}px;
  height: ${p => (p.height ? p.height : 98)}px;

  background: url(${p => p.src});
  border-radius: ${p => (p.borderRadius ? p.borderRadius : 25)}px;
  background-size: cover;
  margin-left: 28px;
  margin-right: ${p => (p.marginRight ? p.marginRight : 0)}px;
`
