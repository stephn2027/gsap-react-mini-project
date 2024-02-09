import React from 'react';
import styled from 'styled-components';
import backgroundOne from '../images/intro1.jpg';
import backgroundTwo from '../images/intro2.jpg';
import {motion} from 'framer-motion';


const StyledProject = styled.section`
  position: relative;
  display: grid;
  padding-top: 20vh;
  grid-template-columns: 35% 15% 1fr;
  grid-template-areas:
    'project-img-left . project-title'
    'project-img-left project-img-right project-img-right';
  background-color: #e1dfdd;
  z-index: -4;
  padding-bottom:2rem;
`;
const ProjectIntro = () => {
  return (
    <StyledProject 
      
    >
      <motion.h2 className="project__title"
      initial={{x:100,opacity:0.7}}
      animate={{x:0, opacity:1}}
      transition={{ease:'linear', delay:0.2}}
      >
      
        <span className="project__title--main">Deo Palculan</span>
        <span className="project__title--sub">Photography</span>
      </motion.h2>
      <motion.div
        className="project__img project__img--left"
        style={{ backgroundImage: `url(${backgroundOne})` }}
        initial={{x:-200,opacity:0.7}}
        animate={{x:0,opacity:1}}
        transition={{ease:'easeIn',delay:0.2}}
      ></motion.div>
      <motion.div
        className="project__img project__img--right"
        style={{ backgroundImage: `url(${backgroundTwo})` }}
        initial={{x:200,opacity:0.7}}
      animate={{x:0, opacity:1}}
      transition={{ease:'linear', delay:0.2}}
      ></motion.div>
      
    </StyledProject>
  );
};

export default ProjectIntro;
