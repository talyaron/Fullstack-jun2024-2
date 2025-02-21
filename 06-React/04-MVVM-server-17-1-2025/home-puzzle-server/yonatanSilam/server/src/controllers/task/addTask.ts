import mongoose from "mongoose";
import { tasksModel } from "../../models/taskModel";
const secret = process.env.JWT_SECRET as string;
import jwt from "jwt-simple";

export async function addTask(req: any, res: any) {
  try {
    const { user: token } = req.cookies;
    const { text } = req.body;
    if (!token) {
      return res.status(401).send({ error: "User not authenticated" });
    }
    if (!text) {
      throw new Error("Please fill all fields");
    }
    const decoded = jwt.decode(token, secret);

    const newTask = new tasksModel({
      text: text,
      userId: new mongoose.Types.ObjectId(decoded),
    });
    await newTask.save();
    return res.status(201).send({ message: "task added successfully" });
  } catch (error: any) {
    console.error(error);
    return res.status(500).send({ error: error.message });
  }
}
