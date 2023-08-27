import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import useScrollPosition from './useScrollPosition';
import styles from './style.module.css';
import LeftArrow from '/public/arrow1.svg';
import RightArrow from '/public/arrow2.svg';

const Carousel = ({
  children,
  className,
}: {
  children: React.ReactNode[];
  className: string;
}) => {
  const [index, setIndex] = useState(0);
  const listRef = useRef<HTMLElement>(null);
  const isAtStart = index === 0;
  const isAtEnd = index === children.length - 1;

  const options = {
    root: listRef.current,
    rootMargin: '0px',
    threshold: 0.6,
  };

  useEffect(() => {
    scrollToIndex(index);
  }, []);

  const setIndexes = (index: number) => {
    setIndex(index);
    // setViewPortItemIndex(index);
  };

  const handlePrev = () => {
    if (index > 0) scrollToIndex(index - 1);
  };

  const handleNext = () => {
    if (index < children.length - 1) scrollToIndex(index + 1);
  };

  const handleDotClick = (index: number) => {
    scrollToIndex(index);
  };

  function scrollToIndex(index: number) {
    const listNode = listRef.current;
    listNode?.scrollBy(0, listNode.clientWidth);
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
    <div
      className={`flex flex-col items-center justify-center relative ${className}`}
    >
      <ul
        className={`flex w-4/5 overflow-x-scroll h-[50vh] md:h-[70vh] ${styles['scroll-container']} gap-8`}
        ref={listRef}
      >
        {children.map((child, index) => {
          const itemRef = useRef(null);
          useScrollPosition(itemRef, setIndexes, options);
          return (
            <li
              className={`relative scroll-item ${styles['scroll-item']} min-w-[90%] md:min-w-[80%]`}
              // style={{ minWidth: '80%' }}
              draggable={false}
              key={index + 1}
              data-index={index}
              ref={itemRef}
            >
              {child}
            </li>
          );
        })}
      </ul>
      <div className="flex gap-8 my-8">
        {children.map((item, itemIndex) => (
          <button
            key={itemIndex + 1}
            className={`border-2 border-black p-2 rounded-full ${
              index === itemIndex ? `bg-blue-500` : `bg-white-500`
            }`}
            onClick={() => {
              handleDotClick(itemIndex);
            }}
          ></button>
        ))}
      </div>
      <div className="flex justify-between absolute inset-x-0 w-full">
        <button
          className="disabled:opacity-30"
          disabled={isAtStart}
          onClick={handlePrev}
        >
          <Image
            src={LeftArrow}
            alt="left arrow marker"
            height={24}
            width={24}
          ></Image>
        </button>
        <button
          onClick={handleNext}
          className="disabled:opacity-30"
          disabled={isAtEnd}
        >
          <Image
            src={RightArrow}
            alt="right arrow marker"
            height={24}
            width={24}
          ></Image>
        </button>
      </div>
    </div>
  );
};
export default Carousel;
