import express from "express";
import { setTodo } from "../controllers/setTodo";
import { getTodos } from "../controllers/getTodos";

const router = express.Router();

router.post("/set-todo", setTodo);
router.get("/get-todos", getTodos);


export default router;
