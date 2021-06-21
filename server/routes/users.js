const express = require('express');
const router = express.Router();
const { auth } = require("../middleware/auth");
const userController= require('../controllers/users')

//=================================
//             User
//=================================

router.get("/auth", auth, userController.auth);
router.post("/register", userController.register);
router.post("/login", userController.login);
router.get("/logout", auth, userController.logout);

module.exports = router;
