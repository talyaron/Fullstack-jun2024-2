import mongoose from 'mongoose';

const todoSchema = new mongoose.Schema({
  userId: { 
    type: String,
    required: true },
  title: { 
 type: String,
 required: true },

  description: { 
 type: String, 
 required: true },

isDone: { 
 type: Boolean, 
 default: false },
}, { timestamps: true });

const Todo = mongoose.model('Todo', todoSchema);
export default Todo;