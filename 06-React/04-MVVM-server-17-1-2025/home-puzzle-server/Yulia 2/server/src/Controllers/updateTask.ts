import TaskModel from "../Models/ToDoListModel";

export const updateTask = async (req: any, res: any) => {
  try {
    const { _id } = req.params;
    const { text, isCompleted } = req.body;

    if (!text && isCompleted === undefined) {
      return res.status(400).json({ error: "No valid fields to update" });
    }

    const updatedTask = await TaskModel.findByIdAndUpdate(
      _id,
      { $set: { text, isCompleted } },
      { new: true } // Return the updated document
    );

    if (!updatedTask) {
      return res.status(404).json({ error: "Task not found" });
    }

    res.status(200).json(updatedTask);
  } catch (error: any) {
    res
      .status(500)
      .json({ error: "Failed to update task", details: error.message });
  }
};
