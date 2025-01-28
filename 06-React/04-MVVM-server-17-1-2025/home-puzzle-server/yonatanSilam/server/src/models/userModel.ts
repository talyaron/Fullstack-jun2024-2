import mongoose, { Schema, model } from "mongoose";
type User = {
  userName: string;
  password: string;
};

export const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique:true
  },
  password: {
    type: String,
    required: true,
  }
});

export const UserModel = model("User", UserSchema);
