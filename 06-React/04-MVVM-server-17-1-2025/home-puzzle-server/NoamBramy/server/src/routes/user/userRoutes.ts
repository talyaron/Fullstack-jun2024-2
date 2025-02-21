import express from 'express';
import { createUser } from '../../controllers/user/createUser';
import { login } from '../../controllers/auth/login';

const router = express.Router();

router.post('/create-user', createUser);
router.post('/login', login)

export default router;
