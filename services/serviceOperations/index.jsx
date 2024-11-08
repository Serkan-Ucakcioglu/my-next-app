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
  } catch (error) {
    return { error: error.message };
  }
}
