import express from 'express';
import { addTodo, updateTodo } from '../../controllers/todos/setTodos';
import { getUserTodos, getTodos } from '../../controllers/todos/getTodos';
import { deleteTodo } from '../../controllers/todos/deleteTodo';

const router = express.Router();

router.post('/add-todo', addTodo)
    .post('/update-todo', updateTodo);

router.get('/my-todos', getUserTodos)
    .get('/get-all-todos', getTodos);

router.delete('/delete-todo', deleteTodo )

export default router;