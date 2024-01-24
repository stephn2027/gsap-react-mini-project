import React from 'react'
import GalleryViewer from './GalleryViewer'
import SectionHeading from './SectionHeading'
import { portraits } from '../assets/works'


export default function TokyoPortraits() {
  return (
    <section className=''>
        <SectionHeading>Portraits</SectionHeading>
        <GalleryViewer photos={portraits}></GalleryViewer>
    </section>
    
  )
}
