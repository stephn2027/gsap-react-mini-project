import React from 'react';

import SectionHeading from './SectionHeading';
import { couples } from '../assets/works';
import GalleryViewer from './GalleryViewer';

export default function CoupleShots() {
  return (
    <section className="h-full py-6 sm:py-8 lg:py-12 bg-[#a3b1ae]">
      <SectionHeading>Couple Shots</SectionHeading>
     <GalleryViewer images={couples}/>
    </section>
  );
}
