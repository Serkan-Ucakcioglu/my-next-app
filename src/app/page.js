"use client";
import Image from "next/image";
import Todo from "../components/todo";
import Todoform from "@/components/todoform";
import Todolist from "@/components/todolist";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Image
        src={
          "https://cdn.pixabay.com/photo/2020/01/21/18/39/todo-4783676_1280.png"
        }
        alt="logo"
        width={500}
        height={500}
      />

      <Todoform />
      <Todolist />
    </div>
  );
}
