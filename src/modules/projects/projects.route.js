import e from "express";

const router = e.Router();

import authMiddleware from "../../middlewares/auth.middleware.js";

import {
  getProjectsController,
  addProjectController,
  updateProjectController,
  deleteProjectController,
} from "./projects.controller.js";

router.get("/", getProjectsController);
router.post("/add", authMiddleware, addProjectController);
router.put("/update/:id", authMiddleware, updateProjectController);
router.delete("/delete/:id", authMiddleware, deleteProjectController);

export default router;
