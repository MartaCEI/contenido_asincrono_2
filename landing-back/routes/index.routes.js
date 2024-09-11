import { Router } from "express";

import { getLandingData } from "../controllers/data.controller.js";
import { getAllCorreos } from "../controllers/correos.controller.js";

const router = Router();

router.get("/home", getLandingData);

router.get("/correos", getAllCorreos);

export default router;