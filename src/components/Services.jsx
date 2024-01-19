import React from 'react';
import CardService from './CardService';
import SectionHeading from './SectionHeading';
import { services } from '../assets/services';

export default function Services() {
  return (
    <section
      id="services"
      className="section relative mt-[10vh] pb-8 md:pt-16 md:pb-0 "
    >
    <SectionHeading>Services</SectionHeading>
      <div className="container xl:max-w-6xl mx-auto px-4">
        <header className="text-center mx-auto mb-12 lg:px-20">

          <p className="text-gray-500 leading-relaxed font-light text-xl mx-auto pb-2">
            Save time managing advertising &amp; Content for your business.
          </p>
        </header>

        <div className="flex flex-wrap flex-row -mx-4 text-center">
        {services.map((service)=><CardService serviceName={service.name} servicePrice={service.price} img={service.img} serviceText={service.text} />)}
          
        </div>
      </div>
    </section>
  );
}
