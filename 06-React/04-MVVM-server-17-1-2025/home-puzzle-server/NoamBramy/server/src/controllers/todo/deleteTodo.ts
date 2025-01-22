import Todo from "../../model/todo/todoModel";

export const deleteTodo = async (req:any, res:any) => {
  try {
    const { id } = req.params;
    await Todo.findByIdAndDelete(id);
    res.status(200).json({ message: "Todo deleted successfully." });
  } catch (err) {
    res.status(500).json({ error: "Failed to delete todo." });
  }
};