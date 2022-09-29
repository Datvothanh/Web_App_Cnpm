const express = require("express");
const router = express.Router();


const Product = require("../models/Product");

// @route GET api/posts
// @desc Get posts
// @access Private
router.get("/:id", async (req, res) => {
  try {
    const products = await Product.find({id_category: req.params.id});
    res.json({ success: true, products });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});
module.exports = router;