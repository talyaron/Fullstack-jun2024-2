import express from "express";
import checkCookie from "../controllers/auth/checkCookie";

const router = express.Router();

router.get("/checkCookie", checkCookie);

export default router;
