import React from 'react';

import SectionHeading from './SectionHeading';
import { groupShots } from '../assets/works';
import GalleryViewer from './GalleryViewer';

export default function GroupShots() {
  return (
    <section className="h-full py-6 sm:py-8 lg:py-12 bg-[#b3a8b3]">
      
      <div className='mt-28'>
      <SectionHeading>Group Shots</SectionHeading>
      </div>
     <GalleryViewer images={groupShots}/>
    </section>
  );
}
