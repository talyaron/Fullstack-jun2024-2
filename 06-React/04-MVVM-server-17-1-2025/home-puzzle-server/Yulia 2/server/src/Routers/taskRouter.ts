import express from "express";
import { addTask } from "../Controllers/addTask";
import { getTasks } from "../Controllers/getTasks";
import { deleteTask } from "../Controllers/deleteTask";
import { updateTask } from "../Controllers/updateTask";

const router = express.Router();

// Routes for task operations
router.post("/tasks", addTask); // Add a new task
router.get("/tasks", getTasks); // Get all tasks
router.delete("/tasks/:_id", deleteTask); // Delete a task
router.patch("/tasks/:_id", updateTask); // Update a task

export default router;
