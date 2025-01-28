import { mongo , model } from "mongoose";
import { Request, Response } from "express";
import { ToDoModel } from "../../model/toDoModel/toDoModel";

export function setToDo(req: Request, res: Response){
    try{
        const title = req.body;
        const newTodo = new ToDoModel(title);
        newTodo.validateSync();
        newTodo.save();

        res.status(201).json({ message: "Success to set a11 new to do", newTodo });
        console.log(`your new todo is :${newTodo} successfully`);
    }
    catch(error){
        res.status(500).json({message: "Erroas yosef dasr"});
    }
}
