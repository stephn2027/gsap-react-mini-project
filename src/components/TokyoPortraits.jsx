import React from 'react';

import SectionHeading from './SectionHeading';
import { portraits } from '../assets/works';
import GalleryViewer from './GalleryViewer';

export default function TokyoPortraits() {
  return (
    <section className="h-screen py-6 sm:py-8 lg:py-12 mt-10">
      <SectionHeading>Portraits</SectionHeading>
     <GalleryViewer images={portraits}/>
    </section>
  );
}
