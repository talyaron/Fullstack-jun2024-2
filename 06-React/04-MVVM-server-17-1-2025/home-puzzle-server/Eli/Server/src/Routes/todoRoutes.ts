import  express from "express"
import { fetchTodo } from "../Controllers/todo/fetchTodo";
import { addTask } from "../Controllers/todo/addTodoTask";
import { checkedTask } from "../Controllers/todo/checkedTodo";
import { deleteTask } from "../Controllers/todo/deleteTask";


const router = express.Router()



router.get(`/fetch-todo`,fetchTodo );
router.post(`/add-todo`,addTask );
router.post(`/checked-todo`,checkedTask );
router.post(`/delete-todo`,deleteTask );
export default router;