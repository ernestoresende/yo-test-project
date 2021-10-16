import * as React from 'react';

export function useWindowSize() {
  /* Initialize state with undefined width/height so server and client renders match */
  const [windowSize, setWindowSize] = React.useState({
    width: undefined,
    height: undefined,
  });

  React.useEffect(() => {
    /* Handler to call on window resize */
    function handleResize() {
      /* Set window width/height to state */
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    /* Only execute all the code in client side */
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize);
      /* Call handler right away so state gets updated with initial window size */
      handleResize();
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);
  return windowSize;
}
