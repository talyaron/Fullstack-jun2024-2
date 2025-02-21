import express from "express";
import { createTodo } from "../../controllers/todo/createTodo";
import { getTodos } from "../../controllers/todo/getTodos";
import { toggleTodo } from "../../controllers/todo/toggleTodo";
import { deleteTodo } from "../../controllers/todo/deleteTodo";


const router = express.Router();

router.post("/create-todo", createTodo);
router.get("/get-todos", getTodos);
router.patch("/toggle-todo/:id", toggleTodo);
router.delete("/delete-todo/:id", deleteTodo);

export default router;
