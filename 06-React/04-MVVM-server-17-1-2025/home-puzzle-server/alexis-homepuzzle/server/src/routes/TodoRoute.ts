import express from "express";
import asyncHandler from "../../utils/asyncHandler";
import { createTodo, deleteTodo, getTodos, toggleTodo } from "../controllers/TodoControllers";

const router = express.Router();

router.get("/todos", asyncHandler(getTodos));
router.post("/todos", asyncHandler(createTodo));
router.delete("/todos/:id", asyncHandler(deleteTodo));
router.patch("/todos/:id", asyncHandler(toggleTodo));

export default router;
