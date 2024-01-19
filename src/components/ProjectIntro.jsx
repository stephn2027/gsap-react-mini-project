import React from 'react';
import styled from 'styled-components';
import backgroundOne from '../images/pine-watt-2Hzmz15wGik-unsplash.jpg';
import backgroundTwo from '../images/DSC02707.jpg';



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
    <StyledProject>
      <h2 className="project__title">
        <span className="project__title--main">Deo Palculan</span>
        <span className="project__title--sub">Photography</span>
      </h2>
      <div
        className="project__img project__img--left"
        style={{ backgroundImage: `url(${backgroundOne})` }}
      ></div>
      <div
        className="project__img project__img--right"
        style={{ backgroundImage: `url(${backgroundTwo})` }}
      ></div>
      
    </StyledProject>
  );
};

export default ProjectIntro;
