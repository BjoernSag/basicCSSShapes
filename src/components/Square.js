import React, { useState } from 'react'
import styled from 'styled-components'


const Square = ({ setAnimation, toggle, prevToggle, isMobile }) => {
  const [isVisible, setVisible] = useState(false)
  
  const SquareGrid = styled.div`
        display: flex; 
    flex-direction: row;
    justify-content: center; 
    align-items: center;
    padding-left: ${isMobile ? '4em' : '0em'};
    `

    /* Container div for all the other classes too */
    const Container = styled.div`
    display: grid;
  
    
  .square {
      opacity: 0;
  }
  .square:focus {
      outline: none
  }
  
  .square:focus-visible {
      outline: 3px solid blanchedalmond; 
  }
  
  .squareSpan:focus-visible {
      outline: 3px solid blanchedalmond; 
  }
  
  
  .squareAnimationOn {
      -moz-animation: squareShow 1s ease-in 0s forwards; /* Firefox */
      -webkit-animation: squareShow 1s ease-in 0s forwards; /* Safari and Chrome */
      -o-animation: squareShow 1s ease-in 0s forwards; /* Opera */
      animation: squareShow 1s ease-in 0s forwards;
  }
  .squareAnimationOff {
      -moz-animation: squareHide 1s ease-in 0s forwards; /* Firefox */
      -webkit-animation: squareHide 1s ease-in 0s forwards; /* Safari and Chrome */
      -o-animation: squareHide 1s ease-in 0s forwards; /* Opera */
      animation: squareHide 1s ease-in 0s forwards;
  }
  
  @keyframes squareShow {
      from {opacity: 0;}
      to {opacity: 1;}
    }
  
    @keyframes squareHide {
      from {opacity:1}
      to {opacity:0;}
    }
    
    .layer1, .layer2{
      grid-column: 1;
      grid-row: 1;
    }
    
    .layer1 span{
      color: #fff;
      background: #54494B;
    }
  
    .invisible {
      visibility: hidden;
      opacity: 0;
      
    }
  
    .visible {
      opacity: 1;
      visibility: visible;
    }
  
    .arrowBounce {
      animation: bounce 2s infinite;
      color: #5778F3;
      font-size: 22px;
      position: relative;
  }
  
  .arrowBounce::after {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: url("https://res.cloudinary.com/bjoern-2914a/image/upload/v1571800222/website/bjoernsagstad-whitearrow-svg-24x24_xozrig.ico") no-repeat;
      height: 24px;
      width: 24px;
  }
  
  @keyframes bounce {
      0%, 20%, 50%, 80%, 100% {
          transform: translateY(0);
      }
      40% {
          transform: translateY(-30px);
      }
      60% {
          transform: translateY(-15px);
      }
  }
    `   


  const OuterSquare = styled.div`
  width: ${isMobile ? '21em' : '30em'};
  height: ${isMobile ? '20em' : '30em'};
  /* Rotate */
  -webkit-transform: rotate(-45deg);
  -moz-transform: rotate(-45deg);
  -ms-transform: rotate(-45deg);
  -o-transform: rotate(-45deg);
  transform: rotate(-45deg);
  display:grid;
  grid-template-columns: 1fr 1fr;
  position: relative;
  color: white;
  `
  
  const InnerSquare = styled.div`
  width: 100%;
  height: 100%;
  background: #54494B;
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  color: white;
  `
  const InnerSquareText = styled.div`
  -webkit-transform: rotate(45deg); 
  -moz-transform: rotate(45deg); 
  color:white;
  display: grid;
  grid-template-rows: 1fr 1fr;
  max-width: 100%;
  color: white;
  `
  
  const InnerSquareHiddenText = styled.div`
  -webkit-transform: rotate(45deg); 
  -moz-transform: rotate(45deg); 
  color:white;
  display: grid;
  grid-template-rows: 0.5fr 1fr;
  max-width: 85%;
  color: white;
  `
  const InnerSquareHidden = styled.div`
  width: 100%;
  height: 100%;
  background: #54494B;
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  color: white;
  `
  
  const HiddenBigSquare = styled.div`
  width: ${isMobile ? '21em' : '30em'};
  height: ${isMobile ? '20em' : '30em'};
  /* Rotate */
  -webkit-transform: rotate(-45deg);
  -moz-transform: rotate(-45deg);
  -ms-transform: rotate(-45deg);
  -o-transform: rotate(-45deg);
  transform: rotate(-45deg);
  display:grid;
  grid-template-columns: 1fr;
  position: relative;
  background: #54494B;
  `
  
  const HiddenBigSquareInner = styled.div`
  width: 100%;
  height: 100%;
  background: #54494B;
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  align-items: center;
  `
  
  const Button = styled.a`
  position:relative;
  z-index:1000;
  color: white;
  `
  
  const BackButton = styled.h2`
      color:white;
      text-decoration:none;
  `
  
  const ArrowBounce = styled.a`
    animation: bounce 2s infinite;
    color: white;
    font-size: 22px;
    position: relative;
  `
  
  console.log(isVisible)
  
  return (
    <SquareGrid>
      <Container>
        <OuterSquare className="layer2">
          <InnerSquare>
            <InnerSquareText>
                
              <Button className="btn" onClick={() => setAnimation('squareAnimation')}>
                <p>Click me</p> 
              </Button>
            </InnerSquareText>
          </InnerSquare>
          <InnerSquareHidden className={toggle==='squareAnimation' ?
            'squareAnimationOn' : prevToggle==='squareAnimation' ? 'squareAnimationOff' : 'square'}>
            <InnerSquareText>
                      Design
            </InnerSquareText>
          </InnerSquareHidden>
          <InnerSquareHidden className={toggle==='squareAnimation' ?
            'squareAnimationOn' : prevToggle==='squareAnimation' ? 'squareAnimationOff' : 'square'}>
            <InnerSquareText>
                      Brukervennlighet
            </InnerSquareText>
          </InnerSquareHidden>
          <InnerSquareHidden className={toggle==='squareAnimation' ?
            'squareAnimationOn' : prevToggle==='squareAnimation' ? 'squareAnimationOff' : 'square'}>
            <InnerSquareText>
                      Suksess
            </InnerSquareText>
          </InnerSquareHidden>
        </OuterSquare>
        <HiddenBigSquare className={toggle==='squareAnimation' ?
          'layer1 visible' : 'invisible layer1'}>
          <HiddenBigSquareInner>
            <InnerSquareHiddenText>
              <Button className="btn" onClick={() => setAnimation('squareAnimation')}>
                <BackButton className="arrowBounce" ></BackButton>
                <BackButton><p id="squareX">X</p></BackButton>
                  
              </Button>
              <p>Text</p>
            </InnerSquareHiddenText>
  
          </HiddenBigSquareInner>
  
        </HiddenBigSquare>
      </Container>
    </SquareGrid>
  )
}
  
export default Square