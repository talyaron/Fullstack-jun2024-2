import { Schema, model } from "mongoose";
export interface Task {
  done: boolean;
  text: string;
}

export const PlayerSchema = new Schema({
  done: {
    type: Boolean,
    default: false,
  },
  text: {
    type: String,
  },
  // userId: {
  //   type: Schema.Types.ObjectId,
  //   ref: "User",
  // },
});

export const tasksModel = model("Task", PlayerSchema);
