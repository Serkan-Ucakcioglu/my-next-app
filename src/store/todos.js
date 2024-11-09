"use client";
import { create } from "zustand";

export const useTodosStore = create((set) => ({
  todos: [
    {
      id: "28138123",
      title: "Test",
      completed: true,
    },
  ],
  addTodo: (item) => set((state) => ({ todos: item })),
}));
