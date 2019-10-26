import React, { useState } from 'react'
import styled from 'styled-components'
import '.././componentsCSS/triangle.css'


const Triangle = ({setAnimation, toggle, prevToggle, isMobile }) => {

  const RectangleGrid = styled.div`
      display: flex; 
  flex-direction: row-reverse;
  justify-content: center; 
  align-items: center;

  `


  const TriangleSpan = styled.div`
  width:${isMobile ? '100em' : '30em'};
    padding-bottom:21.36em; /* = width / 1.41 */
    position:relative;
    overflow:hidden;

    &:before {
        content:'';
    position:absolute;
    top:0; left:0;
    width:100%; height:100%;
	background : black;
    
    -webkit-transform-origin:0 100%;
    -ms-transform-origin:0 100%;
    transform-origin:0 100%;
    
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
    }

    display: flex;
    justify-content: center;
    flex-direction: column;
  `


  const PictureContainerTriangle = styled.div`
    height: 21.2em;
    width: ${isMobile ? '120em' : '30em'};
	overflow: hidden;
	transform: rotate(45deg);
    transform-origin: 100.4% 100.5%
    display:inline;
`



  const ComesFromTriangle = styled.div`
  height:100%;
  background: black;
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  justify-self:end;
  
  `

  const RotatedText = styled.div`
  display:grid;
  grid-template-rows: 1fr 0.4fr;
  -webkit-transform: rotate(-45deg); 
  -moz-transform: rotate(-45deg); 
  color: white;
  margin: auto;
  padding-top: ${isMobile ? '15%' : '15%'};
  max-width: '35%';
  `

  const Button = styled.a`
  position:relative;
  z-index:1000;
  color: white;
  padding-left: ${isMobile ? '5em' : '0'};
  `

  const XButton = styled.a`
  position:relative;
  z-index:1000;
  color: white;

  `

  const BackButton = styled.h2`
color:white;
text-decoration:none;
`

const Text = styled.p`

  position:absolute;
  max-width:100%;
  bottom:0;
  margin: auto;
  right: ${isMobile ? '0%' : '40%'};
  text-align:end;
`

const TriangleText = styled.p`
    max-width: 80%;
    padding-top: ${isMobile ? '3em' : '0'};
    padding-left: 2em;
`




  return (
    <RectangleGrid>
      <TriangleSpan className='text'><Text>
        <Button className="btn" onClick={() => setAnimation('triangleAnimation')}>
          Click me</Button>
      </Text>
      </TriangleSpan>

      <PictureContainerTriangle>
        <ComesFromTriangle className={toggle==='triangleAnimation' ?
          'triangleAnimationOn' : prevToggle==='triangleAnimation' ? 'triangleAnimationOff' : 'triangle'}>
          <RotatedText><TriangleText>Dette er tekst som du kan gjøre hva enn du vil med</TriangleText>
            <XButton className="btn" onClick={() => setAnimation('triangleAnimation')}>
              <BackButton><p>X</p></BackButton></XButton>
          </RotatedText>
        </ComesFromTriangle>
      </PictureContainerTriangle>
    </RectangleGrid>
  )
}

export default Triangle