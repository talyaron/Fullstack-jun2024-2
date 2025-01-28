import { tasksModel } from "../../models/taskModel";

export async function addTask(req: any, res: any) {
  try {
    const { text } = req.body;

    if (!text) {
      throw new Error("Please fill all fields");
    }

    const newTask = new tasksModel({
      text,
    });
    await newTask.save();
    return res.status(201).send({ message: "task added successfully" });
  } catch (error: any) {
    console.error(error);
    return res.status(500).send({ error: error.message });
  }
}
