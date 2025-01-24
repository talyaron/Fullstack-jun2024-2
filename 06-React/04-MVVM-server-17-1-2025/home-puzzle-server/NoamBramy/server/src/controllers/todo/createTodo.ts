import Todo from "../../model/todo/todoModel";

export const createTodo = async (req: any, res: any) => {
  try {
    const { title } = req.body;
    const userId = req.cookies.userId;

    if (!userId) {
      return res.status(400).json({ error: "User not authenticated" });
    }

    const newTodo = await Todo.create({ userId, title });
    res.status(201).json(newTodo);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to create todo." });
  }
};

