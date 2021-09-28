import React, { useContext, useState, useMemo, useEffect } from "react";

const WindowWidthContext = React.createContext();

const useWindowWidth = () => {
  const context = useContext(WindowWidthContext);

  if (!context) {
    throw new Error(`useWindowWidth must be used within a WindowWidthProvider`);
  }

  return context;
};

const WindowWidthProvider = (props) => {
  const [windowWidth, setWindowWidth] = useState(0);
  const value = useMemo(() => [windowWidth, setWindowWidth], [windowWidth]);

  useEffect(() => {
    updateDimensions();

    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  const updateDimensions = () => {
    const width = window.innerWidth;
    setWindowWidth(width);
  };

  return <WindowWidthContext.Provider value={value} {...props} />;
};

export {WindowWidthProvider, useWindowWidth};