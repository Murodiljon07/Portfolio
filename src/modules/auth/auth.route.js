import e from "express";

const route = e.Router();

// Middlewares
import adminMiddleware from "../../middlewares/admin.middleware.js";

// Controllers
import { loginController } from "./auth.controller.js";

route.post("/admin/login", adminMiddleware, loginController);

export default route;
