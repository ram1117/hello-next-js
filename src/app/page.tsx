import React from 'react';

import Link from 'next/link';

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
    </main>
  );
}
