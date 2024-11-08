// pages/api/todos.js

import prisma from "../../../lib/prisma";
import { getAllTodos } from "../../../services/serviceOperations";

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
        const { title } = req.body;
        const newTodo = await prisma.todo.create({
          data: { title },
        });
        res.status(201).json(newTodo);
      } catch (error) {
        res.status(500).json({ error: "Error creating todo" });
      }
      break;

    case "PUT":
      try {
        const { id, title, completed } = req.body;
        const updatedTodo = await prisma.todo.update({
          where: { id },
          data: { title, completed },
        });
        res.status(200).json(updatedTodo);
      } catch (error) {
        res.status(500).json({ error: "Error updating todo" });
      }
      break;

    case "DELETE":
      try {
        const { id } = req.body;
        await prisma.todo.delete({
          where: { id },
        });
        res.status(204).end();
      } catch (error) {
        res.status(500).json({ error: "Error deleting todo" });
      }
      break;

    default:
      res.setHeader("Allow", ["GET", "POST", "PUT", "DELETE"]);
      res.status(405).end(`Method ${method} Not Allowed`);
      break;
  }
}
