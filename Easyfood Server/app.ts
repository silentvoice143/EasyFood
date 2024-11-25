import express, { Request, Response } from "express";
import connectDB from "./src/config/dbConfig";
import authRoutes from "./src/routes/userRoutes";

const app = express();

app.use(express.json());

connectDB();

// Use the auth routes
app.use("/api/auth", authRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

export default app;
