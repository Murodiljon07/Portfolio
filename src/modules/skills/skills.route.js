import e from "express";

const router = e.Router();

// Middleware
import authMiddleware from "../../middlewares/auth.middleware.js";

// Controllers
import {
  addSkillController,
  deleteSkillController,
  updateSkillController,
  getSkillsController,
} from "./skills.controller.js";

router.get("/", getSkillsController);
router.post("/add", authMiddleware, addSkillController);
router.put("/update/:id", authMiddleware, updateSkillController);
router.delete("/delete/:id", authMiddleware, deleteSkillController);

export default router;
