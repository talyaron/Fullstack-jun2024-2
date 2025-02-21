import express from "express";
import { login } from "../controllers/user/login";
import { register } from "../controllers/user/register";
import { getUserDetails } from "../controllers/user/getUser";
const router = express.Router();

router.post("/login", login);
router.post("/register", register);
router.get("/details", getUserDetails);
// router.get("/playerDetails", fetchPlayerDetails);


export default router;
