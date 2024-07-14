"use client";
import dynamic from "next/dynamic";
import TodoItem from "../TodoItem";
import { TDefaultTodoRes, TDefaultTodo } from "@/types/scheduler.type";

interface TodoBlockProps {
  title: string;
  todos?: TDefaultTodo[] | null;
  // todoItems:
}

const TodoBlock = ({ title, todos }: TodoBlockProps) => {
  // const TodoItem = dynamic(() => import("../TodoItem"), {
  //   loading: () => <TodoItemSkeleton />,
  // });
  return (
    <div className="flex flex-col justify-center items-center gap-y-4 border rounded-md border-dashed border-slate-600 p-6 w-full sm:w-[380px]">
      <h4 className="w-full text-left pb-8 font-semibold text-[#1C1D22]">{title}</h4>
      {/* 리스트 받아와서 돌리는 부분 */}
      <ul className="w-full space-y-6">
        {todos && todos.map((todo) => <TodoItem isShared={false} item={todo} key={todo.id} />)}
      </ul>
    </div>
  );
};

export default TodoBlock;
