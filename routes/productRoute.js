const express = require("express");
const {
  createProduct,
  getaProduct,
  updateProduct,
} = require("../controller/productCtrl");
const { isAdmin, authMiddleware } = require("../middlewares/authMiddleware");
const router = express.Router();

router.post("/", authMiddleware, isAdmin, createProduct);
router.get("/:id", getaProduct);

router.put("/:id", authMiddleware, isAdmin, updateProduct);

router.get("/", getAllProduct);

module.exports = router;
