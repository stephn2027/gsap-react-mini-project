import React from 'react';

import SectionHeading from './SectionHeading';
import { couples } from '../assets/works';
import GalleryViewer from './GalleryViewer';

export default function CoupleShots() {
  return (
    <section className="h-screen py-6 sm:py-8 lg:py-12 mt-10">
      <SectionHeading>Couple Shots</SectionHeading>
     <GalleryViewer images={couples}/>
    </section>
  );
}
