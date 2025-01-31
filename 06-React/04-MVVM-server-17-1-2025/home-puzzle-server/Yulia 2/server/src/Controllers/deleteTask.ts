import TaskModel from "../Models/ToDoListModel";

export const deleteTask = async (req: any, res: any) => {
  try {
    const { _id } = req.params;

    const task = await TaskModel.findByIdAndDelete(_id);

    if (!task) {
      return res.status(404).json({ message: "Task not found." });
    }

    res.status(200).json({ message: "Task deleted successfully." });
  } catch (error) {
    console.error("Error deleting task:", error);
    res.status(500).json({ message: "Failed to delete task." });
  }
};
