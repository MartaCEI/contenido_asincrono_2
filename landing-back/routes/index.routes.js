import { Router } from "express";

import { getLandingData } from "../controllers/data.controller.js";

const router = Router();

router.get("/home", getLandingData);

export default router;