import React from 'react';

import SectionHeading from './SectionHeading';
import { randomShots } from '../assets/works';
import GalleryViewer from './GalleryViewer';

export default function RandomShots() {
  return (
    <section className="h-screen py-6 sm:py-8 lg:py-12 mt-10">
      <SectionHeading>Nature and Random Shots</SectionHeading>
     <GalleryViewer images={randomShots}/>
    </section>
  );
}
