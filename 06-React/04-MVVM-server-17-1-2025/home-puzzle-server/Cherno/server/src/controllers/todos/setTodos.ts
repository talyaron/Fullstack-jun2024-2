import { Request, Response } from 'express';
import Todo from '../../model/todos/todosModel';

export const addTodo = async (req: Request, res: Response) => {
    try {
        const { title, content, ifDone } = req.body;

        const newTodo = new Todo({
            title,
            content,
            ifDone
        });

        const savedTodo = await newTodo.save();

        res.status(201).json({ message: 'Todo saved', savedTodo });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error saving Todo', error });
    }
};

export const updateTodo = async (req: Request, res: Response) => {
    try {
        const { id, ifDone } = req.body;

        const updatedTodo = await Todo.findByIdAndUpdate(id, { ifDone }, { new: true });
        if (!updatedTodo) throw new Error(`Todo not found`);

        res.status(201).json({ message: 'Updated Todo', state: updatedTodo.ifDone });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error updating Todo', error });
    }
}