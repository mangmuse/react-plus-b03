interface TodoBlockProps {
  title: string;
  // todoItems:
}

const TodoBlock = ({ title }: TodoBlockProps) => {
  return (
    <div className="flex flex-col justify-center items-center gap-y-4 border rounded-md border-dashed border-slate-600 p-6 w-full sm:w-[380px]">
      <h4 className="w-full text-left pb-8 font-semibold text-[#1C1D22]">
        {title}
      </h4>
      {/* 리스트 받아와서 돌리는 부분 */}
      <ul className="w-full space-y-6">
        <li className="h-[140px] bg-slate-400 rounded-md"></li>
        <li className="w-full h-[140px] bg-slate-400 rounded-md"></li>
        <li className="w-full h-[140px] bg-slate-400 rounded-md"></li>
      </ul>
    </div>
  );
};

export default TodoBlock;
