"use client";
import { useState } from "react";
import { deleteAPI, putAPI, renderData } from "../../services/fetchAPI";
import { useTodosStore } from "@/store/todos";

export default function Todo({ item }) {
  const [update, setUpdate] = useState(false);
  const [val, setVal] = useState("");
  const addTodo = useTodosStore((state) => state.addTodo);

  const deleteItem = async () => {
    try {
      const response = await deleteAPI("todos", item.id);
      await renderData(addTodo);
    } catch (error) {
      throw new Error(error);
    }
  };

  const completed = async () => {
    try {
      const todo = {
        title: item.title,
        completed: !item.completed,
        userId: item.userId,
      };

      const response = await putAPI("todos", item.id, todo);
      await renderData();
    } catch (error) {
      throw new Error(error);
    }
  };

  const titleUpdate = async (e) => {
    if (e.key == "Enter") {
      try {
        const todo = {
          title: val,
          completed: item.completed,
          userId: item.userId,
        };
        const response = await putAPI("todos", item.id, todo);
        await setUpdate((prev) => !prev);
        await renderData();
      } catch (error) {
        throw new Error(error);
      }
    }
  };

  return (
    <div
      id={item?.id}
      className={`flex justify-between items-center p-4 border border-2 hover:bg-gray-200 cursor-pointer hover:ease-in ease-in duration-300 ${
        item?.completed && "bg-green-200 hover:bg-green-300"
      }`}
    >
      {update == false ? (
        <div>{item?.title}</div>
      ) : (
        <input
          defaultValue={item.title}
          onChange={(e) => setVal(e.target.value)}
          onKeyDown={(e) => titleUpdate(e)}
          className="border border-2 border-gray-100 p-4 w-full h-4 text-black outline-none bg-gray-200 rounded "
        />
      )}

      <div className="flex items-center gap-2 p-2">
        <button onClick={() => setUpdate((prev) => !prev)} className="p-1">
          ✏️
        </button>
        <button onClick={completed}>
          {item.completed == false ? " ✅" : "❌"}
        </button>
        <button onClick={deleteItem}>🗑️</button>
      </div>
    </div>
  );
}
