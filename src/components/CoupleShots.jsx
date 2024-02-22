import React from 'react';

import SectionHeading from './SectionHeading';
import { couples } from '../assets/works';
import GalleryViewer from './GalleryViewer';

export default function CoupleShots() {
  return (
    <section className="h-full p-6 sm:py-8 lg:py-12 bg-[#a3b1ae]">
      <div className="max-w-[1920px] m-auto">
        <div className="mt-20">
          <SectionHeading>Couple Shots</SectionHeading>
        </div>

        <GalleryViewer images={couples} />
      </div>
    </section>
  );
}
