"use client";

const TestComponent = () => {
  return (
    <button
      onClick={async () => {
        {
          const res = await fetch("http://localhost:3000/api/todo", {
            method: "POST",
          });
          if (res) {
            const data = await res.json();
            console.log(data);
          }
        }
      }}
    >
      통신버튼
    </button>
  );
};

export default TestComponent;
