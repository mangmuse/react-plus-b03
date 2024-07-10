import { ComponentProps, useState } from "react";

type ButtonProps = ComponentProps<"button"> & {
  type?: "modify" | "delete" | "confirm" | "cancel";
};

const Button = ({ children, className, type, ...props }: ButtonProps) => {
  const [buttonType, setButtonType] = useState(type);

  const getButtonClass = () => {
    if (buttonType === "modify") {
      return "text-white border rounded-3xl";
    } else if (buttonType === "delete") {
      return "text-white border rounded";
    } else if (buttonType === "confirm") {
      return "text-black border rounded-3xl";
    } else if (buttonType === "cancel") {
      return "";
    } else {
      return "";
    }
  };

  return (
    <button
      className={`px-4 py-2 bg-black text-white rounded-3xl hover:brightness-90 active:brightness-90 ${getButtonClass()} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
