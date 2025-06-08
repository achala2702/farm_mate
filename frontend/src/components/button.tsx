"use client";

import React from "react";
import { Icon } from "@iconify/react";

interface buttonProps {
  icon?: string;
  text: string;
  type?: "button" | "submit";
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
}

const Button: React.FC<buttonProps> = ({
  icon,
  text,
  type = "button",
  onClick,
  className,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${className} flex items-center justify-center gap-2 md:gap-4 text-sm md:text-base cursor-pointer active:scale-95 transition-all opacity-100 hover:opacity-80 duration-150`}
    >
      {icon ? <Icon icon={icon} className="w-3 h-3 md:w-4 md:h-4" /> : ""}
      {text}
    </button>
  );
};

export default Button;
