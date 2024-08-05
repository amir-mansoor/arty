import express from "express";
import {
  comment,
  toggleLike,
  uploadArt,
} from "../controllers/artController.js";
import protect from "../middlewares/authMiddleware.js";
const router = express.Router();

router.route("/upload").post(protect, uploadArt);
router.route("/toggleLike/:id").post(protect, toggleLike);
router.route("/comment/:id").post(protect, comment);

export default router;
