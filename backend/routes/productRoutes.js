import express from "express"
import { createProduct, deleteProduct, getAllProduct, updateProductById } from "../controllers/productControllers.js"

const productRouter = express.Router()

productRouter.post("/",createProduct)
productRouter.delete("/:id",deleteProduct)
productRouter.get("/",getAllProduct)
productRouter.put("/:id",updateProductById)

export default productRouter