const express = require("express");
const {
  createColor,
  updateColor,
  getColor,
} = require("../controller/colorCtrl");
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");
const router = express.Router();

router.post("/", authMiddleware, isAdmin, createColor);
router.put("/:id", authMiddleware, isAdmin, updateColor);
router.get("/:id", getColor);
module.exports = router;
