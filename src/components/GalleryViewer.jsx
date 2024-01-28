import React from 'react';
import { useState } from 'react';
import ReactVisibilitySensor from 'react-visibility-sensor';

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
    <div
      className="columns-1 sm:columns-2 md:columns-3
    gap-4
    p-4
    mt-20
    "
    >
      {images &&
        images.map((imageUrl, index) => (
          <ReactVisibilitySensor
            key={index}
            partialVisibility={true}
            offset={{ bottom: 80 }}
            onChange={(isVisible) => imageVisibleChange(index, isVisible)}
          >
            <GridGalleryCard
              imageUrl={imageUrl}
              show={imagesShownArray[index]}
            />
          </ReactVisibilitySensor>
        ))}
    </div>
  );
}

function GridGalleryCard({ imageUrl, show }) {
  const [model, setModel] = useState(false);
  const [tempImageUrl, setTempImageUrl] = useState('');

  const getImg = (imageUrl) => {
    setTempImageUrl(imageUrl);
    setModel(true);
  };

  return (
    <>

    <div className={`"w-full h-[98vh] fixed top-0 left-0 flex justify-center align-middle bg-black bg-opacity-70 transition-opacity ease-in mx-auto duration-500 visibible-[.4s] p-8 overflow-hidden z-[99] transform mb-10 "${model?"visible scale-100 opacity-100":"hidden opacity-0 transform scale-0 z-0"}`}>
        <img src={tempImageUrl} alt="" className='w-auto max-w-full h-auto  h-max-full block leading-0 box-border  px-10 m-auto object-center object-contain ' />
    </div>
    <div
      onClick={() => getImg(imageUrl)}
      className={`relative transition ease-in-out duration-[0.8s] h-auto w-full rounded-xl transform mb-6 ${
        show ? '' : 'translate-y-28 opacity-0'
      }`}
    >
      <div className="absolute inset-0 z-10 flex transition duration-300 ease-in hover:opacity-0">
        <div className="absolute inset-0 bg-black opacity-70 rounded-xl"></div>
      </div>
      <img
        className="mx-auto object-center object-cover rounded-2xl cursor-pointer"
        src={imageUrl}
        alt=""
      />
    </div>
    </>
  );
}
