import { Router } from "express";

import { getLandingData } from "../controllers/data.controller";

const router = Router();

router.get("/home", getLandingData);