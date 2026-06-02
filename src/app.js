import dotenv from "dotenv";
dotenv.config();

import e from "express";
import connectDB from "./config/db.config.js";
const app = e();

app.use(e.json());

connectDB();

// Routes
import aboutRouter from "./modules/about/about.route.js";

app.get("/", (req, res) => {
  res.send("Welcome to the My Portfolio baskend");
});

app.use("/api/v1", aboutRouter);

export default app;
