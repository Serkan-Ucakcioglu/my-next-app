"use client";

import { useState } from "react";
import { getAPI, postAPI, renderData } from "../../services/fetchAPI";
import { useTodosStore } from "@/store/todos";

function Todoform() {
  const [val, setVal] = useState("");
  const addTodo = useTodosStore((state) => state.addTodo);

  const onsubmit = async () => {
    const todo = {
      title: val,
      completed: false,
      userId: Date.now(),
    };
    await postAPI("todos", todo);
    await renderData();
  };
  return (
    <div className="flex flex-col w-[500px]">
      <div className="flex items-center gap-2 ">
        <input
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
