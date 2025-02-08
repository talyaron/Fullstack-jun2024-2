import { model, Schema } from "mongoose";

export const ToDoSchema = new Schema({
    title: {type: String, required: true},
    isDone: {type: Boolean, required: true, default: false},
    // user: {type: Schema.Types.ObjectId, ref: "User"}
});

export const ToDoModel = model("ToDo", ToDoSchema);