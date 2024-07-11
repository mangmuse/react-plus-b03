import TodoBlock from "../TodoBlock";

const TodoList = () => {
  return (
    <div className="flex flex-wrap justify-around gap-4">
      <TodoBlock title="미완료 TODO" />
      <TodoBlock title="완료 TODO" />
    </div>
  );
};

export default TodoList;
