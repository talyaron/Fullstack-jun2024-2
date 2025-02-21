import TaskModel from "../Models/ToDoListModel";

export const addTask = async (req: any, res: any) => {
  try {
    const { text } = req.body;

    if (!text) {
      return res.status(400).json({ message: "Text field is required." });
    }

    const newTask = new TaskModel({ text });
    await newTask.save();

    res.status(201).json(newTask);
  } catch (error) {
    console.error("Error adding task:", error);
    res.status(500).json({ message: "Failed to add task." });
  }
};
