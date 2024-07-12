import { ComponentProps } from "react";

type ButtonProps = {
  size?: "sm" | "md" | "lg";
  color?: "primary" | "secondary";
  onClick?: () => void;
} & ComponentProps<"button">;

const Button = ({
  size = "md",
  color = "primary",
  children,
  onClick,
  className,
  ...props
}: ButtonProps) => {
  let buttonBaseStyled =
    "px-4 py-2.5 border border-2 border-black hover:brightness-90 active:brightness-90 font-semibold ";

  switch (size) {
    case "sm":
      buttonBaseStyled += "w-24 rounded-full text-sm ";
      break;
    case "md":
      buttonBaseStyled += "w-36 rounded-full ";
      break;
    case "lg":
      buttonBaseStyled += "w-full rounded ";
      break;
  }

  switch (color) {
    case "primary":
      buttonBaseStyled += "bg-black text-white ";
      break;
    case "secondary":
      buttonBaseStyled += "bg-white text-black ";
  }

  return (
    <button
      onClick={onClick}
      className={`${buttonBaseStyled} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
