import e from "express";
import fs from "fs";

import { getMeController, updateMeController } from "./about.controller.js";

const router = e.Router();

router.get("/me", getMeController);
router.post("/me", updateMeController);

export default router;
