"use client";
import React from "react";

export default function Todo({ item }) {
  return (
    <div
      className="p-4 border border-2 hover:bg-gray-200 cursor-pointer hover:ease-in ease-in duration-300"
      id={item?.id}
    >
      {item?.title}
    </div>
  );
}
