import Header from './components/Header';
import { styled } from 'styled-components';
import { useState } from 'react';
import Menu from './components/Menu';

const StyledMainWrapper = styled.div`
  position: relative;
`;

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <StyledMainWrapper>
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <Menu />
    </StyledMainWrapper>
  );
}

export default App;
