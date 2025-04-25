import express from "express";
import authMiddleware from "../controllers/auth/authMiddleware";
import addProduct from "../controllers/productsControllers/addProduct";
import getProducts from "../controllers/productsControllers/getProducts";
import addToCartProduct from "../controllers/productsControllers/addToCartProduct";
import getCheckoutProducts from "../controllers/productsControllers/getCheckoutProducts";
import buyProducts from "../controllers/productsControllers/buyProducts";
import removeProduct from "../controllers/productsControllers/removeFromProducts";

const router = express.Router();

router.post("/add-product",authMiddleware,addProduct );
router.post("/add-to-cart-product",authMiddleware,addToCartProduct );
router.post("/remove-from-cart-product",authMiddleware, removeProduct);

router.get("/get-products",getProducts );
router.get("/get-checkout-products",authMiddleware,getCheckoutProducts );
router.get("/buy-checkout-products",authMiddleware, buyProducts);



export default router;
