import { Request, Response } from "express";
import { ToDoModel } from "../../model/toDoModel/toDoModel";

export const isDone = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { id } = req.params;

    const todo = await ToDoModel.findByIdAndUpdate(id,[{ $set: { isDone: { $not: "$isDone" } } }],{ new: true });

    if (!todo) {
      return res.status(404).json({ message: "Todo not found" });
    }

    return res.status(200).json(todo);
  } catch (error) {
    return res.status(500).json({ message: "Server error" });
  }
};
