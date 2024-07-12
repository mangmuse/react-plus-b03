"use client";

import Button from "../Button";
import Input from "../Input";

const TodoInput = () => {
  return (
    <div>
      <Input required label="투두 제목" />
      <Input label="투두 내용" />
      <Input label="아이디" />
      <Input label="아이디" />

      <Button size="lg" className="mt-8 mx-auto w-full">
        투두 추가하기
      </Button>
    </div>
  );
};

export default TodoInput;
