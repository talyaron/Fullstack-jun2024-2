import express from "express";
import { getTodos, createTodo, deleteTodo, toggleTodo } from "../../controllers/TodoController";
import asyncHandler from "../../utils/asyncHandler";

const router = express.Router();

router.get("/todos", asyncHandler(getTodos));
router.post("/todos", asyncHandler(createTodo));
router.delete("/todos/:id", asyncHandler(deleteTodo));
router.patch("/todos/:id", asyncHandler(toggleTodo));

export default router;
