import gsap from 'gsap';
import React,{useLayoutEffect} from 'react'
import styled from 'styled-components'


const StyledProjectItem = styled.a`
position: relative;
margin-bottom: 1rem;
font-family: "Italiana",serif;
cursor: pointer;
color: #fff;
will-change: transform;
text-decoration: none;
&:hover{
    z-index: 2;
}
.project__item-text {
    pointer-events: none;
    display: block;
    line-height: 1;
    position: relative;
    font-size: 2rem;
    font-family: "Italiana",serif;
    @media screen and (min-width: 53em){
        font-size:7.5vw;
    }
}
.word {
    display: inline-block;
    overflow: hidden;
    perspective: 1000px;
    perspective-origin: -150% 50%;
}
.clone { 
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    display: inline-block;
    overflow: hidden;
    perspective: 1000px;
    perspective-origin: -150% 50%;
}
`;

export default function MenuItems({name,bgcolor,src, innerRef, outerRef,backgroundRef}) {
   
    useLayoutEffect(()=>{
        document.body.style.overflow = "hidden";

        const getAllProjects = gsap.utils.toArray(".project__item")
        gsap.set(getAllProjects,{opacity:0,y:200})
        gsap.to(getAllProjects,{opacity:1,y:0,stagger:0.2})

        return ()=>{
            document.body.style.overflow = "visible";
        };
    },[])

    const handleMouseEnter = (event)=>{
        const {image,color}= event.target.dataset;
        const getAllProjects = gsap.utils.toArray('.project__item');
        const getSiblings = getAllProjects.filter((item)=>item !== event.target);
        // create the timeline
    const tlEnter = gsap.timeline({
        defaults:{
            duration: 1,
            ease:'none',
            onStart:()=>{
                gsap.set(innerRef.current,{
                    backgroundImage: `url(${image})`
                })
                gsap.to(backgroundRef.current,{
                   backgroundColor:color, 
                   duration:1,
                   ease:"expo",
                });
            },
        },
    });
    tlEnter.to(outerRef.current,{
        duration:1.3,
        ease:"expo",
        autoAlpha:1,
    })
    .to(innerRef.current,{
        duration:1.3,
        ease:"expo",
        startAt:{scale:1.2},
        scale:1
    },0)
    .to(getSiblings,{autoAlpha:0.2},0)
    };

    const handleMouseLeave =()=>{
        const getAllProjects = gsap.utils.toArray(".project__item")
        const tlLeave = gsap.timeline({
            defaults:{
                duration:1,
                ease:'none'
            }
        })
        tlLeave.to(outerRef.current,{
            autoAlpha:0,     
        })
        .to(getAllProjects,{autoAlpha:1},0)
    }
    
    return (
    <StyledProjectItem
    href=""
    className='project__item'
    data-color={bgcolor}
    data-image={src}
    onMouseEnter={handleMouseEnter}
    onMouseLeave={(event)=>handleMouseLeave(event)}
    >
    <span className='project__item-text'>{name}</span>
    </StyledProjectItem>
  )
}
