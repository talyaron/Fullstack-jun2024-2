import express from 'express';
import { addTask } from '../controllers/task/addTask';
import { getTasks } from '../controllers/task/getTasks';


const router = express.Router();
router.post("/addTask", addTask );
router.get("/getTaskById/:id", );
router.get("/get-all-tasks", getTasks);



export default router