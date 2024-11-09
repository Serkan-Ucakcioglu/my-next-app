"use client";
import React, { useEffect, useState } from "react";
import { getAPI } from "../../services/fetchAPI";
import Todo from "./todo";
import { useTodosStore } from "@/store/todos";

function Todolist() {
  const todos = useTodosStore((state) => state.todos);
  const addTodo = useTodosStore((state) => state.addTodo);

  useEffect(() => {
    async function getAllTodo() {
      const data = await getAPI("todos");
      await addTodo(data);
    }

    getAllTodo();
  }, []);

  return (
    <>
      <div className="flex flex-col gap-2 w-[500px]">
        {todos?.map((item) => {
          return <Todo key={item.id} item={item} />;
        })}
      </div>
    </>
  );
}

export default Todolist;
