"use server";
// pages/api/todos.js
import {
  createTodo,
  deleteTodo,
  getAllTodos,
  updateTodo,
} from "../../../services/prismaServiceOperations";

export default async function handler(req, res) {
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        const todos = await getAllTodos("todos");
        res.status(200).json(todos);
      } catch (error) {
        res.status(500).json({ error: "Error fetching todos" });
      }
      break;

    case "POST":
      try {
        const { title, userId, completed } = req.body;
        console.log(title, userId, completed, "req body");

        const newTodo = await createTodo("todos", title, userId, completed);
        res.status(201).json(newTodo);
      } catch (error) {
        res.status(500).json({ error: "Error creating todo" });
      }
      break;

    case "PUT":
      try {
        const { id } = req.query;
        const { title, completed, userId } = req.body;
        const updatedTodo = await updateTodo(
          "todos",
          id,
          title,
          completed,
          userId
        );
        res.status(200).json(updatedTodo);
      } catch (error) {
        res.status(500).json({ error: "Error updating todo" });
      }
      break;
    case "DELETE":
      try {
        const { id } = req.query;
        console.log("api id", id);
        await deleteTodo("todos", id);
        res.status(204).end();
      } catch (error) {
        res.status(500).json({ error });
      }
      break;

    default:
      res.setHeader("Allow", ["GET", "POST", "PUT", "DELETE"]);
      res.status(405).end(`Method ${method} Not Allowed`);
      break;
  }
}
