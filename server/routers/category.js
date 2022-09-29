const express = require("express");
const router = express.Router();

const Category = require("../models/Category");


// @route GET api/posts
// @desc Get posts
// @access Private
router.get("/", async (req, res) => {
  try {
    const categories = await Category.find({ });
    res.json({ success: true, categories });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

// @route POST api/products
// @desc  Create products
// @access Private
router.post("/",async (req, res) => {
  const {name} = req.body;

  //Simple validation
  if (!name)
    return res
      .status(400)
      .json({ success: false, message: "Name is required" });

  try {
    const newCategory = new Category({
      name,
    });
    await newCategory.save();
    res.json({ success: true, message: "Happy learning!", category: newCategory });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

// // @route PUT api/posts
// // @desc Update post
// // @access Private
// router.put("/:id", verifyToken, async (req, res) => {
//   const { title, description, url, status } = req.body;

//   //Simple validation
//   if (!title)
//     return res
//       .status(400)
//       .json({ success: false, message: "Titile is required" });

//   try {
//     let updatePost = {
//       title,
//       description: description || "",
//       url: (url.startsWith("https://") ? url : `https://${url}`) || "",
//       status: status || "TO LEARN",
//     };
//     const postUpdateCondition = { _id: req.params.id, user: req.userId };

//     updatePost = await Post.findOneAndUpdate(postUpdateCondition, updatePost, {
//       new: true,
//     });

//     //User not authorised to update post or post not found
//     if (!updatePost)
//       return res.status(401).json({
//         success: false,
//         message: "Post not found or user not authorised",
//       });

//     res.json({
//       success: true,
//       message: "Excellent progress!",
//       post: updatePost,
//     });
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ success: false, message: "Internal server error" });
//   }
// });

// // @route DELETE api/posts
// // @desc DELETYE post
// // @access Private
// router.delete("/:id", verifyToken, async (req, res) => {
//   try {
//     const postDeleteCondition = { _id: req.params.id, user: req.userId };
//     const deletePost = await Post.findOneAndDelete(postDeleteCondition);

//     //User not authorised to update post or post not found
//     if (!deletePost)
//       return res.status(401).json({
//         success: false,
//         message: "Post not found or user not authorised",
//       });

//     res.json({
//       success: true,
//       message: "Delete success!",
//       post: deletePost,
//     });
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ success: false, message: "Internal server error" });
//   }
// });
module.exports = router;
