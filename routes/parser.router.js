import express from "express";
import { parserHandler } from "../controllers/parser.controller";

const router = express.Router();

router.route("").get(parserHandler);

export default router;
