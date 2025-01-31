import { ToDoModel } from "../../model/toDoModel/toDoModel";
import { Request, Response } from "express";

export const deleteTitle = async (req: Request, res: Response) => {
    try{
        const { id } = req.body;
        if (!id) throw new Error("Invalid id");
        
        await ToDoModel.findByIdAndDelete(id);
        res.status(200).json({ message: "Title deleted" });
    }
    catch(error){
        console.log(error);
        res.status(500).json({ message: "Internal server error" });
    }
}