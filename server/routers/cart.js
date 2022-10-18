const express = require("express");
const router = express.Router();
const verifyToken = require("../middleware/auth");

const Cart = require("../models/Cart");

// @route POST api/posts
// @desc  Create posts
// @access Private
router.post("/" ,async (req, res) => {
    const { userId , id_product } = req.body;
  
    try {
      const newCart = new Cart({
        userId,
        id_product,
      });
      await newCart.save();
      res.json({ success: true, cart: newCart });
    } catch (error) {
      console.log(error);
      res.status(500).json({ success: false, message: "Internal server error" });
    }
    
});

// @route GET api/posts
// @desc Get posts
// @access Private
router.get("/:userId", async (req, res) => {
  try {
    const carts = await Cart.find({ userId: req.params.userId });
    res.json({ success: true, carts });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});


module.exports = router;



