import mongoose, { Schema, Document } from "mongoose";

// Define the Task interface
export interface ITask extends Document {
  text: string;
  isCompleted: boolean;
}

// Define the Task schema
const TaskSchema: Schema = new Schema({
  text: {
    type: String,
    required: true,
    trim: true,
  },
  isCompleted: {
    type: Boolean,
    default: false,
  },
});

// Create and export the Task model
const Task = mongoose.model<ITask>("Task", TaskSchema);

export default Task;
