"use client";
import { useState } from "react";
import { postAPI, renderData } from "../../services/fetchAPI";

function Todoform() {
  const [val, setVal] = useState("");

  const onsubmit = async () => {
    const todo = {
      title: val,
      completed: false,
      userId: Date.now(),
    };
    await postAPI("todos", todo);
    await renderData();
    setVal("");
  };

  return (
    <div className="flex flex-col w-[500px]">
      <div className="flex items-center gap-2 ">
        <input
          value={val}
          onChange={(e) => setVal(e.target.value)}
          className="w-full px-4 py-2 border rounded border-2 outline-none"
          type="text"
        />
        <button
          onClick={onsubmit}
          disabled={val < 4}
          className="bg-primary hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:opacity-25"
        >
          +
        </button>{" "}
      </div>
      <button className="flex justify-end mt-2">Completed get</button>
    </div>
  );
}

export default Todoform;
