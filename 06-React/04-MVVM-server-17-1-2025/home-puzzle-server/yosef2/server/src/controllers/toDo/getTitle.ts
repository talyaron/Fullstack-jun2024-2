import { Request, Response } from "express";
import { ToDoModel } from "../../model/toDoModel/toDoModel";
import { Schema, model } from "mongoose";

export async function getToDos(req: Request, res: Response){
    try{
        const toDos = await ToDoModel.find();
        res.status(200).json(toDos);
    } catch(error){
        console.log(error);
        res.status(500).json({ message: "Internal server error" });
    
}
}