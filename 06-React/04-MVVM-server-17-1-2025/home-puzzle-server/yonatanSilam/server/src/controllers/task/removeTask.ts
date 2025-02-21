import { tasksModel } from "../../models/taskModel";

export async function removeTask(req: any, res: any) {
  try {
    const { taskId } = req.body;

    if (!taskId) {
      throw new Error("not get taskId");
    }

    const deletedTask = await tasksModel.findByIdAndDelete(taskId);

    return res.status(201).send({ message: "task deletes successfully" });
  } catch (error: any) {
    console.error(error);
    return res.status(500).send({ error: error.message });
  }
}
