import React, { useEffect, useRef, useState } from 'react';
import Header from './components/Header';
import { styled } from 'styled-components';
import Menu from './components/Menu';
import Content from './components/Content';
import ProjectIntro from './components/ProjectIntro';
import Cursor from './components/Cursor';
import Works from './components/Works';

const StyledMainWrapper = styled.div`
  position: relative;
`;

function App() {
  const circleRef = useRef();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(()=>{
    
    circleRef.current.moveTo(window.innerWidth/2, window.innerHeight/2)
    const onMove = ({clientX,clientY})=>{
      circleRef.current.moveTo(clientX,clientY)
    }
    window.addEventListener("pointermove",onMove)
    return ()=>window.removeEventListener('pointermove', onMove);
    
  },[]);

  return (
    <StyledMainWrapper>
      <Cursor ref={circleRef}/>
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <Content />
      <ProjectIntro />
      <Works />
      <Menu isMenuOpen={isMenuOpen} />
    </StyledMainWrapper>
  );
}

export default App;
