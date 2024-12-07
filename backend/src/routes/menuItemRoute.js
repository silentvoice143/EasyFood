import express from "express";
import authMiddleware from "../middlewares/authMiddleware.js";
import {
  addMenuItem,
  getMenuItems,
  getMenuItemById,
  updateMenuItem,
  deleteMenuItem,
  getUserMenuItems,
} from "../controllers/menuItemController.js";

const router = express.Router();

router.post("/menu-items", authMiddleware, addMenuItem);
router.get("/menu-items/vendor", authMiddleware, getUserMenuItems);
router.get("/menu-items/customer", authMiddleware, getMenuItems);
router.get("/menu-items/:id", authMiddleware, getMenuItemById);
router.put("/menu-items/:id", authMiddleware, updateMenuItem);
router.delete("/menu-items/:id", authMiddleware, deleteMenuItem);

export default router;
