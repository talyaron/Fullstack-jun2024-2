import Todo from "../../model/todo/todoModel";

export const getTodos = async (req:any, res:any) => {
  try {
    const userId = req.cookies.userId;
    const todos = await Todo.find({ userId });
    res.status(200).json(todos);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch todos." });
  }
};