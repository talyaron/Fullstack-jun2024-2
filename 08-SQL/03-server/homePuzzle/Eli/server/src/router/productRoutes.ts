import express from "express";
import authMiddleware from "../controllers/auth/authMiddleware";
import addProduct from "../controllers/productsControllers/addProduct";
import getProducts from "../controllers/productsControllers/getProducts";
import addToCartProduct from "../controllers/productsControllers/addToCartProduct";
import getCheckoutProducts from "../controllers/productsControllers/getCheckoutProducts";

const router = express.Router();

router.post("/add-product",authMiddleware,addProduct );
router.get("/get-products",getProducts );
router.post("/add-to-cart-product",authMiddleware,addToCartProduct );
router.get("/get-checkout-products",authMiddleware,getCheckoutProducts );

export default router;
