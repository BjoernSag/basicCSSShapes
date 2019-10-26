import React from 'react'
import styled from 'styled-components'
import '.././componentsCSS/rectangle.css'


const Rectangle = ({ Button, setAnimation, toggle, prevToggle, isMobile }) => {

  const RectangleGrid = styled.div`
      display: flex; 
  flex-direction: row-reverse;
  justify-content: center; 
  align-items: center;
  

  `

  const Rectangle1 = styled.div`
  width: 40em;
  max-width: ${isMobile ? '47%' : '43%'};
  height:23.5em;
  max-height: 70%;
  background: #773344;
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  justify-self:end;
  `
  const Rectangle2 = styled.div`
  height: 100%
  background: #773344;
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  justify-self:start;
  `

  const PictureContainer = styled.div`
  width: 40em;
  max-width: ${isMobile ? '47%' : '43%'};
  height:23.5em;
  max-height: ${isMobile ? '80%' : '70%'};
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  justify-self:start;
  overflow: hidden;
  display: inline;
  `
  const RectangleText = styled.div`
  display: grid;
  grid-template-rows:1fr .05fr;
    margin: auto;
    max-width: 80%;
    color:white;
    padding-top:${isMobile ? '0' : '0'};
  `
  const BackButton = styled.h2`
  color:white;
  text-decoration:none;
`


  return (
    <RectangleGrid>
      <Rectangle1>
        <Button className="btn" onClick={() => setAnimation('rectangleAnimation')}>
          <BackButton className={toggle==='rectangleAnimation' ? '' : 'arrowBounce'} >
            <p></p></BackButton>
          <RectangleText><p>Click me</p></RectangleText>
        </Button>
      </Rectangle1>
      <PictureContainer>
        <Rectangle2 className={toggle==='rectangleAnimation' ?
          'rectangleAnimationOn' : prevToggle==='rectangleAnimation' ? 'rectangleAnimationOff' : 'rectangle'}>
          <RectangleText><p>Text</p>
            <Button className="btn" onClick={() => setAnimation('rectangleAnimation')}>
              <BackButton><p>X</p></BackButton></Button>
          </RectangleText>
        </Rectangle2>
      </PictureContainer>
    </RectangleGrid>
  )
}

export default Rectangle