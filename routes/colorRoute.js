const express = require("express");
const { createColor, updateColor } = require("../controller/colorCtrl");
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");
const router = express.Router();

router.post("/", authMiddleware, isAdmin, createColor);
router.put("/:id", authMiddleware, isAdmin, updateColor);

module.exports = router;
