import express from "express";
import {
  createCategory,
  getCategories,
  getCategoryById,
} from "../controllers/categories.js";
import multer from "multer";
const upload = multer();

const router = express.Router();

router.get("/categories", getCategories);
router.post("/categories", upload.single("backgroundPhoto"), createCategory);
router.post("/categories/:id", getCategoryById);

export default router;
