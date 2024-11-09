"use client";
import React, { useEffect, useState } from "react";
import { getAPI } from "../../services/fetchAPI";
import Todo from "./todo";

function Todolist() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getAllTodo() {
      const data = await getAPI("todos");
      setData(data);
    }
    getAllTodo();
  }, []);
  return (
    <div className="flex flex-col gap-2">
      {data?.slice(0, 20).map((item) => {
        return <Todo key={item.id} item={item} />;
      })}
    </div>
  );
}

export default Todolist;
