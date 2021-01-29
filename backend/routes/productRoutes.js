import express from "express";
import {
  getProductById,
  getProducts,
} from "../controllers/productController.js";

const router = express.Router();

// @desc FETCH ALL PRODUCTS
// @route GET /api/products
// @access Public
router.route("/").get(getProducts);

// @desc FETCH SINGLE PRODUCTS
// @route GET /api/products/:id
// @access Public
router.route("/:id").get(getProductById);

export default router;
