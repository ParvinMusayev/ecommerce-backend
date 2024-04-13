const express = require("express");
const {
  createUser,
  loginUserCtrl,
  getallUser,
  getUser,
  deleteUser,
  updatedUser,
} = require("../controller/userCtrl");
const { authMiddleware } = require("../middlewares/authMiddleware");
const router = express.Router();

router.post("/register", createUser);
router.get("/login", loginUserCtrl);
router.get("/all-users", getallUser);
router.get("/:id", authMiddleware, getUser);
router.delete("/:id", deleteUser);
router.put("/:id", updatedUser);

module.exports = router;
