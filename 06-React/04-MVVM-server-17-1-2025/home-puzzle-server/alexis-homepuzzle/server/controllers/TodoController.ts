import { Request, RequestHandler, Response } from "express";
import { Todo } from "../models/TodoModel";

export const getTodos: RequestHandler = async (req, res) => {
    try {
        const todos = await Todo.find();
        res.status(200).json(todos); // Send the response and stop execution.
    } catch (error) {
        res.status(500).json({ error: (error as Error).message });
    }
};

export const createTodo = async (req: Request, res: Response) => {
    try {
        const { title } = req.body;
        const newTodo = new Todo({ title });
        await newTodo.save();
        res.status(201).json(newTodo);
    } catch (error) {
        res.status(500).json({ error: (error as Error).message });
    }
};

export const deleteTodo = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        await Todo.findByIdAndDelete(id);
        res.json({ message: "Todo deleted" });
    } catch (error) {
        res.status(500).json({ error: (error as Error).message });
    }
};



export const toggleTodo: RequestHandler = async (req, res) => {
    try {
        const { id } = req.params;
        const todo = await Todo.findById(id);
        if (!todo) {
            res.status(404).json({ message: "Todo not found" });
            return; // Ensure void by not returning a Response object.
        }
        todo.completed = !todo.completed;
        await todo.save();
        res.status(200).json(todo); // Send the response but don't return it.
    } catch (error) {
        res.status(500).json({ error: (error as Error).message });
    }
};