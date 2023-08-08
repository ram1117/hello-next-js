import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const Page = () => {
  const router = useRouter();
  const [pageId, setPageId] = useState(0);
  useEffect(() => {
    if (router.isReady) {
      setPageId(parseInt(router.query.slug, 10));
    }
  }, []);
  return <h2>This is Page {pageId}</h2>;
};
