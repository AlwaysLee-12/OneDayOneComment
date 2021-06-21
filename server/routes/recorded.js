const express = require('express');
const router = express.Router();
const { auth } = require("../middleware/auth");
const recordedController= require('../controllers/recorded')

//=================================
//             Recorded
//=================================

router.post("/getRecorded", auth, recordedController.getRecorded);

module.exports = router;