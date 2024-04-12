const express = require("express");
const {
  createUser,
  loginUserCtrl,
  getallUser,
  getUser,
  deleteUser,
} = require("../controller/userCtrl");
const router = express.Router();

router.post("/register", createUser);
router.get("/login", loginUserCtrl);
router.get("/all-users", getallUser);
router.get("/:id", getUser);
router.delete("/:id", deleteUser);

module.exports = router;
