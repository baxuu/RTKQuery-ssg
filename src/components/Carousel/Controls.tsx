import React, { useMemo } from 'react';
import useBreakpoints from '@/hooks/useBreakpoint';
import Icon from '@/icons';

type ControlsProps = {
  length: number;
  activeIndex: number;
  setActiveIndex: (index: number) => void;
  itemsToShow: { desktop: number; tablet: number; mobile: number };
};

const Controls = ({
  length,
  activeIndex,
  setActiveIndex,
  itemsToShow,
}: ControlsProps) => {
  const { desktop, tablet, mobile } = itemsToShow;

  const breakpoint = useBreakpoints();

  const itemsToRender =
    breakpoint === 'lg' ? desktop : breakpoint === 'md' ? tablet : mobile;

  const pages = Math.ceil(length / itemsToRender);

  const pageButtons = useMemo(() => {
    return Array.from(Array(pages).keys()).map((i) => (
      <button
        key={i}
        className={`mx-2 h-2.5 w-2.5 rounded-full ${
          i === activeIndex / itemsToRender
            ? 'bg-blue-900'
            : 'bg-blue-300 hover:bg-blue-400'
        }`}
        onClick={() => setActiveIndex(i * itemsToRender)}
      ></button>
    ));
  }, [activeIndex, itemsToRender, pages, setActiveIndex]);

  return (
    <div className="mt-10 flex items-center justify-center text-center">
      <button
        className="absolute left-5 rounded-full p-2 hover:bg-gray-400 focus:outline-none"
        onClick={() => setActiveIndex(activeIndex - itemsToRender)}
        disabled={activeIndex === 0}
        style={{
          cursor: activeIndex === 0 ? 'default' : 'pointer',
          opacity: activeIndex === 0 ? 0.5 : 1,
        }}
      >
        <span className="sr-only">&#8592;</span>
        <Icon type="ArrowLeft" className="h-6" />
      </button>
      <div
        className="flex"
        style={{
          minWidth: `${pages * 12}px`,
        }}
      >
        {pageButtons}
      </div>
      <button
        className="absolute right-5 rounded-full p-2 hover:bg-gray-400 focus:outline-none"
        onClick={() => setActiveIndex(activeIndex + itemsToRender)}
        disabled={activeIndex + itemsToRender >= length}
        style={{
          cursor: activeIndex + itemsToRender >= length ? 'default' : 'pointer',
          opacity: activeIndex + itemsToRender >= length ? 0.5 : 1,
        }}
      >
        <span className="sr-only">&#8594;</span>
        <Icon type="ArrowRight" className="h-6" />
      </button>
    </div>
  );
};

export default Controls;
