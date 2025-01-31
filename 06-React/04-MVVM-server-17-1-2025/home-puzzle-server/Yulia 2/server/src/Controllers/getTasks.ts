import TaskModel from "../Models/ToDoListModel";

export const getTasks = async (req: any, res: any) => {
  try {
    // get the filter parameter from the query string
    const filter = req.query.filter as string;

    // Define the query object based on the filter value
    let query = {};

    if (filter === "done") {
      query = { isCompleted: true };
    } else if (filter === "undone") {
      query = { isCompleted: false };
    }

    // Fetch tasks based on the query object
    const tasks = await TaskModel.find(query);

    // Return the tasks to the client
    res.status(200).json(tasks);
  } catch (error) {
    console.error("Failed to get tasks:", error);
    res.status(500).json({ message: "Failed to get tasks" });
  }
};
