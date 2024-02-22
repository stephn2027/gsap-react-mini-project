import React from 'react';

import SectionHeading from './SectionHeading';
import { portraits } from '../assets/works';
import GalleryViewer from './GalleryViewer';

export default function TokyoPortraits() {
  return (
    <section className="h-full p-6 sm:py-8 lg:py-12 bg-[#b5b5b2]">
      <div className="max-w-[1920px] m-auto">
        <div className="mt-20">
          <SectionHeading>Portraits</SectionHeading>
        </div>
      <GalleryViewer images={portraits} />
      </div>

    </section>
  );
}
