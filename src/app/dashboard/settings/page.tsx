'use client';
import React from 'react';
import Image from 'next/image';
import Carousel from './Carousel';

function Page() {
  return (
    <Carousel className="md:w-3/5">
      <div className="h-full w-full">
        <div className="w-full relative" style={{ height: '90%' }}>
          <Image src="/image1.jpg" alt="image 1" fill draggable={false} />
        </div>
        <h1 className="w-full text-center text-2xl">Football Image 1</h1>
      </div>
      <div className="h-full w-full">
        <div className="w-full relative" style={{ height: '90%' }}>
          <Image src="/image2.jpg" alt="image 2" fill draggable={false} />
        </div>
        <h1 className="w-full text-center text-2xl">Football Image 2</h1>
      </div>
      <div className="h-full w-full">
        <div className="w-full relative" style={{ height: '90%' }}>
          <Image src="/image3.jpg" alt="image 3" fill draggable={false} />
        </div>
        <h1 className="w-full text-center text-2xl">Football Image 3</h1>
      </div>
    </Carousel>
  );
}
export default Page;
