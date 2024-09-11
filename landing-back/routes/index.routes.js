import { Router } from "express";

import { getLandingData } from "../controllers/data.controller.js";
import { getAllCorreos } from "../controllers/correos.controller.js";
import { createCorreo } from "../controllers/correos.controller.js";

const router = Router();

router.get("/home", getLandingData);

router.get("/correos", getAllCorreos);
// router.get("/correos/:id", getSingleCorreo);
router.post("/nuevo", createCorreo);

export default router;