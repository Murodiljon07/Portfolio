import dotenv from "dotenv";
dotenv.config();
import e from "express";
import cors from "cors";
import connectDB from "./config/db.config.js";
connectDB();

const app = e();

app.use(
  cors({
    origin: "https://murodiljon-07.vercel.app",
    credentials: true,
  })
);

app.use(e.json());

app.get("/", (req, res) => {
  res.send("Welcome to the My Portfolio baskend");
});

// Routes
import adminRouter from "./modules/admin/admin.route.js";
import authRouter from "./modules/auth/auth.route.js";
import skillsRouter from "./modules/skills/skills.route.js";
import projectsRouter from "./modules/projects/projects.route.js";
import messagesRouter from "./modules/messages/messages.route.js";

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/admin", adminRouter);
app.use("/api/v1/skills", skillsRouter);
app.use("/api/v1/projects", projectsRouter);
app.use("/api/v1/messages", messagesRouter);

export default app;
