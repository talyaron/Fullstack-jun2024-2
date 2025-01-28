import { Request, Response } from "express";
import { ToDoModel } from "../../model/toDoModel/toDoModel";
import { Schema, model } from "mongoose";

export async function isDone(req: Request, res: Response){
    try{
        const { id } = req.params;
        const toDo = await ToDoModel.findByIdAndUpdate(id, { isDone: true }, { new: true });
        res.status(200).json(toDo);
    } catch(error){
        console.log(error);
        res.status(500).json({ message: "Internal server error" });
    }
}