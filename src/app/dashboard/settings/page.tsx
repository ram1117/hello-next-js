'use client';
import React from 'react';
import Carousel from './Carousel';

function Page() {
  return (
    <Carousel className="md:w-3/5">
      <img src="/image1.jpg" alt="image 1" draggable={false} />
      <img src="/image2.jpg" alt="image 1" draggable={false} />
      <img src="/image3.jpg" alt="image 1" draggable={false} />
    </Carousel>
  );
}
export default Page;
