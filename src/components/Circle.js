import React, { useState } from 'react'
import styled from 'styled-components'
import '.././componentsCSS/circle.css'


const Circle = ({setAnimation, toggle, prevToggle, isMobile }) => {
  const [nextText, setNextText] = useState('text')

  const CircleGrid = styled.div`
      display: flex; 
  flex-direction: row;
  justify-content: ${isMobile ? 'start' : 'center'}; 
  align-items: ${isMobile ? 'start' : 'center'}; 
  `

  const Circle= styled.div`
  background: #F9DBBD;
  width: ${isMobile ? '25em' : '25em'};
height: ${isMobile ? '25em' : '25em'};
-moz-border-radius: 220px;
-webkit-border-radius: 220px;
border-radius: 220px;	
display: flex;
justify-content: center;
flex-direction: column;
text-align: center;
  `
  const Rectangle1 = styled.div`
  width: ${isMobile ? '25em' : '50em'};
		height: ${isMobile ? '25em' : '25em'};
		border-top-right-radius: 220px;
		border-bottom-right-radius: 220px;
        background: #F9DBBD;
        display: flex;
justify-content: center;
flex-direction: column;
text-align: center;
  `

  const PictureContainerCircle = styled.div`
  width: ${isMobile ? '25em' : '50em'};
height: ${isMobile ? '25em' : '25em'};
display: flex;
justify-content: center;
flex-direction: column;
text-align: center;
  overflow: hidden;
  display: inline;
  `

  const Button = styled.a`
  position:relative;
  color: black;
  z-index:1000;
`

  const CircleText = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  margin: auto;
  max-width: 80%;
  color:black;
`

  const BackButton = styled.h2`
color:black;
text-decoration:none;
`

const text = () => {
    if(!nextText) return 'text'
    return 'different text'
  }


  if(isMobile){
    return (
      <CircleGrid>
        <Circle className={toggle==='circleAnimation' ?
          'circleSpanOn' : prevToggle==='circleAnimation' ? 'circleSpanOff' : ''}>
          <Button className="btn" onClick={() => setNextText(!nextText)}>
            <p>{text()}</p>
          </Button>
        </Circle>
      </CircleGrid>
    )
  }

  return (
    <CircleGrid>
      <Circle className={toggle==='circleAnimation' ?
        'circleSpanOn' : prevToggle==='circleAnimation' ? 'circleSpanOff' : ''}>
        <Button className="btn" onClick={() => setAnimation('circleAnimation')}>
          <p>Click me</p>
        </Button>
      </Circle>
      <PictureContainerCircle>
        <Rectangle1 className={toggle==='circleAnimation' ?
          'circleAnimationOn' : prevToggle==='circleAnimation' ? 'circleAnimationOff' : 'circle'}>
          <CircleText>
          <p>Text</p>
            <Button className="btn" onClick={() => setAnimation('circleAnimation')}>
              <BackButton><p>X</p></BackButton></Button></CircleText>
        </Rectangle1>
      </PictureContainerCircle>
    </CircleGrid>
  )
}

export default Circle