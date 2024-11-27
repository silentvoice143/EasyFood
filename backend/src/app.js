import express from "express";
import connectDB from "./config/dbConfig.js";
import authRoutes from "./routes/userRoutes.js";

const app = express();

app.use(express.json());

connectDB();

// Use the auth routes
app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

export default app;
