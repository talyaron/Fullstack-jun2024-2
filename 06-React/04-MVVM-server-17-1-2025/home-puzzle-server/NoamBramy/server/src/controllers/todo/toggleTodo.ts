import Todo from "../../model/todo/todoModel";

export const toggleTodo = async (req:any, res:any) => {
  try {
    const { id } = req.params;
    const todo = await Todo.findById(id);
    if(!todo) throw new Error("not found a todo.")
    todo.isDone = !todo.isDone;
    await todo.save(); //should be with updateOne
    res.status(200).json(todo);
  } catch (err) {
    res.status(500).json({ error: "Failed to toggle todo." });
  }
};