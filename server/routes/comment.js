const express = require('express');
const router = express.Router();

const { auth } = require("../middleware/auth");
const commentController= require('../controllers/comment')

//=================================
//             Comment
//=================================

router.post("/uploadComment", auth,commentController.uploadComment);
router.post("/getComment", auth,commentController.getComment)
router.post("/saveComment", auth,commentController.saveComment);

module.exports = router;