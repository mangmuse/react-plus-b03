import React from "react";

const ContentInput = () => {
  return (
    <div className="flex items-center relative mt-2 w-full h-[100px] rounded-xl border-2 border-[rgb(28, 29, 34, 0.06)]">
      <input
        type="text"
        placeholder="댓글을 남겨보세요"
        className="w-full h-full pl-4 pr-14 rounded-xl focus:outline-none"
      />
      <button className="text-[0.63rem] w-[50px] h-[21px] absolute bottom-2 right-2 rounded-3xl border-2 border-[rgba(28, 29, 34, 0.06)]">
        등록
      </button>
    </div>
  );
};

export default ContentInput;
