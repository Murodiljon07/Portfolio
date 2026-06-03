import e from "express";

import {
  getAdminController,
  updateAdminController,
} from "./admin.controller.js";

import authMiddleware from "../../middlewares/auth.middleware.js";

const router = e.Router();

router.get("/me", getAdminController);
router.post("/me", authMiddleware, updateAdminController);

export default router;
