import { useEffect } from 'react';

const useScrollPosition = (
  observerRef: HTMLLIElement,
  intersectCallback: Function,
  options: {
    root: React.RefObject<HTMLLIElement>;
    rootMargin: string;
    threshold: number;
  }
) => {
  const callbackFn = (entries: IntersectionObserverEntry[]) => {
    const [entry] = entries;
    if (entry.isIntersecting) {
      const refIndex = parseInt(observerRef.current?.dataset.index, 10);
      intersectCallback(refIndex);
    }
  };

  useEffect(() => {
    const intersectionObserver = new IntersectionObserver(callbackFn, options);
    if (observerRef.current) intersectionObserver.observe(observerRef.current);

    return () => {
      if (observerRef.current)
        intersectionObserver.unobserve(observerRef.current);
    };
  }, [observerRef, options]);
};

export default useScrollPosition;
