import React, { cloneElement, forwardRef, Ref } from "react";

import icons from "./icons";

type IconProps = {
  type: keyof typeof icons;
  className?: string;
  alt?: string | boolean;
} & React.SVGAttributes<SVGElement>;

const Icon = forwardRef<SVGElement, IconProps>(
  (
    { type, className = "", alt, ...other }: IconProps,
    ref: Ref<SVGElement>
  ) => {
    const defaultProps = {
      color: "currentColor",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      alt: alt || "",
      ref,
      ...other,
    };

    return (
      <>
        {!!icons[type] && cloneElement(icons[type], defaultProps)}
        {alt && <span className="sr-only">{alt}</span>}
      </>
    );
  }
);

Icon.displayName = "Icon";

export default Icon;
