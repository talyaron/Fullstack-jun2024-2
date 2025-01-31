import TaskModel from "../Models/ToDoListModel";

export const updateTask = async (req: any, res: any) => {
  try {
    const { _id } = req.params;
    const { isCompleted } = req.body;

    if (typeof isCompleted !== "boolean") {
      return res.status(400).json({ message: "Invalid data format" });
    }

    const updatedTask = await TaskModel.findByIdAndUpdate(
      _id,
      { isCompleted },
      { new: true }
    );

    if (!updatedTask) {
      return res.status(404).json({ message: "Task not found" });
    }

    res.status(200).json(updatedTask);
  } catch (error) {
    console.error("Error updating task:", error);
    res.status(500).json({ message: "Failed to update task." });
  }
};
