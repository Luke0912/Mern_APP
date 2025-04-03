import express from "express"
import productRouter from "./productRoutes.js"

const v1Route = express.Router()

v1Route.use("/product",productRouter);

export default v1Route;