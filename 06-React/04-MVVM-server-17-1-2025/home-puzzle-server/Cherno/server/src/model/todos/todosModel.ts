import { Schema, model, Document } from 'mongoose';

interface ITodo extends Document {
    title: string;
    content: string;
    ifDone: boolean;
}

const todoSchema = new Schema<ITodo>({
    title: { type: String, required: true },
    content: { type: String, required: true },
    ifDone: { type: Boolean, default: false }
});

const Todo = model<ITodo>('Todo', todoSchema);

export default Todo;