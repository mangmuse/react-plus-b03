import { ComponentProps, useState } from "react";

type ButtonProps = ComponentProps<"button">;

const Button = ({ children, className, ...props }: ButtonProps) => {
  return (
    <button
      className={`px-4 py-2 bg-black text-white rounded-3xl hover:brightness-90 active:brightness-90 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
