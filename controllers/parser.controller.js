import asyncHandler from "../middlewares/async.middleware.js";
import os from "os";

export const parserHandler = asyncHandler(async (req, res) => {
  res.json({
    ip: req.ip,
    language: req.headers["accept-language"],
    software: req.headers["user-agent"],
  });
});
