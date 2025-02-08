import mongoose from "mongoose";
import { tasksModel } from "../../models/taskModel";
import jwt from "jwt-simple";

const secret = process.env.JWT_SECRET as string;

export async function getTasks(req: any, res: any) {
  try {
    const { user: token } = req.cookies;
    if (!token) {
      return res.status(401).send({ error: "User not authenticated" });
    }
    const decoded = jwt.decode(token, secret);
    const tasks = await tasksModel.find({ userId:  new mongoose.Types.ObjectId(decoded) });
    res.status(200).send({ tasks });
  } catch (error: any) {
    console.log(error);
    res
      .status(500)
      .json({ message: `Internal server error ${error.message} ` });
  }
}
export async function getDoneTasks(req: any, res: any) {
  try {
    const completedTasks = await tasksModel.find({ done: true });
    res.status(200).send({ completedTasks });
  } catch (error: any) {
    console.log(error);
    res
      .status(500)
      .json({ message: `Internal server error ${error.message} ` });
  }
}
export async function getUnDoneTasks(req: any, res: any) {
  try {
    const unCompletedTasks = await tasksModel.find({ done: false });
    res.status(200).send({ unCompletedTasks });
  } catch (error: any) {
    console.log(error);
    res
      .status(500)
      .json({ message: `Internal server error ${error.message} ` });
  }
}
