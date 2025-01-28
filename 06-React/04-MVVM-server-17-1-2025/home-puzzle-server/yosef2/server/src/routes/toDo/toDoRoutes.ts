import express from 'express';
import { setToDo } from '../../controllers/toDo/setTitle';
import { getToDos } from '../../controllers/toDo/getTitle';

const router = express.Router();

router.post('/set-title', setToDo);
router.get('/get-title', getToDos);


export default router;