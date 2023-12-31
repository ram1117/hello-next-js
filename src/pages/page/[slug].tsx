import React, { useEffect, useState } from 'react';

import { useRouter } from 'next/router';

function Page() {
  const router = useRouter();
  const [pageId, setPageId] = useState(0);
  useEffect(() => {
    if (router.isReady) {
      const value = router.query.slug;
      if (typeof value === 'string') {
        setPageId(parseInt(value, 10));
      }
    }
  }, [router]);
  return (
    <>
      <h2>
        This is Page
        {pageId}
      </h2>
      <p> simple page navigation</p>
    </>
  );
}

export default Page;
