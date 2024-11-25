import { Router } from "express";
import {
  addUser,
  signupStep2,
  verifyOtp,
  sendOtpEmail,
  loginUser,
} from "../controllers/userControllers";

const router = Router();

// Step 1: Register with email and password
router.post("/signup/step1", addUser);

// Step 2: Save business name and address
router.post("/signup/step2", signupStep2);

// Step 3: Verify email (for simplicity, we'll just update the isVerified field here)
router.post("/signup/step3", verifyOtp);

router.post("/signup/sendOtp", sendOtpEmail);

router.post("/login", loginUser);

export default router;
