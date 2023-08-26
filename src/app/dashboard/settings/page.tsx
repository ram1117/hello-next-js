'use client';

import React, { useEffect, useRef, useState } from 'react';

function Page() {
  const [index, setIndex] = useState(1);
  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    scrollToIndex(index);
  }, [index]);

  const handlePrev = () => {
    if (index > 0) setIndex((prevIndex) => (prevIndex -= 1));
  };

  const handleNext = () => {
    if (index < 2) setIndex((prevIndex) => (prevIndex += 1));
  };

  function scrollToIndex(index: number) {
    const listNode = listRef.current;
    // This line assumes a particular DOM structure:\
    if (listNode) {
      const imgNode:HTMLLIElement[] = listNode.querySelectorAll('li')[index];
      imgNode.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center',
      });
      imgNode.classList.add('object-expand');
    }
  }

  return (
    <div className="border-2 ">
      <div>
        <ul className="flex w-[500px] overflow-x-scroll  gap-6 p-6" ref={listRef}>
          <li className="relative" style={{minWidth:'90%'}}>
            <img src="/buttongreen.jpg" alt="image 1" />
          </li>
          <li className="relative" style={{minWidth:'90%'}}>
            <img src="/dreams.jpg" alt="image 1" />
          </li>
          <li className="relative" style={{minWidth:'90%'}}>
            <img src="/buttongreen.jpg" alt="image 1" />
          </li>
        </ul>
      </div>
      <div>
        <button className="border-2 border-blue-500 p-4" onClick={handlePrev}>
          Prev
        </button>
        <button className="border-2 border-blue-500 p-4" onClick={handleNext}>
          Next
        </button>
      </div>
    </div>
  );
}
export default Page;
