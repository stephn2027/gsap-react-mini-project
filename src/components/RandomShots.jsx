import React from 'react';

import SectionHeading from './SectionHeading';
import { randomShots } from '../assets/works';
import GalleryViewer from './GalleryViewer';

export default function RandomShots() {
  return (
    <section className="h-full p-6 sm:py-8 lg:py-12 bg-[#b0aeac]">
     <div className='mt-20'>
     <SectionHeading>Nature and Random Shots</SectionHeading>
     </div>
      
     <GalleryViewer images={randomShots}/>
    </section>
  );
}
