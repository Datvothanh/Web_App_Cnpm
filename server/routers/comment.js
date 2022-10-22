const express = require("express");
const router = express.Router();
const verifyToken = require("../middleware/auth");

const Comment = require("../models/Comment");

// @route POST api/posts
// @desc  Create posts
// @access Private
router.post("/" ,async (req, res) => {
    const { id_user , comment , id_product } = req.body;
  
    try {
      const newComment = new Comment({
        id_user,
        comment,
        id_product,
      });
      await newComment.save();
      res.json({ success: true, cart: newComment });
    } catch (error) {
      console.log(error);
      res.status(500).json({ success: false, message: "Internal server error" });
    }
    
});

// @route GET api/posts
// @desc Get posts
// @access Private
router.get("/:id", async (req, res) => {
  try {
    const comment = await Comment.find({id_product: req.params.id});
    res.json({ success: true, comment });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});
module.exports = router;