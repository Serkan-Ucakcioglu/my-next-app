"use client";
import React from "react";
import { deleteAPI, getAPI } from "../../services/fetchAPI";
import { useTodosStore } from "@/store/todos";

export default function Todo({ item }) {
  const addTodo = useTodosStore((state) => state.addTodo);
  const deleteItem = async () => {
    try {
      const response = await deleteAPI("todos", item.id);
      const data = await getAPI("todos");
      await addTodo(data);
    } catch (error) {
      console.log(error, "catch err");
    }
  };

  return (
    <div
      id={item?.id}
      className="flex justify-between items-center p-4 border border-2 hover:bg-gray-200 cursor-pointer hover:ease-in ease-in duration-300"
    >
      <div>{item?.title}</div>
      <button onClick={deleteItem}>🗑️</button>
    </div>
  );
}