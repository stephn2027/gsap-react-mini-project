import React from 'react';

import SectionHeading from './SectionHeading';
import { portraits } from '../assets/works';
import GalleryViewer from './GalleryViewer';

export default function TokyoPortraits() {
  return (
    <section className="h-full py-6 sm:py-8 lg:py-12  bg-[#b5b5b2]">
      <SectionHeading>Portraits</SectionHeading>
     <GalleryViewer images={portraits}/>
    </section>
  );
}
