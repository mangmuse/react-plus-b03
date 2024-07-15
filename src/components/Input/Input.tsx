"use client";

import { ComponentProps, useId } from "react";

type InputProps = {
  label?: string;
  required?: boolean;
} & ComponentProps<"input">;

const Input = ({ label, required, id, ...props }: InputProps) => {
  const inputUId = useId();
  const inputId = id || inputUId;

  return (
    <div className="flex flex-col gap-y-1.5 [&+&]:mt-4">
      <label htmlFor={inputId} className="text-sm font-semibold">
        <span>{label}</span>
        {required && <span className="text-red-500 text-sm font-semibold">*</span>}
      </label>
      <input
        className="border border-gray-400 rounded px-4 py-2.5 focus:outline-none focus:border-gray-950 transition"
        type="text"
        id={inputId}
        {...props}
      />
    </div>
  );
};

export default Input;
