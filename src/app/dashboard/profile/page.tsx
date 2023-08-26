'use client';

import React, { useEffect, useState } from 'react';

function Page() {
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    console.log(isLoading)
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    if (isLoading) {
      setLoadingProgress(75);
    }
    if (!isLoading) {
      setLoadingProgress(100);
    }
  }, [isLoading]);
  return (
    <div>
      <h2 className="text-3xl">Profile sample Page</h2>
      <div className="h-[20px] w-[20rem] bg-blue-200 rounded-full">
        <div
          className={`h-full bg-blue-700 rounded-full animate-pulse`}
          style={{
            width: `${loadingProgress}%`,
            transition: 'width 2s ease-in-out',
          }}
        ></div>
      </div>
    </div>
  );
}
export default Page;
