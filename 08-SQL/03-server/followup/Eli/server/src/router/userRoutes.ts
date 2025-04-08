import express from 'express';
import loginUser from '../controllers/userLogin';
import registerUser from '../controllers/userRegister';
const router = express.Router();

router
    .post("/register", registerUser);
    router.post("/login", loginUser);




export default router;