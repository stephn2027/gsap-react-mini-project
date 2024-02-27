import React, { useState, useEffect } from 'react';
import ReactVisibilitySensor from 'react-visibility-sensor';
import { FaTimes } from 'react-icons/fa';

export default function GalleryViewer({ images }) {
  const [imagesShownArray, setImagesShownArray] = useState(
    Array(images.length).fill(false)
  );

  const imageVisibleChange = (index, isVisible) => {
    if (isVisible) {
      setImagesShownArray((currentImagesShownArray) => {
        currentImagesShownArray[index] = true;
        return [...currentImagesShownArray];
      });
    }
  };

  return (
    <div className="columns-1 sm:columns-2 md:columns-3 gap-4 p-4 mt-20">
      {images &&
        images.map((imageUrl, index) => (
          <ReactVisibilitySensor
            key={index}
            partialVisibility={true}
            offset={{ bottom: 80 }}
            onChange={(isVisible) => imageVisibleChange(index, isVisible)}
          >
            <GridGalleryCard imageUrl={imageUrl} show={imagesShownArray[index]} />
          </ReactVisibilitySensor>
        ))}
    </div>
  );
}

function GridGalleryCard({ imageUrl, show }) {
  const [model, setModel] = useState(false);
  const [tempImageUrl, setTempImageUrl] = useState('');

  const toggleModel = (imageUrl) => {
    setTempImageUrl(imageUrl);
    setModel(!model);
  };

  useEffect(() => {
    if (!model) {
      // Reset image when modal is closed
      setModel(false);
    }
  }, [model]);

  return (
    <>
      {model && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90">
          <div className="relative max-w-full mx-auto overflow-hidden rounded-lg shadow-xl">
            <div
              className="absolute top-0 right-0 my-6 md:my-10 lg:my-12 md:m-4 cursor-pointer"
              onClick={() => setModel(false)}
            >
              <FaTimes className="text-white text-2xl md:text-4xl stroke-black stroke-[20px]" />
            </div>
            <div className='max-h-[95vh]'>
            <img src={tempImageUrl} alt="" className="w-full h-[92vh] m-6 mx-auto md:max-h-[95vh] max-w-[92vw] object-contain" loading='lazy'/>
            </div>
           
          </div>
        </div>
      )}
      <div
          onClick={() => toggleModel(imageUrl)}
          className={`relative transition-all duration-[0.8s] h-auto w-full rounded-xl transform mb-6 ${
            show ? '' : 'translate-y-28 sm:translate-y-8 md:translate-y-0 opacity-0'
          } ${model ? 'overflow-hidden' : ''}`}
        >
          <div className="absolute inset-0 z-10 flex transition duration-300 ease-in hover:opacity-0">
            <div className="absolute inset-0 bg-black opacity-70 rounded-xl"></div>
          </div>
          
          <img
            className="mx-auto object-center object-cover rounded-2xl cursor-pointer"
            src={imageUrl}
            alt=""
            loading='lazy'
          />
        </div>
    </>
  );
}
