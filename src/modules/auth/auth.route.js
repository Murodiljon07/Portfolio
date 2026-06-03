import e from "express";

const route = e.Router();

// Controllers
import { loginController } from "./auth.controller.js";

route.post("/admin/login", loginController);

export default route;
