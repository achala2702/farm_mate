"use client";

import { useEffect, useState } from "react";

export default function useScreenWidth() {
  const [width, setWidth] = useState<number>(0);

  useEffect(() => {
    //fucntion to get the width
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    //get inital size
    handleResize();

    //add evenlister
    window.addEventListener("resize", handleResize);

    //remove evenlistern when unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return width;
}
