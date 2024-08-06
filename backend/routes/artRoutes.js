import express from "express";
import {
  comment,
  getArtsController,
  toggleLike,
  uploadArt,
} from "../controllers/artController.js";
import protect from "../middlewares/authMiddleware.js";
const router = express.Router();

router.route("/upload").post(protect, uploadArt);
router.route("/toggleLike/:id").post(protect, toggleLike);
router.route("/comment/:id").post(protect, comment);
router.route("/:id").get(protect, getArtsController);
export default router;
