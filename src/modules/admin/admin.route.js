import e from "express";

import { getMeController, updateMeController } from "./admin.controller.js";

const router = e.Router();

router.get("/me", getMeController);
router.post("/me", updateMeController);

export default router;
