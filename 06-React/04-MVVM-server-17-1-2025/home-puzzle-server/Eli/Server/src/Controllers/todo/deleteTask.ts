import { TodoModel } from "../../Model/todoList";


export async function deleteTask(req: any, res: any) {
  try {
    const { id } = req.body;
   
    if (! id) throw new Error("no task id provided ");

    const taskFound = await TodoModel.findOneAndDelete({ _id: id });
    if (!taskFound) throw new Error("task not found!");

    res.status(200).json({message:"successfully fetched", taskFound});
  } catch (err: any) {
    console.log(err);
    res.status(500).json({message:"Error fetching data" , err});
  }
}
