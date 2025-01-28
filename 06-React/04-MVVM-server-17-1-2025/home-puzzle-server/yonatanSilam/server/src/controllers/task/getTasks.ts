import { tasksModel } from "../../models/taskModel";

export async function getTasks(req: any, res: any) {
    try {
        const tasks = await tasksModel.find();
        console.log(tasks)
        res.status(200).send({tasks});
    } catch (error: any) {
        console.log(error);
        res.status(500).json({ message: `Internal server error ${error.message} ` });
    }
}