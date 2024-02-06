import React from 'react';
import { useState } from 'react';
import ReactVisibilitySensor from 'react-visibility-sensor';
import { FaXmark } from "react-icons/fa6";
import { useEffect } from 'react';


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

  useEffect(()=>{
    if(model){
      
    }
  },[model])

  return (
    <>
    {model?<div className={`"w-full h-auto fixed top-0 left-0 flex flex-wrap justify-center align-middle bg-black bg-opacity-90 transition-opacity ease-in duration-500 visibible-[.6s] p-8 overflow-hidden z-[99] transform mb-10  "${model?"visible scale-100 opacity-100 ":"hidden opacity-0 transform scale-0 z-0"}`}>
    <div className='fixed top-[10px] right-[10px] z-[99] h-auto w-auto p-6 m-4 text-white cursor-pointer ' 
    onClick={()=>{setModel(false)}}
    >
    <FaXmark className='h-[2rem] w-[2rem]'/>
    </div>
    <div>
    <img src={tempImageUrl} alt="" className='w-[100vw] max-w-full h-[100vh] h-max-full flex leading-0 box-border m-auto py-6 justify-center  align-stretch object-center object-contain mx-auto mt-[-2rem]' />
    </div>
        
    </div>:
    <div
      onClick={() => getImg(imageUrl)}
      className={`relative transition ease-in-out duration-[0.8s] h-auto w-full rounded-xl transform mb-6 ${
        show ? '' : 'translate-y-28 opacity-0'
      } ${model?"overflow-hidden":""}`}
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
    }
    
    
    </>
  );
}
