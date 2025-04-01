import { tasksModel } from "../../models/taskModel";

export async function markTaskAsDone(req: any, res: any) {
  try {
    const { taskId } = req.body;

    if (!taskId) {
      throw new Error("not get taskId");
    }

    const updatedTask = await tasksModel.findByIdAndUpdate(taskId , { done: true });

    return res.status(201).send({ message: "task deletes successfully" });
  } catch (error: any) {
    console.error(error);
    return res.status(500).send({ error: error.message });
  }
}
