import mongoose, { model, Schema } from "mongoose";

const TodoSchema = new Schema({
    isDone:Boolean,
    text:String,
    creatorId:String
});

export const TodoModel = model('Todo',TodoSchema);