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

// Put todo
export async function updateTodo(tableName, id, title, completed) {
  try {
    const updatedTodo = await prisma[tableName].update({
      where: { id },
      data: { title, completed },
    });
    res.status(200).json(updatedTodo);
  } catch (error) {
    res.status(500).json({ error: "Error updating todo" });
  }
}

//Delete Todo
export async function deleteTodo(tableName, id) {
  try {
    await prisma[tableName].delete({
      where: { id },
    });
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ error: "Error deleting todo" });
  }
}
