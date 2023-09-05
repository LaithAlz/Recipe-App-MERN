const express = require("express");
const { signupUser, loginUser, getUsers } = require("../controller/userController");

const router = express.Router();

// signup
router.post("/signup", signupUser);

// login
router.post("/login", loginUser);
router.get("/", getUsers);

module.exports = router;
