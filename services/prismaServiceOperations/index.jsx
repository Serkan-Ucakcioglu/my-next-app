"use server";

import prisma from "../../lib/prisma";

// GET ALL
export async function getAllTodos(tableName) {
  try {
    const data = await prisma[tableName].findMany();
    return data;
  } catch (error) {
    return { error: error.message };
  }
}
// Create todo
export async function createTodo(tableName, title) {
  try {
    const data = await prisma[tableName].create({
      data: { title },
    });
    return data;
  } catch (error) {
    return { error: error.message };
  }
}

// Put todo
export async function updateTodo(tableName, id, title, completed) {
  try {
    const updatedTodo = await prisma[tableName].update({
      where: { id },
      data: { title, completed },
    });
    return { updatedTodo };
  } catch (error) {
    return { error };
  }
}

//Delete Todo
export async function deleteTodo(tableName, id) {
  try {
    console.log(id, "id");
    const deleted = await prisma[tableName].delete({
      where: { id: String(id) },
    });
    return deleted;
  } catch (error) {
    return { error };
  }
}
