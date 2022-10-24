const express = require("express");
const router = express.Router();
const verifyToken = require("../middleware/auth");

const Cart = require("../models/Cart");

// @route POST api/posts
// @desc  Create posts
// @access Private
router.post("/" ,async (req, res) => {
    const { userId , id_product , quantity} = req.body;
  
    try {
      const cart = await Cart.findOne({ userId : userId , id_product : id_product});

      if (cart !== null){
      
        let updateCart = {
          userId: cart.userId,
          id_product: cart.id_product,
          quantity : cart.quantity + 1
        };
      
        const postUpdateCondition = { _id: cart._id, userId: userId  };
    
        updateCart = await Cart.findOneAndUpdate( postUpdateCondition , updateCart, {new: true});

     
      }else{
        const newCart = new Cart({
          userId,
          id_product,
          quantity,
        });
        await newCart.save();
        res.json({ success: true, cart: newCart });
      }
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




// @route GET api/posts
// @desc Get posts
// @access Private
// router.post("/find", async (req, res) => {
//   const { userId , id_product } = req.body;
//   try {
   
    
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ success: false, message: "Internal server error" });
//   }
// });

// @route POST api/posts
// @desc  Create posts
// @access Private
router.post("/Up" ,async (req, res) => {
  const { userId , id_product} = req.body;

  try {
    const cart = await Cart.findOne({ userId : userId , id_product : id_product});
      let updateCart = {
        userId: cart.userId,
        id_product: cart.id_product,
        quantity : cart.quantity + 1
      };
    
      const postUpdateCondition = { _id: cart._id, userId: userId  };
  
      updateCart = await Cart.findOneAndUpdate( postUpdateCondition , updateCart, {new: true});

  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
  
});

// @route POST api/posts
// @desc  Create posts
// @access Private
router.post("/Down" ,async (req, res) => {
  const { userId , id_product} = req.body;

  try {
    const cart = await Cart.findOne({ userId : userId , id_product : id_product});
      let updateCart = {
        userId: cart.userId,
        id_product: cart.id_product,
        quantity : cart.quantity - 1
      };

      const postUpdateCondition = { _id: cart._id, userId: userId  };
  
      updateCart = await Cart.findOneAndUpdate( postUpdateCondition , updateCart, {new: true});

  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
  
});
module.exports = router;



