import React, { ComponentProps } from "react";
import Button from "../Button";

type propsHeader = ComponentProps<"header">;
const Header = ({ children, title }: propsHeader) => {
  return (
    <>
      <header className="pt-8 pr-16 pb-8 pl-10 bg-[#fff] border-2 shadow-[5px_5px_5px_0px_rgba(0,0,0,0.25)]">
        <h1>{title}</h1>
        <Button className="absolute top-6 right-10">일정 추가하기</Button>
      </header>
      {children}
    </>
  );
};

export default Header;
