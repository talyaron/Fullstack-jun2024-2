import Todo from "../../model/todos/todosModel";

export async function deleteTodo(req: any, res: any)
{
    try
    {
        const { id } = req.body
        const todo = await Todo.findByIdAndDelete(id);

    }
    catch (error)
    {
        console.log(error);
        res.status(500).json({ message: "Server Error" });
    }

}