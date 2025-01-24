import express from "express";
import { setTodo } from "../controllers/setTodo";
import { getTodos, removeTodo } from "../controllers/getTodos";

const router = express.Router();

router.post("/set", setTodo);
router.get("/", getTodos);
router.delete("/remove", removeTodo);
export default router;