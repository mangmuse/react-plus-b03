import { ComponentProps } from "react";

type ButtonProps = {
  onClick?: () => void;
} & ComponentProps<"button">;

const Button = ({ children, onClick, className, ...props }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 bg-blue-500 text-white rounded hover:brightness-90 active:brightness-90 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
