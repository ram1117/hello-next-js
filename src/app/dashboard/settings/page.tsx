'use client';

import React, { useEffect, useRef, useState } from 'react';
import styles from './style.module.css'

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
    listNode?.scrollBy(0, listNode.clientWidth);
    // This line assumes a particular DOM structure:\
    if (listNode) {
      const imgNode: HTMLLIElement = listNode.querySelectorAll('li')[index];
      imgNode.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center',
      });
    }
  }

  return (
    <div className="border-2 ">
      <div>
        <ul
          className={`flex w-[500px] overflow-x-scroll ${styles['scroll-container']}`}
          ref={listRef}
        >
          <li className={`relative scroll-item ${styles['scroll-item']}`} style={{ minWidth: '100%' }}>
            <img src="/T-rex.jpg" alt="image 1" draggable={false} style={{objectFit:'cover'}} />
          </li>
          <li className={`relative scroll-item ${styles['scroll-item']}`} style={{ minWidth: '100%' }}>
            <img src="/T-rex.jpg" alt="image 1" draggable={false} style={{objectFit:'cover'}} />
          </li>
          <li className={`relative scroll-item ${styles['scroll-item']}`} style={{ minWidth: '100%' }}>
            <img src="/T-rex.jpg" alt="image 1" draggable={false} style={{objectFit:'cover'}} />
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
