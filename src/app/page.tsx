"use client"

import React from 'react';
import { useState } from 'react';
import Link from 'next/link';

const minusIcon = '-';
const plusIcon = '+';

function Accordion({ title, content }) {
  const [expanded, setExpanded] = useState(false);
  const toggleExpanded = () => setExpanded((current) => !current);

  return (
    <div
      className="my-2 sm:my-4 md:my-6 shadow-sm cursor-pointer bg-white"
      onClick={toggleExpanded}
    >
      <div className="px-6 text-left items-center h-20 select-none flex justify-between flex-row">
        <h5 className="flex-1">{title}</h5>
        <div className="flex-none pl-2">{expanded ? minusIcon : plusIcon}</div>
      </div>
      <div
        className={`px-6 pt-0 overflow-hidden transition-[max-height] duration-500 ease-in ${
          expanded ? 'max-h-40' : 'max-h-0'
        }`}
      >
        <p className="pb-4 text-left">{content}</p>
      </div>
    </div>
  );
}

const lorem =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center items-center">
      <h1 className="w-1/2 text-4xl m-4">Hello</h1>
      <div className="w-full flex items-center justify-between m-5">
        <Link href="dashboard/profile/">Profile</Link>
        <Link href="agreement">Conditions</Link>
        <Link href="dashboard/settings/">Settings</Link>
      </div>
      <div className="w-full flex items-center justify-between m-5">
        <Link href="signup">Signup</Link>
        <Link href="signin">Signin</Link>
      </div>
      <div className="w-1/2 flex justify-between">
        <Link
          className="text-red-400"
          href={{
            pathname: '/page/1',
            query: '1',
          }}
        >
          Page 1
        </Link>
        <Link
          href={{
            pathname: '/page/2',
            query: '2',
          }}
        >
          Page 2
        </Link>
        <Link
          href={{
            pathname: '/page/3',
            query: '3',
          }}
        >
          Page 3
        </Link>
      </div>
      <div className="py-16 md:py-20 lg:py-24 px-4 bg-black">
        <section className="max-w-6xl mx-auto text-center">
          <Accordion title="Accordion #1" content={lorem} />
          <Accordion title="Accordion #2" content={lorem} />
          <Accordion title="Accordion #3" content={lorem} />
        </section>
      </div>
    </main>
  );
}
