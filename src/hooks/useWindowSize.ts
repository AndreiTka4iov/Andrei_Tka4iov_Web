import { useEffect, useState } from "react";

interface Size {
  width: number;
  height: number;
}

export function useWindowSize(): Size {
  const [windowSize, setWindowSize] = useState<Size>({
    width: 0,
    height: 0,
  });

  const handleResize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
}