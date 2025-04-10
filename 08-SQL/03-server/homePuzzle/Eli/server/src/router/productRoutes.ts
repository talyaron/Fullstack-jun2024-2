import express from "express";
import authMiddleware from "../controllers/auth/authMiddleware";
import addProduct from "../controllers/productsControllers/addProduct";
import getProducts from "../controllers/productsControllers/getProducts";

const router = express.Router();

router.post("/add-product",authMiddleware,addProduct );
router.get("/get-products",authMiddleware,getProducts );

export default router;
