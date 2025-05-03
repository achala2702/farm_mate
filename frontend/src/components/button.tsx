import React from "react";

interface buttonProps {
  text: string;
  type?: "button" | "submit";
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
}

const Button: React.FC<buttonProps> = ({
  text,
  type = "button",
  onClick,
  className,
}) => {
  return (
    <button type={type} onClick={onClick} className={`${className}`}>
      {text}
    </button>
  );
};

export default Button;
