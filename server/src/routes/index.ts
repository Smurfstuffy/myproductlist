import express from "express";
import ProductController from "../controllers/ProductController";

const router = express.Router();

router.get('/product', ProductController.getAllProducts as any);
router.get('/product/:id', ProductController.getProductById as any);
router.post('/product', ProductController.addProduct as any);
router.put('/product/:id', ProductController.editProduct as any);
router.delete('/product/:id', ProductController.deleteProduct as any);

export default router;
