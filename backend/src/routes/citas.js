import express from "express";
import CitasController from "../controllers/citasController.js";

const router = express.Router();

router.route("/").get(CitasController.getCitas)
.post(CitasController.insertCitas)


router.route("/:id")
.put(CitasController.updateCitas)
.delete(CitasController.deleteCitas);

export default router;