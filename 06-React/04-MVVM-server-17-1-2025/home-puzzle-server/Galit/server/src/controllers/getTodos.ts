import { Request, Response, RequestHandler } from "express";
import Todo from "../models/TodoModel";

interface CustomRequest extends Request {
  cookies: {
    userId?: string; 
  };
}

export const getTodos: RequestHandler = async (req: any, res: any) => {
  try {
    const customReq = req as CustomRequest;
    const userId = customReq.cookies?.userId;

    if (!userId) {
      return res.status(400).json({ error: "User ID not found in cookies." });
    }

    const todos = await Todo.find({ userId });
    res.status(200).json(todos);
  } catch (err) {
    console.error(err); 
    res.status(500).json({ error: "Failed to fetch todos." }); // Return a 500 error
  }
};
