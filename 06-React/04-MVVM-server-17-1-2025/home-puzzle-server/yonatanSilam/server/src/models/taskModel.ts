import { Schema, model } from "mongoose";
export interface Task {
  done: boolean;
  text: string;
  userId:string
}

export const TaskSchema = new Schema({
  done: {
    type: Boolean,
    default: false,
  },
  text: {
    type: String,
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

export const tasksModel = model("Task", TaskSchema);
