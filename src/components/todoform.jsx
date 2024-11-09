"use client";

import { useState } from "react";
import { getAPI, postAPI } from "../../services/fetchAPI";
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
    const data = await getAPI("todos");
    await addTodo(data);
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
          className="bg-primary hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          +
        </button>{" "}
      </div>
      <button className="flex justify-end mt-2">Completed get</button>
    </div>
  );
}

export default Todoform;
