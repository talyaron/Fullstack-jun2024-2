import mongoose, { model, Schema } from "mongoose";

const UserSchema = new Schema({
   
    userName:String,
    email:{
        type:String,
        unique:true,
    },
    password:String,
});

export const UserModel = model('User',UserSchema);