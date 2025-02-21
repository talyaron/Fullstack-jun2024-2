import { TodoModel } from "../../Model/todoList";
import { secretKey } from "../../server";
import jwt from "jwt-simple";

export async function addTask(req: any, res: any) {
  try {
    const { user } = req.cookies;
    const {task} = req.body;
    if (!user) throw new Error("user not logged in ");

    const decoded = jwt.decode(user, secretKey);

    if (!decoded) throw new Error("error decoding user");

    const id = decoded.userId;
    if (!id) throw new Error("error getting id");

    const _task = 
     new TodoModel({
       creatorId:id,
       isDone:false,
       text:task,
        });
        await _task.validate();
    
       await _task.save();

  } catch (err: any) {
    console.log(err);
    res.status(500).json({ message: "Error fetching data", err });
  }
}
