import e from "express";

const route = e.Router();

import authMiddleware from "../../middlewares/auth.middleware.js";

import {
  getAllMessagesController,
  postMessageController,
  deleteMessageController,
} from "./messages.controller.js";

route.get("/", authMiddleware, getAllMessagesController);
route.post("/send", postMessageController);
route.delete("/delete/:id", deleteMessageController);

export default route;
