import { Router } from "express";

import { getLandingData } from "../controllers/data.controller.js";
import { getAllCorreos, createCorreo, getAllCorreosWithUsers, deleteCorreo } from "../controllers/correos.controller.js";


const router = Router();

// Rutas al mock
router.get("/home", getLandingData);

//Rutas a mysql
router.get("/correos", getAllCorreosWithUsers)
router.post("/nuevo", createCorreo);
// router.get("/correos/:id", getSingleCorreo);
router.delete("/correos/:id", deleteCorreo);
// router.get("/correos/user/:userId", getCorreosFromUser);

export default router;