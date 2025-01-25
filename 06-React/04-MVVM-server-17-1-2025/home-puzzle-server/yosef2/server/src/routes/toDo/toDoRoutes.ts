import express from 'express';
import { setToDo } from '../../controllers/toDo/setTitle';

const router = express.Router();

router.post('/set-title', setToDo);

export default router;