import TaskModel from "../Models/ToDoListModel";

export const updateTask = async (req: any, res: any) => {
  try {
    const { _id } = req.params; // Get the task ID from request parameters
    const { text, isCompleted } = req.body; // Get the fields to update from the request body

    // Ensure at least one valid field is provided for update
    if (text === undefined && isCompleted === undefined) {
      return res.status(400).json({ error: "No valid fields to update" });
    }

    // Create an update object dynamically based on provided fields
    const updateData: Partial<{ text: string; isCompleted: boolean }> = {};
    if (text !== undefined) updateData.text = text;
    if (isCompleted !== undefined) updateData.isCompleted = isCompleted;

    // Find and update the task by ID, return the updated document
    const updatedTask = await TaskModel.findByIdAndUpdate(_id, updateData, {
      new: true, // Ensures the updated document is returned
    });

    if (!updatedTask) {
      // If no task is found with the provided ID
      return res.status(404).json({ error: "Task not found" });
    }

    // Return the updated task to the client
    res.status(200).json(updatedTask);
  } catch (error: any) {
    // Handle any unexpected errors during the update operation
    res.status(500).json({
      error: "Failed to update task",
      details: error.message,
      statusText: "Internal Server Error",
    });
  }
};
