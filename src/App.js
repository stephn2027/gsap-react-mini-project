import React, { useEffect, useRef, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import { styled } from 'styled-components';
import Menu from './components/Menu';
import Cursor from './components/Cursor';
import Home from './components/Home';
import Works from './components/Works';
import Contact from './components/Contact';
import TokyoPortraits from './components/TokyoPortraits';

const StyledMainWrapper = styled.div`
  position: relative;
`;

function App() {
  const circleRef = useRef();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    circleRef.current.moveTo(window.innerWidth / 2, window.innerHeight / 2);
    const onMove = ({ clientX, clientY }) => {
      circleRef.current.moveTo(clientX, clientY);
    };
    window.addEventListener('pointermove', onMove);
    return () => window.removeEventListener('pointermove', onMove);
  }, []);

  return (
    <StyledMainWrapper>
      <Cursor ref={circleRef} />
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="solo" element={<TokyoPortraits />} />
          <Route path="works" element={<Works />} />
          <Route path="contact" element={<Contact />} />

        </Routes>
      </BrowserRouter>

      <Menu isMenuOpen={isMenuOpen} />
    </StyledMainWrapper>
  );
}

export default App;
