import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

useGetWindowSize.propTypes = {};

function useGetWindowSize() {
  const isClient = typeof window === "object";
  const getSize = () => ({
    width: isClient ? window.innerWidth : undefined,
    height: isClient ? window.innerHeight : undefined,
  });
  const [size, setSize] = useState(getSize);
  useEffect(() => {
    window.addEventListener("resize", () => {
      setSize(getSize);
    });
    return () => window.removeEventListener("resize", () => setSize(getSize));
  }, []);
  return size;
}

export default useGetWindowSize;
