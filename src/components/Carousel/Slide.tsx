import React, { ReactNode } from "react";

type SlideProps = {
  children: ReactNode;
  width: string;
  style?: React.CSSProperties;
};

const Slide = ({ children, width, style }: SlideProps) => {
  return (
    <div
      style={{ ...style, width: width }}
      className={`flex-none flex-shrink-0 flex-grow-0`}
    >
      {children}
    </div>
  );
};

export default Slide;
