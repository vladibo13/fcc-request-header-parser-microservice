import express from "express";
import { parserHandler } from "../controllers/parser.controller.js";

const router = express.Router();

router.route("/whoami").get(parserHandler);

export default router;
