import React from 'react'
import styled from 'styled-components'


const StyledProjectItem = styled.a`
position: relative;
margin-bottom: 1rem;
font-family: "italiana",serif;
cursor: pointer;
color: #ffff;
will-change: transform;
text-decoration: none;
&:hover{
    z-index: 2;
}
.project__item-text{
    pointer-events: none;
    display: block;
    line-height: 1;
    position: relative;
    font-size: 2rem;
    font-family: "italiana",serif;
    @media screen and (min-width: 53em){
        font-size:7.5vw;
    }
}
.word{
    display: inline-block;
    overflow: hidden;
    perspective: 1000px;
    perspective-origin: -150% 50% ;
}
.clone{
    position: absolute ;
    width: 100%;
    top: 0;
    left: 0;
    display: inline-block;
    overflow: hidden;
    perspective: 1000px;
    perspective-origin: -150% 50%;
}
`;

export default function MenuItems({name,bgcolor,src}) {
  return (
    <StyledProjectItem
    href=""
    className='project__item'
    data-color={bgcolor}
    data-image={src}
    ><span className='project__item-text'>{name}</span>
    </StyledProjectItem>
  )
}
