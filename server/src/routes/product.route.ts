import { Router } from "express";
import { createProduct, deleteProduct, getAllProducts, getProductById, updateProduct } from "../controllers/product.controller";
import { validate } from "../middlewares/validatioan.middlware";
import { ProductSchema } from "../validators/product.validator";

const router = Router();

router.get("/", getAllProducts);
router.get("/:id", getProductById);
router.post("/", validate(ProductSchema), createProduct);
router.put("/:id", validate(ProductSchema), updateProduct);
router.delete("/:id", deleteProduct);

export default router;
