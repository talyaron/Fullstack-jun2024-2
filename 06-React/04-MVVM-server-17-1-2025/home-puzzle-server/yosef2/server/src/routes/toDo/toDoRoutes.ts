import express from 'express';
import { setToDo } from '../../controllers/toDo/setTitle';
import { getToDos } from '../../controllers/toDo/getTitle';
import { isDone } from '../../controllers/toDo/isDoneTitle';


const router = express.Router();

router.post('/set-title', setToDo);
router.get('/get-title', getToDos);
router.post('/is-done', isDone);


export default router;