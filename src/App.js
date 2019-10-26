import React, { useState } from 'react'
import Square from './components/Square'
import Triangle from './components/Triangle'
import Rectangle from './components/Rectangle'
import Circle from './components/Circle'
import styled from 'styled-components'
import PhoneBreakpoint from './responsive_utilities/phone_breakpoint'
import DesktopBreakpoint from './responsive_utilities/desktop_breakpoint'
import LandscapeBreakpoint from './responsive_utilities/landscape_breakpoint'

function App( isMobile ) {
  const [toggle, setToggle] = useState('squareAnimation')
  const [prevToggle, setPrevToggle] = useState('')

  let mobile = false
  let landscape = false


  const setAnimation = (name) => {
    if(name === toggle) {
      if(name === 'rectangleAnimation'){
        setToggle('no animation')
        setPrevToggle(name)
      }else if(name ==='circleAnimation') {
        setToggle('no animation')
        setPrevToggle(name)
      }else if(name ==='triangleAnimation'){
        setToggle('no animation')
        setPrevToggle(name)
      }else if(name ==='squareAnimation'){
        setToggle('no animation')
        setPrevToggle(name)
      }
    }else{
      setPrevToggle(toggle)
      setToggle(name)
    }
  }

  const MainGrid = styled.div`
    max-width: 100vw;
    padding-top: ${isMobile ? '10%' : '0'};

  `

  const MiddleGrid = styled.div`

  `

  const NewGrid = styled.div`
  display: inline;
  `
  const Button = styled.a`
  position:relative;
  color: white;
  z-index:1000;
`

  const responsiveVersion = (isMobile) =>
    <MainGrid>
      <MiddleGrid>
        <Square isMobile={isMobile} Button={Button} setAnimation={setAnimation} toggle={toggle} prevToggle={prevToggle}/>
        <Rectangle isMobile={isMobile} Button={Button} setAnimation={setAnimation} toggle={toggle} prevToggle={prevToggle}/>
        <Circle isMobile={isMobile} Button={Button} setAnimation={setAnimation} toggle={toggle} prevToggle={prevToggle}/>
        <NewGrid>
          <Triangle isMobile={isMobile} Button={Button} 
            setAnimation={setAnimation} toggle={toggle} prevToggle={prevToggle}/>
        </NewGrid>
      </MiddleGrid>
    </MainGrid>


  return (
    <div>
      <PhoneBreakpoint>
        {responsiveVersion(mobile=true, landscape=false)}
      </PhoneBreakpoint>
      <DesktopBreakpoint>
        {responsiveVersion(mobile=false, landscape=false)}
      </DesktopBreakpoint>
      <LandscapeBreakpoint>
        {responsiveVersion(mobile=true, landscape=true)}
      </LandscapeBreakpoint>
    </div>
  )
}


export default App
