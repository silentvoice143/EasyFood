// models/User.js
import mongoose from "mongoose";
import jwt from "jsonwebtoken";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  businessName: String,
  address: String,
  isVerified: {
    type: Boolean,
    default: false,
  },
  signupStep: {
    type: Number,
    default: 1,
  },
  otp: String,
});

// Method to generate auth token
userSchema.methods.generateAuthToken = function () {
  const token = jwt.sign(
    { _id: this._id, username: this.username, email: this.email },
    process.env.AUTH_SECRET,
    { expiresIn: "1h" }
  );
  return token;
};

const User = mongoose.model("User", userSchema);

export default User;
