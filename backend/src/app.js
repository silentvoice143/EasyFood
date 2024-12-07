import express from "express";
import connectDB from "./config/dbConfig.js";
import authRoutes from "./routes/userRoutes.js";
import menuRoutes from "./routes/menuItemRoute.js";

const app = express();

app.use(express.json());

connectDB();

// Use the auth routes
app.use("/api/auth", authRoutes);
app.use("/api/menu", menuRoutes);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

export default app;
