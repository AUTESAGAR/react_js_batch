import express from "express";
import { AddProduct } from "../controller/Product.js";
import upload from "../middleware/FileHandle.js";

const router = express.Router();

router.post("/AddProduct",upload.single("banner"),AddProduct);

export default router;