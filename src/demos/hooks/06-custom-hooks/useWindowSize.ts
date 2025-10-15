/*
 * Create a hook useWindowSize.
 * - It should return { width, height }.
 * - It should listen to the 'resize' event.
 * - On unmount, clean up the listener.
 */

import { useEffect, useState } from 'react';

const useWindowSize = () => {
  const [width, setWidth] = useState<number>(window.innerWidth);
  const [height, setHeight] = useState<number>(window.innerHeight);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return { width, height };
};

export default useWindowSize;
