import express from 'express';
import { addTask } from '../controllers/task/addTask';
import { getDoneTasks, getTasks, getUnDoneTasks } from '../controllers/task/getTasks';
import { removeTask } from '../controllers/task/removeTask';
import { markTaskAsDone } from '../controllers/task/markAsDone';


const router = express.Router();
router.post("/addTask", addTask );
router.post("/deleteTask", removeTask );
router.post("/markTaskAsDone", markTaskAsDone );
router.get("/getTaskById/:id", );
router.get("/get-all-tasks", getTasks);
router.get("/get-done-tasks", getDoneTasks);
router.get("/get-unDone-tasks", getUnDoneTasks);




export default router