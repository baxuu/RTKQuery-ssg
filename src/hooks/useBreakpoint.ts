import { useEffect, useState } from "react";

interface Breakpoints {
  [key: string]: string;
}

const breakpointsConfig: Breakpoints = {
  md: "834px",
  lg: "1440px",
};

const useBreakpoints = (breakpointsConfig: Breakpoints = {}) => {
  const [breakpoint, setBreakpoint] = useState("");

  useEffect(() => {
    const handleResize = () => {
      const currentBreakpoint = Object.keys(breakpointsConfig).reduce(
        (acc, key) => {
          if (window.innerWidth >= parseInt(breakpointsConfig[key], 10)) {
            return key;
          } else {
            return acc;
          }
        },
        ""
      );
      setBreakpoint(currentBreakpoint);
    };

    if (window) {
      window.addEventListener("resize", handleResize);

      handleResize();

      return () => window.removeEventListener("resize", handleResize);
    }
  }, [breakpointsConfig]);
  return breakpoint;
};

export default () => useBreakpoints(breakpointsConfig);
