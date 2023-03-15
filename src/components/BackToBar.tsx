import Link from "next/link";
import React from "react";
import Icon from "@/icons";

type BackToBarProps = {
  path: string;
  title: string;
};

const BackToBar = ({ path, title }: BackToBarProps) => {
  return (
    <div className="flex h-14 items-center justify-between bg-blue-500">
      <div className="ml-8">
        <Link href={path}>
          <div className="text-md flex items-center font-bold text-white">
            <Icon type="ArrowLeft" className="h-5" />
            {title}
          </div>
        </Link>
      </div>
    </div>
  );
};

export default BackToBar;
