import React from 'react';
import styled from 'styled-components';
import {motion} from 'framer-motion';

const StyledContentSection = styled.section`
  position: relative;
  padding: 3vh 3vw 3vh;
  background-color: #e1dfdd;
  z-index: -1;
  display: flex;
  

  .content__wrapper {
    width: 100%;
    margin: 0 auto;
    max-width: 1417px;
    justify-content: center;
    .content__text--heading {
      font-family: 'Italiana', serif;
      font-size: clamp(1.5rem, 3.15vw, 4.25rem);
      line-height: 1;
      font-weight: 300;
      
    }
    .content__text--copy {
      font-size: clamp(1rem, 2.4vw, 1.55rem);
      line-height: 1.3;
      font-weight: 300;
      width: 80%;
      margin-bottom: 5vh;
      margin-top: 5vh;
      font-style: italic;
    }
  }
`;
const Content = () => {
  return (
    <StyledContentSection>
      <motion.div className="content__wrapper px-4"
       initial={{ y:200 ,opacity: 0 }}
      whileInView={{ y:0,opacity: 1 }}
      transition={{ ease:'easeInOut',duration: 1 }}
      >
        <p className="content__text--heading text-sm">
          Welcome to our photography page, where we invite you to explore a
          visual journey capturing the essence of moments frozen in time.
        </p>
        <p className="content__text--copy ">
          From the subtle play of shadows to the vibrant burst of colors, each
          photograph serves as a window into the soul of its subject. Join us as
          we explore the world through the lens, seeking the extraordinary in
          the ordinary and the poetry in the visual silence.
          <br />
          <br />
          Feel the passion, see the details, and experience the world anew
          through the power of imagery. Our photography page is more than a
          showcase; it's an invitation to see, to feel, and to discover the
          profound stories waiting to be unveiled with every click of the
          shutter.
          <br />
          <br />
          Embark on this visual odyssey with us, where each photograph is a
          chapter, and together, we'll weave a narrative that transcends time
          and space. Welcome to a gallery of moments – a sanctuary for those who
          find solace, joy, and inspiration in the art of photography.
        </p>
      </motion.div>
    </StyledContentSection>
  );
};

export default Content;
