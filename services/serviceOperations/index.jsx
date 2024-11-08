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

export async function createTodo(tableName) {
  try {
  } catch (error) {}
}
