import express from "express";
import LoginController from "../controllers/loginController.js";
const router = express.Router();

router.route("/").post(LoginController.login);

export default router;