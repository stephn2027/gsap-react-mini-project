import React from 'react';
import AccordionServices from './AccordionServises';

export default function CardService({ serviceName, serviceText, img, servicePrice }) {
  return (
    <div
    className="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp"
    data-wow-duration="1s"
    style={{
      visibility: 'visible',
      animationDuration: '1s',
      animationName: 'fadeInUp',
    }}
  >
    <div className="pt-8 pb-4 px-8 mb-8 bg-gray-50 bg-opacity-50 rounded-lg border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
      <div className="inline-block text-gray-900 mb-4">
       <img src={img} alt="sample" />
      </div>
      <h3 className="text-lg leading-normal mb-2 font-semibold text-black">
        
        {serviceName}
      </h3>
      <p className="text-gray-500">
        {servicePrice}
        
      </p>
      <AccordionServices text={serviceText}/>
    </div>
    </div>
  );
}
