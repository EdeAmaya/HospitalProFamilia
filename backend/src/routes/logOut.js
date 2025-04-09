import express from "express"; 
import LogOutController from "../controllers/logoutController.js";
const router = express.Router();

router.route("/").post(LogOutController.logOut); 

export default router;