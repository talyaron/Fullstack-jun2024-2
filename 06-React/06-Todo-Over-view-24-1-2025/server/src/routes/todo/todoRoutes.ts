import express from 'express';
import { addTodo } from '../../controllers/todo/setTodo';
const router = express.Router();

router.post("/add-todo", addTodo);



export default router;