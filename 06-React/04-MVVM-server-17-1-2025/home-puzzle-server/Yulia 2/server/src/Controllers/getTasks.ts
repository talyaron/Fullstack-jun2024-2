import TaskModel from "../Models/ToDoListModel";

export const getTasks = async (req: any, res: any) => {
  try {
    // Get filter from query params, default to "all"
    const filter = (req.query.filter as string) || "all";

    // Define query object
    let query = {};

    if (filter === "done") {
      query = { isCompleted: true };
    } else if (filter === "undone") {
      query = { isCompleted: false };
    }

    // Fetch tasks based on query (if "all", return everything)
    const tasks = await TaskModel.find(query || {});

    res.status(200).json(tasks);
  } catch (error) {
    console.error("Failed to get tasks:", error);
    res.status(500).json({ message: "Failed to get tasks" });
  }
};
