"use client";
import TodoItem from "../TodoItem";
import { TDefaultTodo } from "@/types/scheduler.type";

interface TodoBlockProps {
  title: string;
  todos?: TDefaultTodo[] | null;
}

const TodoBlock = ({ title, todos }: TodoBlockProps) => {
  return (
    <div className="flex flex-col gap-y-4 border rounded-md border-dashed border-slate-600 p-6 w-full md:w-[460px] sm:w-[380px]">
      <h4 className="w-full text-left pb-8 font-semibold text-[#1C1D22]">{title}</h4>
      <ul className="w-full space-y-6">
        {todos && todos.map((todo) => <TodoItem isShared={false} item={todo} key={todo.id} />)}
      </ul>
    </div>
  );
};

export default TodoBlock;
