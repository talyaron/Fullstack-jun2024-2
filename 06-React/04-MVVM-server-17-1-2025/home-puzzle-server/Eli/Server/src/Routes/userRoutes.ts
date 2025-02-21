import  express from "express"
import { registerUser } from "../Controllers/user/usrRegCont";
import { loginUser } from "../Controllers/user/userLoginCont";


const router = express.Router()



router.post(`/register-user`,registerUser );
router.post(`/login-user`,loginUser)
router.post(`/logout-user`,)

export default router;