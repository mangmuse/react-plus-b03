import React from "react";
import Button from "../Button";

const Header = ({ children, title }) => {
  return (
    <>
      <div className="pt-8 pr-16 pb-8 pl-10 bg-[#fff] shadow-[-1px_5px_5px_0px_rgba(0,0,0,0.25)]">
        <h1>{title}</h1>
        <Button className="absolute top-6 right-10">일정 추가하기</Button>
      </div>
      {children}
    </>
  );
};

export default Header;
