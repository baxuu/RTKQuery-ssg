import { useState } from "react";
import Slide from "./Slide";
import Controls from "./Controls";
import useBreakpoints from "@/hooks/useBreakpoint";

type CarouselProps<T> = {
  items: T[];
  renderItem: (item: T) => JSX.Element;
  itemsToShow: { desktop: number; tablet: number; mobile: number };
};

const Carousel = <T,>({ items, renderItem, itemsToShow }: CarouselProps<T>) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const length = items.length;
  const { desktop, tablet, mobile } = itemsToShow;

  const breakpoint = useBreakpoints();
  const itemsToRender =
    breakpoint === "lg" ? desktop : breakpoint === "md" ? tablet : mobile;

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div
          className="flex transition-all duration-500 ease-in-out "
          style={{
            transform: `translateX(-${activeIndex * (100 / itemsToRender)}%)`,
          }}
        >
          {items.map((item, index) => (
            <Slide
              key={index}
              width={`${100 / itemsToRender}%`}
              style={{
                paddingRight: "20px",
                paddingLeft:
                  itemsToRender % 1 !== 0 && index !== 0 ? undefined : "20px",
              }}
            >
              {renderItem(item)}
            </Slide>
          ))}
        </div>
      </div>
      <Controls
        length={length}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
        itemsToShow={itemsToShow}
      />
    </div>
  );
};

export default Carousel;
