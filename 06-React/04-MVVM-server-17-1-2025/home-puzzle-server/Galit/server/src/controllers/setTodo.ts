import { Request, Response } from "express";
import Todo from "../models/TodoModel";

export const setTodo = async (req: Request, res: Response) => {
  try {
    const { title, description, isDone } = req.body;

    const newTodo = await Todo.create({ title, description, isDone });
    res.status(201).json(newTodo);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to create todo." });
  }
};
