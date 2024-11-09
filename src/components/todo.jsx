"use client";
import React from "react";
import { deleteAPI, getAPI, putAPI } from "../../services/fetchAPI";
import { useTodosStore } from "@/store/todos";

export default function Todo({ item }) {
  const addTodo = useTodosStore((state) => state.addTodo);
  const deleteItem = async () => {
    try {
      const response = await deleteAPI("todos", item.id);
      const data = await getAPI("todos");
      await addTodo(data);
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
      const data = await getAPI("todos");
      await addTodo(data);
    } catch (error) {
      throw new Error(error);
    }
  };

  return (
    <div
      id={item?.id}
      className={`flex justify-between items-center p-4 border border-2 hover:bg-gray-200 cursor-pointer hover:ease-in ease-in duration-300 ${
        item?.completed && "bg-green-200 hover:bg-green-300"
      }`}
    >
      <div>{item?.title}</div>
      <div className="flex items-center gap-2">
        <button onClick={completed}>
          {item.completed == false ? " ✅" : "❌"}
        </button>
        <button onClick={deleteItem}>🗑️</button>
      </div>
    </div>
  );
}
