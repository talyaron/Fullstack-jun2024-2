import  express from "express"
import { registerUser } from "../Controllers/user/usrRegCont";


const router = express.Router()



router.post(`/register-user`,registerUser );
router.post(`/login-user`,)
router.post(`/logout-user`,)

export default router;