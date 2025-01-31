import { Router } from "express";
import { setToDo } from "../../controllers/toDo/setTitle";
import { getToDos } from "../../controllers/toDo/getTitle";
import { isDone } from "../../controllers/toDo/isDoneTitle";
import { deleteTitle } from "../../controllers/toDo/deleteTitle";

const router = Router();

router.post("/set-title", setToDo);
router.get("/get-title", getToDos);
router.post("/is-done/:id", isDone);
router.delete("/delete-title", deleteTitle);

export default router;
