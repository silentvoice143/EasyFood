import User from "../models/userModels";
import bcrypt from "bcrypt";
import crypto from "crypto";
import { sendEmail } from "../utils/sendEmail";
import { Request, Response } from "express";

export const addUser: any = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    console.log("step 1 hit", email, password);

    // Check if user already exists
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).send("User already exists");
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create a new user
    user = new User({
      username: email,
      email,
      password: hashedPassword,
      signupStep: 1,
    });

    await user.save();

    res.send({
      message: "Step 1 completed",
      userId: user._id,
      email: user.email,
    });
  } catch (err) {
    res.status(500).send("Server error" + err);
  }
};

export const signupStep2: any = async (req: Request, res: Response) => {
  try {
    const { userId, businessName, address } = req.body;

    // Find user by ID and update
    const user = await User.findByIdAndUpdate(
      userId,
      {
        businessName,
        address,
        signupStep: 2,
      },
      { new: true }
    );

    if (!user) {
      return res.status(400).send("User not found");
    }

    res.send({
      message: "Step 2 completed",
      userId: user._id,
      email: user.email,
    });
  } catch (err) {
    res.status(500).send("Server error");
  }
};

// Step 1: Generate OTP and send to email
export const sendOtpEmail: any = async (req: Request, res: Response) => {
  const { userid } = req.body;

  try {
    // Generate a 6-digit OTP
    const otp = crypto.randomInt(1000, 9999).toString();

    // Find user by email
    const user = await User.findOne({ _id: userid });
    if (!user) {
      return res.status(400).send("User not found");
    }

    // Save OTP in the user document (for verification later)
    user.otp = otp;
    await user.save();

    // Send OTP to the user's email
    const subject = "Your OTP for email verification";
    const text = `Your OTP is: ${otp}`;
    await sendEmail(user.email, subject, text);

    res.status(200).send("OTP sent to your email");
  } catch (err) {
    res.status(500).send("Server error");
  }
};

// Step 2: Verify OTP
export const verifyOtp: any = async (req: Request, res: Response) => {
  const { userid, otp } = req.body;

  try {
    // Find user by email
    const user = await User.findOne({ _id: userid });
    if (!user) {
      return res.status(400).send("User not found");
    }

    // Check if OTP matches
    if (user.otp === otp) {
      user.isVerified = true;
      user.otp = undefined; // Clear OTP after successful verification
      await user.save();
      res.status(200).send("Email verified successfully");
    } else {
      res.status(400).send("Invalid OTP");
    }
  } catch (err) {
    res.status(500).send("Server error");
  }
};

export const loginUser: any = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).send("Invalid email or password");
    }

    // Compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).send("Invalid email or password");
    }

    // Generate auth token
    const token = user.generateAuthToken();

    // Check if user is verified
    if (!user.isVerified) {
      return res.status(200).send({
        message: "User not verified",
        userid: user._id,
        email: user.email,
        signupStep: user.signupStep,
        token: token,
      });
    }

    // User is verified and logged in
    res.status(200).send({
      message: "Login successful",
      token: token,
    });
  } catch (err) {
    res.status(500).send("Server error");
  }
};
